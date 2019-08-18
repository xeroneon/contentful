var express = require('express')
var router = express.Router()
var articles = require('../services/articles')

/* GET home page. */
router.use(function (req, res, next) {
  articles.getArticles().then(function (articleCollection) {
    req.articles = articleCollection
    next()
  }).catch(function (err) {
    console.log('index.js - getarticles (line 7) error:', JSON.stringify(err,null,2))
    next()
  })
})

router.get('/', function (req, res, next) {
  res.render('articles', {
    'title': 'articles',
    'articles': req.articles
  })
})

module.exports = router
