import React from "react";

import { Link } from "react-router-dom";

const Article = props => {

    const { article } = props;
    console.log(article)
    return (
        <>
        <Link to={`/articles/${article.fields.slug}`}>
            <div className="article-li">
                <img src={article.fields.hero.fields.file.url} />
                <div>
                    <h1>
                        {article.fields.title}
                    </h1>
                    <p>{article.fields.description}</p>
                    <div>
                        <span>{article.fields.author.fields.name}</span>
                        <span>{article.fields.publishDate}</span>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}

export default Article;