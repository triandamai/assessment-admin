import type {BlogType} from "~/types/model";
import {getExtensionFromMime} from "~/composables/useFile";
import type {BlogForm} from "~/types/data/blog";
import {notify} from "@kyvg/vue3-notification";

export const useBlog = defineStore<string, {
    search: string,
    blogs: Array<BlogType>
}, {}, {
    getListBlog(): Promise<boolean>,
    saveBlog(form: BlogForm): Promise<boolean>
}>("blog", {
    state: () => ({
        search: "",
        blogs: []
    }),
    getters: {},
    actions: {
        async getListBlog(): Promise<boolean> {
            const client = useSupabaseClient<Database>()

            const blogs = await client.from('blog')
                .select()
            if (!blogs.error) {
                this.blogs = blogs.data
            }

            return true
        },
        async saveBlog(form: BlogForm): Promise<boolean> {

            if (form.thumbnail == null) {

                return false
            }
            const client = useSupabaseClient<Database>()
            const timeStamp = new Date().getTime().toString()
            const ext = getExtensionFromMime(form.thumbnail.type)
            const fileName = `${timeStamp}${ext}`
            const savedImage = await client.storage.from('blog').upload(fileName, form.thumbnail)

            if (savedImage.error) {
                notify({})
                return false
            }

            const saved = await client.from('blog')
                .insert({
                    title: form.title,
                    content: form.content,
                    thumbnail: fileName,
                    created_at: new Date().toDateString()
                })

            return false
        }
    }
})