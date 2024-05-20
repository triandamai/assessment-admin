import type {AboutType, ContactInformationType} from "~/types/model";
import {notify} from "@kyvg/vue3-notification";

export const useAbout = defineStore<string, {
    contact_information: Array<ContactInformationType>,
    about: AboutType | null,

    aboutDescription: string | null,
    bioFounder: string | null,
    founderName: string | null,

    fileAbout: File | null,
    fileBio: File | null,

    previewBio: string | null,
    previewAbout: string | null
}, {}, {
    getAbout(): Promise<boolean>,
    getListContact(): Promise<boolean>,
    newContact(): void,
    deleteContact(data: ContactInformationType): Promise<boolean>,
    saveContact(data: ContactInformationType): Promise<boolean>,

    saveBio(): Promise<boolean>,
    saveAbout(): Promise<boolean>
}>('about', {
    state: () => ({
        contact_information: [],
        about: null,

        aboutDescription: '',
        bioFounder: '',
        founderName: ',',

        fileAbout: null,
        fileBio: null,

        previewAbout: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        previewBio: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg'

    }),
    getters: {},
    actions: {
        async getAbout(): Promise<boolean> {
            const client = useSupabaseClient<Database>()

            const {data, error} = await client.from('about')
                .select()
                .single()

            if (!error) {
                this.about = data

                this.aboutDescription = data.about
                this.bioFounder = data.founder_bio
                this.founderName = data.founder_name
                this.previewAbout =  data.about_thumbnail
                this.previewBio = data.founder_picture
            }
            return true
        },
        async getListContact(): Promise<boolean> {
            const client = useSupabaseClient<Database>()

            const data = await client.from('contact_information')
                .select()

            if (!data.error) {
                this.contact_information = data.data
            }

            return true
        },
        newContact() {
            this.contact_information.push({
                created_at: new Date().toDateString(),
                id: -1,
                key: '',
                name: '',
                value: ''
            })
        },
        async deleteContact(data: ContactInformationType): Promise<boolean> {
            //immediate delete
            if (data.id == -1) {
                const index = this.contact_information.map(value => value.id)
                    .indexOf(data.id)
                if (index >= 0) {
                    this.contact_information.splice(index, 1)
                }
                return true
            }

            const client = useSupabaseClient<Database>()

            const deleteData = await client.from('contact_information')
                .delete()
                .eq('id', data.id)

            if (deleteData.error) {
                notify({
                    title: deleteData.error.message,
                    type: 'error'
                })
                return false
            }
            const index = this.contact_information.map(value => value.id)
                .indexOf(data.id)
            if (index < 0) {
                return false
            }

            this.contact_information.splice(index, 1)
            return true
        },
        async saveContact(data: ContactInformationType): Promise<boolean> {

            const client = useSupabaseClient<Database>()


            if (data.id < 0) {
                //save new data
                const saved = await client
                    .from('contact_information')
                    .insert({
                        key: data.key,
                        value: data.value,
                        name: data.key,
                        created_at: new Date().toDateString()
                    })
                    .select()

                if (saved.error) {
                    notify({
                        title: saved.error.message,
                        type: 'error'
                    })
                    return false
                }

                const index = this.contact_information.map(value => value.id)
                    .indexOf(data.id)
                if (index >= 0) {

                    this.contact_information[index] = saved.data[0]
                }

                notify({
                    title: "Berhasil menambahkan kontak",
                    type: 'success'
                })
                return true
            }

            const saved = await client.from('contact_information')
                .update({
                    key: data.key,
                    value: data.value,
                    name: data.key,
                    id: data.id
                })
                .eq('id', data.id)

            if (saved.error) {
                notify({
                    title: saved.error.message,
                    type: 'error'
                })
                return false
            }
            notify({
                title: "Berhasil menambahkan kontak",
                type: 'success'
            })
            return true
        },
        async saveBio(): Promise<boolean> {
            const client = useSupabaseClient<Database>()

            if (this.about == null) {
                notify({
                    title: "Gagal merubah biografi",
                    type: 'error'
                })
                return false
            }

            if (this.fileBio != null) {
                const savedImage = await client.storage.from('about').upload(`bio-${this.about.founder_picture}`, this.fileBio)

                if (savedImage.error) {
                    notify({
                        title: savedImage.error.message,
                        type: 'error'
                    })
                    return false
                }
            }

            const updated = await client.from('about')
                .update({
                    founder_name: this.founderName,
                    founder_bio: this.bioFounder
                })
                .eq('id', this.about.id)

            if (updated.error) {
                notify({
                    title: updated.error.message,
                    type: 'error'
                })
                return false
            }

            notify({
                title: "Bio dirubah",
                type: 'success'
            })
            return true
        },
        async saveAbout(): Promise<boolean> {

            const client = useSupabaseClient<Database>()

            if (this.about == null) {
                notify({
                    title: "Gagal merubah tentang kami",
                    type: 'error'
                })
                return false
            }

            if (this.fileAbout != null) {
                const savedImage = await client.storage.from('about').upload(`about-${this.about.founder_picture}`, this.fileAbout)

                if (savedImage.error) {
                    notify({
                        title: savedImage.error.message,
                        type: 'error'
                    })
                    return false
                }
            }

            const updated = await client.from('about')
                .update({
                    about: this.aboutDescription
                })
                .eq('id', this.about.id)

            if (updated.error) {
                notify({
                    title: updated.error.message,
                    type: 'error'
                })
                return false
            }

            notify({
                title: "Tentang kami dirubah",
                type: 'success'
            })
            return true
        }
    }
})