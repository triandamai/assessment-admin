export default defineEventHandler(async (event)=>{
    const client = useSupabaseClient<Database>()

    const data = await client.from('contact_information')
        .select()

    return {
        success:true,
        message:"Data informasi kontak",
        data:data
    }
})