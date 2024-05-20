<script setup lang="ts">
import UiParentCard from '~/components/shared/UiParentCard.vue';

const product = useProduct()
const router = useRouter()

const productName = ref("")
const content = ref("")
const file = ref<File|null>(null)
const preview = ref<string | null>("https://cdn.vuetifyjs.com/images/parallax/material.jpg")

function setDefault(){
  preview.value = "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
}
function onFileChange(event: InputEvent) {


  if(!event.target) return setDefault();
  const target = (event.target as HTMLInputElement)
  if(!target.files) return setDefault()

  preview.value =  URL.createObjectURL(target.files[0])
}

async function saveProduct(){
 const success =  await product.saveProduct({
    productName:productName.value,
    content:content.value,
    thumbnail:file.value
  })
  if(success){
    content.value = ''
    setDefault()
    productName.value = ''
    file.value= null

    await router.push({path: '/product'})
  }
}

</script>
<template>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Tambah Produk Baru">
        <div class="pa-7 pt-1">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="productName" variant="outlined" placeholder="Nama Produk"/>
            </v-col>
            <v-col cols="12">
              <EditorTipTap v-model="content"/>
            </v-col>
            <v-col cols="12" class="pa-2">
              <v-row justify="center" align-content="center">
                <v-col cols="5" lg="5" md="5" sm="5" xs="5">
                  <img
                      :src="preview"
                      style="width: 100%;"
                      alt="Preview"
                  />
                </v-col>
                <v-col cols="7" lg="7" md="7" sm="7" xs="7">
                  <v-file-input @change="onFileChange" v-model="file" variant="outlined" label="Cover"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn @click="saveProduct" variant="flat">
              Simpan
            </v-btn>
          </v-row>
        </div>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
