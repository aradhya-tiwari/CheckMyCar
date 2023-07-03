import { Article } from '$lib/models/model'
import mongoose, { trusted } from 'mongoose'
import {DATABASE_URL} from '$env/static/private'

await mongoose.connect(DATABASE_URL)



// createdAt : {
//     type:   Date,
//     default:    Date.now
// },
// markdown:String,
// title: String,
// slug:String,
// description:String,
// image:String
// })

function check(what,obj){
    let {markdown,title,slug,description,image} = obj
    switch(what){
        case "Article":
            if(markdown||title||slug||description||image) return true
            else return false
        
        }
}




/**
 * 
 * @param {"condtions for article query"} obj 
 * @param {Object} obj
 * @returns "Query for an Article"
 */
async function getArticle(obj) {

    let res = await Article.findOne(obj)
    console.log(res)

    if(res != null){
    let { _id, markdown, title, slug, description, image, createdAt } = res
    _id = _id.toString()
    return { _id, markdown, title, slug, description, image, createdAt }
    }
    else{
        return {title:"Some Error Occured"}
    }
}

async function getArticles(obj) {
    let res = await Article.find(obj)
    return res
}


/**
 * 
 * @param {"article Object"} obj 
 * @returns "response if the query was successful or not"
 */
async function addArticle(obj){
    let res = {}
    if(check('Article',obj)){
        try{
        res = new Article(obj)
        console.log(res)
        res.save()
        return "Data Inserted Into Database Succesfully 😊"
    }catch(e){
        return "Could not enter data into Database 😔"+e
    }
    }
    else{
        return "Something is Missing ig 🤔"
    }
}

await Article.deleteMany()

// export { addArticle, getArticle, getArticles, deleteArticle }
export { getArticle, getArticles ,addArticle}