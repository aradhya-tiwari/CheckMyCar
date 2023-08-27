import { getArticles } from "../lib/server/db.js"

export const ssr = false
export const load = async () => {
    let resp = await getArticles()
    let str_blogs = JSON.stringify(resp)
    let blogs = JSON.parse(str_blogs)
    return { blogs }
}