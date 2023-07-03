import { Article } from '$lib/models/model'
// import { Article } from '../models/model.js'
import mongoose from 'mongoose'
import {DATABASE_URL} from '$env/static/private'

await mongoose.connect(DATABASE_URL)

/**
 * 
 * @param {"condtions for article query"} obj 
 * @param {Object} obj
 * @returns "Query for an Article"
 */
async function getArticle(obj) {

    let res = await Article.findOne(obj)
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
getArticle()
export { getArticle, getArticles }