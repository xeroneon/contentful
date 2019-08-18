// var express = require('express')
// var router = express.Router()
// var articles = require('../services/articles')

// /* router params */
// router.param('slug', function (req, res, next, slug) {
//   articles.getArticle(slug).then(function (article) {
//     req.article = article.items[0]
//     next()
//   }).catch(function (err) {
//     console.log('articles.js - getArticle (line 7) error:', JSON.stringify(err,null,2))
//     next()
//   })
// })

// router.use(function (req, res, next) {
//   articles.getArticles().then(function (articleCollection) {
//     req.articles = articleCollection.items
//     next()
//   }).catch(function (err) {
//     console.log('articles.js - getarticles (line 17) error:', JSON.stringify(err,null,2))
//     next()
//   })
// })

// router.get('/:slug', function (req, res, next) {
//   // res.render('product', {title: req.product.fields.productName, product: req.product})
//   res.send({article: req.article});
// })

// router.get('/', function (req, res, next) {
//   res.json(req.articles)
// })

// // router.get('/', function (req, res, next) {
// //   res.render('products', {
// //     'title': 'Products',
// //     'products': req.products
// //   })
// // })

// module.exports = router
