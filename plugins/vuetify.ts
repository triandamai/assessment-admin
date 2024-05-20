
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import '@/scss/style.scss';
import {
  PurpleTheme,
} from "@/theme/LightTheme";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "PurpleTheme",
      themes: {
        PurpleTheme,
      },
    },
    icons:{
      defaultSet:'mdi'
    }
  });
  // @ts-ignore
  nuxtApp.vueApp.use(vuetify);
  // @ts-ignore
  nuxtApp.vueApp.use(PerfectScrollbar);
  // @ts-ignore
  nuxtApp.vueApp.use(VueApexCharts);
  // @ts-ignore
  nuxtApp.vueApp.use(VueTablerIcons);
});

