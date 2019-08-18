// var client = require('./contentfulClient').client

// function getArticle (slug, query) {
//   // little trick to get an entry with include
//   // this way all linked items will be resolved for us
//   query = query || {}
//   query['content_type'] = 'article'
//   query['fields.slug'] = slug
//   return client.getEntries(query)
// }

// function getArticles (query) {
//   query = query || {}
//   query.content_type = 'article'
//   return client.getEntries(query)
// }

// module.exports = {
//   getArticle,
//   getArticles
// }
