const client = require("../services/contentfulClient").client

// import client from "../services/contentfulClient"

module.exports = function(app) {
    app.get("/articles", async (req, res) => {
        query = {}
        query['content_type'] = 'article'

        const articles = await client.getEntries(query);

        res.json(articles.items)
    })

    app.get("/articles/:slug", async (req,res) => {
        query = {}
        query['content_type'] = 'article'
        query['fields.slug'] = req.params.slug

        const article = await client.getEntries(query);

        res.send({article: article.items[0]});
    })
}