import { getArticle } from '$lib/server/db'
import { Article } from '$lib/models/model'
export const prerender = true
// export const csr = false
// let res = marked.parse(`
// ----
// layout: post
// title: Hello Titile
// ----
// # ***hello World***
// ## Hello Chicha
// yo whatsup
// `)
// console.log(res)

export async function load({ params }) {
    // let res = await getArticle({
    //     slug: params.slug

    // })
    // console.log(res+"---------------------------")

    // return {res}
    let res = await Article.findOne({
            slug: params.slug
    
        })
    console.log(res)
    let {_id,markdown,title,slug,description,image,createdAt} = res 
    _id = _id.toString()
    return {_id,markdown,title,slug,description,image,createdAt}
    // return {res}
}

