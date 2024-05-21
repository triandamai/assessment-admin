<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();
const primary = theme.current.value.colors.primary;
const secondary = theme.current.value.colors.secondary;
const select = ref("March 2023");
const items = ref(["March 2023", "April 2023", "May 2023"]);

</script>
<template>
  <v-card elevation="10" class="withbg">
    <v-card-item>
      <div class="d-sm-flex align-center justify-space-between pt-sm-2">
        <div><v-card-title class="text-h5">Sales Overview</v-card-title></div>
        <div class="my-sm-0 my-2">
          <v-select
            v-model="select"
            :items="items"
            variant="outlined"
            density="compact"
            hide-details
          ></v-select>
        </div>
      </div>
      <div class="mt-6">
      </div>
    </v-card-item>
  </v-card>
</template>
