export function getExtensionFromMime(mime:string){
    const split = mime.split("/")
    return `.${split[1]}`
}