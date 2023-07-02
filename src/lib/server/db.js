import { Article } from '$lib/models/model'
// import { Article } from '../models/model.js'
import mongoose from 'mongoose'

await mongoose.connect('mongodb://127.0.0.1:27017/test')

/**
 * 
 * @param {"condtions for query"} obj 
 * @returns 
 */
async function getArticle(obj) {

    console.log(res)
    let { _id, markdown, title, slug, description, image, createdAt } = res
    _id = _id.toString()
    return { _id, markdown, title, slug, description, image, createdAt }
}
async function getArticles(obj) {
    let res = await Article.find(obj)
    return res
}

// export { addArticle, getArticle, getArticles, deleteArticle }

export { getArticle, getArticles }