import { prisma } from "./prisma"
import type { article } from "../types/dbTypes"


async function addArticle(obj: article) {
    try {
        let response = await prisma.article.create({
            data: {
                title: obj.title,
                slug: obj.slug,
                description: obj.description,
                markdown: obj.markdown
            }
        })
        console.log(response)
        await prisma.$disconnect()
    } catch (e) {
        console.log(e)
        await prisma.$disconnect()
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
// deleteArticle()
export { addArticle }