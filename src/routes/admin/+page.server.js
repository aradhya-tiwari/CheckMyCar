import { addArticle, getArticle } from '$lib/server/db'
import slugify from 'slugify'

export async function load() {
    let resp = addArticle({
        markdown:"# HEllo \n lorem11 | * hello * | World\n-------- ",
        slug: slugify(" ", {
                    lower: true
                }),
        title:"This is just a title nothing else",
        description: "wowowow this is a bog desctiption you now i am a big guy ",
        image:"/assets/image1.jpg"
    })
    return { resp }
}


export const actions = {
    add: async ({ request }) => {
        const data = await request.formData();
        const title = data.get('title');
        const desc = data.get("description")
        // const slug = data.get("slug")
        const mkdwn = data.get("markdown")


        // let resp = addArticle({
        //     title: title,
        //     description: desc,
        //     slug: slugify(title, {
        //         lower: true
        //     }),
        //     markdown: mkdwn
        // })
     
        // let resp = getArticle({ id: 23 })
        
    }

} 