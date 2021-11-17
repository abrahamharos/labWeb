const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Post = require('../model/post');


router.get('/', async function(req,res){
  var posts = await Post.find()
  console.log(posts)
  res.render('index', {posts})
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

// Ruta que nos permita insertar un nuevo post
router.post('/newPost', async (req,res) =>{
  var post = new Post(req.body)
  await post.save()

  res.redirect('/')
});

router.get('/edit/:id',   async(req,res) =>{
  var id = req.params.id
  var post = await Post.findById(id)
  res.render('edit', {post})
})

router.post('/edit/:id',   async(req,res) =>{
  var id = req.params.id
  await Post.updateOne({_id: id}, req.body)
  res.redirect('/')
})

router.get('/delete/:id',   async(req,res) =>{
  var id = req.params.id
  var post = await Post.findById(id)
  res.render('delete', {post})
})

router.post('/delete/:id',  async (req,res) =>{
  var id = req.params.id

  await Post.remove({_id: id})

  res.redirect('/')
})

module.exports = router;