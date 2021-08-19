const Post = require('../test')
const path = require('path')

module.exports = (req, res)=>{
    let image = req.files.image
    image.mv(path.resolve(__dirname,'..','public/img', image.name), async(error)=>{
        await Post.create({
            ...req.body,
            image: '/img/' + image.name
        })
        res.redirect('/')
    })
}