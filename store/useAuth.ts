import type {Database} from "~/types/database.types";
import {useNotification} from "@kyvg/vue3-notification";
import router from "#app/plugins/router";

export const useAuth = defineStore<string,
    {
        email: string,
        password: string,
        showPassword:boolean
    },
    {},
    {
        signIn: () => Promise<void>,
        signUp: () => Promise<void>,
        signOut: () => Promise<void>
    }
>("auth", {
        state: () => ({
            email: "",
            password: "",
            showPassword:false
        }),
        getters: {},
        actions: {
            async signIn() {
                const router = useRouter()
                const {notify} = useNotification()
                const client = useSupabaseClient<Database>()

                const {data, error} = await client.auth.signInWithPassword({
                    email: this.email,
                    password: this.password
                })

                if (error) return notify({
                    title: error.message
                })

                if (data.user == null) return notify({
                    title: "Login gagal"
                })

                await router.push({path: "/"})

            },
            async signUp(){

            },
            async signOut(){
                const client = useSupabaseClient<Database>()
                const router = useRouter()

                const signOut = await client.auth.signOut()

                await router.push({path:"/auth/sign-in"})
            }
        }
    }
)