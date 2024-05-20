// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },
    supabase: {
        redirect: false,
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY
    },
    ssr: false,
    typescript: {
        shim: false
    },
    build: {
        transpile: ["vuetify"],
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
    nitro: {
        serveStatic: true,
    },
    devServerHandlers: [],
    hooks: {},
    modules: ["@nuxtjs/supabase", "@pinia/nuxt"],
    imports: {
        autoImport: true,
        dirs: ["store", "types"]
    }
})