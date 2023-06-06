import { addArticle } from '$lib/server/db'

export const actions = {
    add: async ({ request }) => {
        const data = await request.formData();
        const title = data.get('title');
        const desc = data.get("description")
        const slug = data.get("slug")
        const mkdwn = data.get("markdown")
        let resp = addArticle({
            title: title,
            description: desc,
            slug: slug,
            markdown: mkdwn
        })
        console.log(resp)
    }

} 
