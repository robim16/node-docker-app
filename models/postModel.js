const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Post must have title"]
    },
    body: {
        type: String,
        require: [true, "Post must have body"]
    }
})

const Post = mongoose.Model("Post", postSchema)
module.exports = Post