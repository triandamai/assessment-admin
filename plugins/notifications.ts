import Notifications from "@kyvg/vue3-notification"

export default defineNuxtPlugin(({vueApp})=>{
    // @ts-ignore
    vueApp.use(Notifications)
})
