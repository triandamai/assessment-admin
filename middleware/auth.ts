import {when} from "q";

export default defineNuxtRouteMiddleware(async(to)=>{
    if(import.meta.server) return

    const router = useRouter()
    const client = useSupabaseClient()
    const {data,error} = await client.auth.getSession()

    if(error){
        await router.push({path:"/auth/sign-in"})
        return
    }
    if(data.session == null){
        await router.push({path:"/auth/sign-in"})
        return
    }
})