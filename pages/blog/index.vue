<script setup lang="ts">
import UiParentCard from '~/components/shared/UiParentCard.vue';

definePageMeta({
  middleware:['auth']
})

const blog = useBlog()
const search = ref("")

onMounted(()=>{
  blog.getListBlog()
})

</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Sample Page"> 
                <div class="pa-7 pt-1">
                  <v-data-iterator
                      :items="blog.blogs"
                      :items-per-page="3"
                      :search="blog.search"
                  >
                    <template v-slot:header>
                      <v-toolbar class="px-2">
                        <v-text-field
                            v-model="search"
                            density="comfortable"
                            placeholder="Search"
                            prepend-inner-icon="mdi-magnify"
                            style="max-width: 300px;"
                            variant="solo"
                            clearable
                            hide-details
                        ></v-text-field>
                      </v-toolbar>
                    </template>

                    <template v-slot:default="{ items }">
                      <v-container class="pa-2" fluid>
                        <v-row dense>
                          <v-col
                              v-for="item in items"
                              :key="item.title"
                              cols="auto"
                              md="12"

                          >
                            <v-card class="pb-3" border flat>
                              <v-img :src="item.raw.img"></v-img>

                              <v-list-item :subtitle="item.raw.subtitle" class="mb-2">
                                <template v-slot:title>
                                  <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>
                                </template>
                              </v-list-item>

                              <div class="d-flex justify-space-between px-4">
                                <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                                  <v-icon icon="mdi-clock" start></v-icon>

                                  <div class="text-truncate">{{ item.raw.duration }}</div>
                                </div>
                                <v-row class="d-fex justify-end px-4">

                                  <v-btn
                                      class="text-none"
                                      size="small"
                                      text="Delete"
                                      border
                                      flat
                                  >
                                  </v-btn>
                                  <v-btn
                                      class="text-none"
                                      size="small"
                                      text="Edit"
                                      border
                                      flat
                                  >
                                  </v-btn>
                                  <v-btn
                                      class="text-none"
                                      size="small"
                                      text="Read"
                                      border
                                      flat
                                  >
                                  </v-btn>
                                </v-row>
                              </div>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-container>
                    </template>

                    <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                      <div class="d-flex align-center justify-center pa-4">
                        <v-btn
                            :disabled="page === 1"
                            density="comfortable"
                            icon="mdi-arrow-left"
                            variant="tonal"
                            rounded
                            @click="prevPage"
                        ></v-btn>

                        <div class="mx-2 text-caption">
                          Page {{ page }} of {{ pageCount }}
                        </div>

                        <v-btn
                            :disabled="page >= pageCount"
                            density="comfortable"
                            icon="mdi-arrow-right"
                            variant="tonal"
                            rounded
                            @click="nextPage"
                        ></v-btn>
                      </div>
                    </template>
                  </v-data-iterator>
                </div>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
