import {getExtensionFromMime} from "~/composables/useFile";
import {notify} from "@kyvg/vue3-notification";
import type {ProductPriceCategoryType, ProductType} from "~/types/model";
import type {ProductForm} from "~/types/data/product";

export const useProduct = defineStore<string, {
    size: number,
    loading: boolean,
    search: string,
    product: Array<ProductType>,
    productCategory: Array<ProductPriceCategoryType>,
    productForm: ProductForm | null
}, {}, {
    getListProduct: () => Promise<void>
    saveProduct: (form: ProductForm) => Promise<boolean>
}>("product", {
    state: () => ({
        size: 1,
        loading: false,
        search: "",
        product: [],
        productCategory: [],
        productForm: null
    }),
    getters: {},
    actions: {
        async getListProduct() {
            this.loading = true
            const client = useSupabaseClient<Database>()

            const {data,error} = await client.from('product').select()

            this.loading = false
            if(error){

            }

            if(data){
                this.product = data
            }
        },
        async saveProduct(
            form: ProductForm
        ): Promise<boolean> {

            if (form.productName.length < 1) {
                notify({
                    title: "Ada data yang kosong",
                    text: "Name Produk Tidak Boleh Kosong!",
                    type: 'error'
                })
                return false
            }

            if (form.thumbnail == null) {
                notify({
                    title: "Ada data yang kosong",
                    text: "Cover Produk Tidak Boleh Kosong!",
                    type: 'error'
                })
                return false
            }

            if (form.thumbnail.size > 1_000_000) {
                notify({
                    title: "Cover tidak ter upload",
                    text: "Cover produk terlalu besar, maksimal 1 MB",
                    type: 'error'
                })
                return false
            }
            const client = useSupabaseClient<Database>()

            const timeStamp = new Date().getTime().toString()
            const ext = getExtensionFromMime(form.thumbnail.type)
            const fileName = `${timeStamp}${ext}`
            const savedImage = await client.storage.from('product').upload(fileName, form.thumbnail)

            if (savedImage.error) {
                notify({
                    title: "Gagal mengupload gambar cover",
                    text: savedImage.error.message,
                    type: 'error'
                })
                return false
            }

            const {data, error} = await client
                .from("product")
                .insert({
                    content: form.content,
                    thumbnail: fileName,
                    product_name: form.productName
                })
            if (error) {
                notify({
                    title: "Gagal menyimpan product",
                    text: error.message,
                    type: 'error'
                })
                return false
            }

            notify({
                title: "Produk Berhasil disimpan"
            })
            return true
        }
    }
})