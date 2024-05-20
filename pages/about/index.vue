<script setup lang="ts">
import UiParentCard from "~/components/shared/UiParentCard.vue";

const about = useAbout()
const router = useRouter()

function setDefaultBio() {
  about.previewBio = "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
}

function setDefaultAbout() {
  about.previewAbout = "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
}

function onFileAboutChange(event: InputEvent) {
  if (!event.target) return setDefaultAbout();
  const target = (event.target as HTMLInputElement)
  if (!target.files) return setDefaultAbout()
  if (target.files.length < 1) return setDefaultAbout()
  about.previewAbout = URL.createObjectURL(target.files![0])
}

function onFileBioChange(event: InputEvent) {
  if (!event.target) return setDefaultBio();
  const target = (event.target as HTMLInputElement)
  if (!target.files) return setDefaultBio()
  if(target.files.length < 1) return setDefaultBio()
  about.previewBio = URL.createObjectURL(target.files![0])
}

function onFileTeamChange(event: InputEvent) {
  if (!event.target) return setDefaultBio();
  const target = (event.target as HTMLInputElement)
  if (!target.files) return setDefaultBio()
  if(target.files.length < 1) return setDefaultBio()
  about.previewBio = URL.createObjectURL(target.files![0])
}


onMounted(() => {
  about.getAbout()
})

</script>
<template>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Tentang Kami">
        <div class="pa-7 pt-1">
          <v-row>
            <v-col cols="12">
              <EditorTipTap v-model="about.aboutDescription"/>
            </v-col>
            <v-col cols="12" class="pa-2">
              <v-row justify="center" align-content="center">
                <v-col cols="5" lg="5" md="5" sm="5" xs="5">
                  <img
                      :src="about.previewAbout"
                      style="width: 100%;"
                      alt="Preview"
                  />
                </v-col>
                <v-col cols="7" lg="7" md="7" sm="7" xs="7">
                  <v-file-input @change="onFileAboutChange" v-model="about.fileAbout" variant="outlined" label="Cover"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn @click="about.saveAbout" variant="flat">
              Simpan
            </v-btn>
          </v-row>
        </div>
      </UiParentCard>
    </v-col>
    <v-col cols="12" md="12">
      <UiParentCard title="Founder">
        <div class="pa-7 pt-1">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="about.founderName" placeholder="Masukkan nama founder" variant="outlined"/>
            </v-col>
            <v-col cols="12">
              <EditorTipTap v-model="about.bioFounder"/>
            </v-col>
            <v-col cols="12" class="pa-2">
              <v-row justify="center" align-content="center">
                <v-col cols="5" lg="5" md="5" sm="5" xs="5">
                  <img
                      :src="about.previewBio"
                      style="width: 100%;"
                      alt="Preview"
                  />
                </v-col>
                <v-col cols="7" lg="7" md="7" sm="7" xs="7">
                  <v-file-input @change="onFileBioChange" v-model="about.fileBio" variant="outlined" label="Cover"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn @click="about.saveBio" variant="flat">
              Simpan
            </v-btn>
          </v-row>
        </div>
      </UiParentCard>
    </v-col>
    <v-col cols="12" md="12">
      <UiParentCard title="Team">
        <div class="pa-7 pt-1">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="about.founderName" placeholder="Masukkan nama founder" variant="outlined"/>
            </v-col>
            <v-col cols="12">
              <EditorTipTap v-model="about.bioFounder"/>
            </v-col>
            <v-col cols="12" class="pa-2">
              <v-row justify="center" align-content="center">
                <v-col cols="5" lg="5" md="5" sm="5" xs="5">
                  <img
                      :src="about.previewBio"
                      style="width: 100%;"
                      alt="Preview"
                  />
                </v-col>
                <v-col cols="7" lg="7" md="7" sm="7" xs="7">
                  <v-file-input @change="onFileBioChange" v-model="about.fileBio" variant="outlined" label="Cover"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn @click="about.saveBio" variant="flat">
              Simpan
            </v-btn>
          </v-row>
        </div>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
