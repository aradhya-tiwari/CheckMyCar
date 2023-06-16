import { PrismaClient } from '@prisma/client';

global.prisma
const prisma = global.prisma || new PrismaClient()
if (process.env.NODE_ENV == "development") {
    global.prisma = prisma
}
let obj = {
    title: "Hello World",
    slug: "Hello-world",
    description: "Sample Add",
    markdown: "# Helloworld"
}
async function addArticle() {
    await prisma.article.create({
        data: {
            title: obj.title,
            slug: obj.slug,
            description: obj.description,
            markdown: obj.markdown
        }
    })
}
addArticle()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        // process.exit(1)
    })

export { prisma, addArticle }; 