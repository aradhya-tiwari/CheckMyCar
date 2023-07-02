import mongoose from 'mongoose'

// model Article {
//     id          Int      @id @default(autoincrement())
//     createdAt   DateTime @default(now())
//     markdown    Bytes
//     title       String
//     slug        String
//     description String
//     image       String
//   }
  
//   model car {
//     id   Int   @id @default(autoincrement())
//     name Bytes
//   }

const _Article = new mongoose.Schema({
    createdAt : {
        type:   Date,
        default:    Date.now
    },
    markdown:String,
    title: String,
    slug:String,
    description:String,
    image:String
})
// console.log("Hello")




let Article = mongoose.models.Article || mongoose.model('Article',_Article)
export {Article}