import { addArticle, getArticle } from '$lib/server/db'
import slugify from 'slugify'

let resp = {} | " "
export async function load() {

    return { resp }
}

export const csr = true;
export const prerender = false
export const actions = {
    insert: async ({ request }) => {
        const data = await request.formData();
        const title = data.get('title');
        const desc = data.get("description")
        const img = data.get("img")
        const mkdwn = data.get("markdown")


        resp = addArticle({
            markdown: mkdwn,
            slug: slugify(title, {
                lower: true
            }),
            title: title,
            description: desc,
            image: img
        })
        return resp

    }

} 