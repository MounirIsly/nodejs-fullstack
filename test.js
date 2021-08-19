const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mon_db', {useNewUrlParser: true, useUnifiedTopology: true})

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    image: String,
    datePosted: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('post', PostSchema)



module.exports = Post