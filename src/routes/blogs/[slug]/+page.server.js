import { getArticle } from '$lib/server/db'

export const prerender = "auto";
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

export function load({ params }) {
    let res = getArticle({
        slug: params.slug

    })
    console.log(res)
    return res
}

