const Post = require('../test')

module.exports = async (req, res)=>{
    const post = await Post.find({})
    res.render('index', {
        post
    })
}