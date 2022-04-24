const Router = require('express')
const router = new Router()
const postController = require('../controller/post.controller')

router.post('/user', postController.createPost)
router.get('/user', postController.getPostsByUser) 

module.exports = router