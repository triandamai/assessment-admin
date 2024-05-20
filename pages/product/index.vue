<script setup lang="ts">
import UiParentCard from '@/components/shared/UiParentCard.vue';
import {type Product, productHeader} from "~/types/data/product";

const product = useProduct()
const router = useRouter()

function showDetail(product:Product){
  router.push({path:`/product/view/${product.id}`})
}

onMounted(async ()=>{
  await product.getListProduct()
})

</script>
<template>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Data Produk">
        <div class="pa-7 pt-1"><p class="text-body-1">This is a sample page </p></div>
        <div>
          <v-data-table-server
              v-model:items-per-page="product.size"
              :headers="productHeader"
              :items="product.product"
              :items-length="product.product.length"
              :loading="product.loading"
              :search="product.search"
              item-value="name"
              @update:options="product.getListProduct"
          >
            <template v-slot:item.thumbnail="{item}">
              <v-img
                  :src="`https://zyzpwocchqhwgerlznho.supabase.co/storage/v1/object/public/product/${item.thumbnail}`"
                  width="150"
                  @click="showDetail(item)"
              />
            </template>
            <template v-slot:item.product_name="{item}">
              <v-chip :key="item.product_name">
                {{item.product_name}}
              </v-chip>
            </template>
            <template v-slot:item.action="{ item }">
              <v-icon
                  class="me-2"
                  size="small"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                  size="small"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table-server>
        </div>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
