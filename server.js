const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const homeController = require('./controllers/home')
const getPostController = require('./controllers/getPost')
const newStoreController = require('./controllers/storePost')
const newPostController = require('./controllers/newPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const bodyParser = require('body-parser')
app.use(fileUpload())
mongoose.connect('mongodb://localhost/mon_db', {useNewUrlParser: true, useUnifiedTopology: true})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', homeController)
/*app.get('/', async (req, res)=>{
    const post = await Post.find({})
    res.render('index', {
        post
    })
})*/
app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/auth/register', newUserController)
app.get('/create/new', newPostController)
app.post('/posts/store', newStoreController)
app.post('/auth/users/register', storeUserController)
/*app.post('/posts/store',  (req,res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'public/img',image.name), async (error)=>{
    await Post.create({
        ...req.body,
        image: '/img/' + image.name
    })
    res.redirect('/')
    })
    })*/
app.get('/post/:id', getPostController)
/*app.get('/post/:id', async (req, res)=>{
    const post = await Post.findById(req.params.id)
    res.render('post', {
        post
    })
})*/
app.listen(4000, ()=>{
    console.log('App listening')
})