<script setup lang="ts">
import UiParentCard from '~/components/shared/UiParentCard.vue';
import {itemsKeyContactInformation} from "~/types/data/about";

const about = useAbout()
const router = useRouter()

onMounted(()=>{
  about.getListContact()
})


</script>
<template>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Informasi Kontak">
        <div class="pa-7 pt-1">
          <template v-for="contact in about.contact_information">
            <v-row>
              <v-col cols="12">
                <v-row align="center" justify="center">
                  <v-col cols="3">
                    <v-select
                        :items="itemsKeyContactInformation"
                        variant="outlined"
                        placeholder="Tipe Kontak"
                        v-model="contact.key"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field v-model="contact.value" variant="outlined" placeholder="Nama Produk"/>
                  </v-col>
                  <v-col cols="3">
                    <v-btn @click="about.deleteContact(contact)" icon="mdi-close" flat>
                    </v-btn>
                    <v-btn @click="about.saveContact(contact)" icon="mdi-check" flat>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </template>
          <v-row justify="end">
            <v-btn @click="about.newContact" variant="flat">
              Tambah Kontak
            </v-btn>
          </v-row>
        </div>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
