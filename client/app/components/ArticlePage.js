import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown/with-html"
import CodeBlock from "./CodeBlock";

const ArticlePage = props => {

    const { slug } = props.match.params
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/articles/${slug}`).then(res => {
            setArticle(res.data.article)
            setLoading(false);
            console.log("Article Page: ", res.data.article)
        })
    }, [])
    if (loading) {
        return <p>Loading...</p>
    } else {
        console.log(article)
        return (
            <>
                <div className="article-container">
                    <article>
                        <h1 className="title">{article.fields.title}</h1>
                        <hr></hr>
                        <ReactMarkdown className="article-body" source={article.fields.body} escapeHtml={false} renderers={{code: CodeBlock}} />
                        {/* <p>{article.fields.body}</p> */}
                        <hr className="bottom-hr"></hr>
                        <div>
                            <span>{article.fields.author.fields.name}</span>
                            <span>{article.fields.publishDate}</span>
                        </div>
                    </article>
                </div>
            </>
        )
    }
}

export default ArticlePage;