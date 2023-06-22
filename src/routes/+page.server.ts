import { getArticles } from "$lib/server/db"
export const load = () => {
    let resp = getArticles()
    let blogs = resp
    // console.log(blogs)
    return getArticles()
}