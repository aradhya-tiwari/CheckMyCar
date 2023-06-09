import { prisma } from "./prisma"
import type { article } from "../types/dbTypes"
import { object_without_properties } from "svelte/internal"


async function addArticle(obj: any) {
    try {
        const mkdwnBuffer = Buffer.from(obj.markdown, "utf-8")
        let response = await prisma.article.create({
            data: {
                title: obj.title,
                slug: obj.slug,
                description: obj.description,
                markdown: mkdwnBuffer
            }
        })
        console.log(response)
        await prisma.$disconnect()
        return response
    } catch (e) {
        console.log(e)
        await prisma.$disconnect()
        return "Bad Reqest ---" + e
    }
}
async function deleteArticle() {
    try {
        let response = await prisma.article.deleteMany()
        console.log(response)
        await prisma.$disconnect()
    } catch (e) {
        console.log(e)
        await prisma.$disconnect()
    }
}
async function getArticle(obj: {}) {
    let resp: {} | null
    if (Object.keys(obj).length == 0) {
        resp = await prisma.article.findFirst()
    }
    else {
        resp = await prisma.article.findFirst({
            where: obj
        })
    }
    resp.markdown = resp.markdown.toString()
    return resp

}
// deleteArticle()
export { addArticle, getArticle }