import React, { useState, useEffect } from 'react';
import axios from "axios";

import Article from "./Article";

const Home = props => {

    const [ articles, setArticles ] = useState([]);
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        axios.get("/articles").then(res => {

            setArticles(res.data)
            setLoading(false)
            console.log(res.data);
        })
    },[])

    return(
        <>
            <div className="home-container">
            <h1>Articles</h1>
                {loading ? null : articles.map(article => {
                    return <Article article={article} key={article.sys.id} />
                })}
            </div>
        </>
    )
}

export default Home;