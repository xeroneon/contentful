import React, { useState, useEffect } from 'react';
import axios from "axios";

import Article from "./Article";

const Home = props => {

    const [ articles, setArticles ] = useState([])

    useEffect(() => {
        axios.get("/articles").then(res => {
            setArticles(res.data)
            console.log(res.data);
        })
    },[])

    return(
        <>
            <div className="home-container">
            <h1>Articles</h1>
                {articles[0] && articles.map(article => <Article article={article} key={article.sys.id} />)}
            </div>
        </>
    )
}

export default Home;