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

    const mapArticles = articles => {
        const elements = []
        for(let i = 0; i < articles.length; i++) {
            elements.push(<Article article={articles[i]} key={articles[i].sys.id} />)
        }
        return elements
    }

    return(
        <>
            <div className="home-container">
            <h1>Articles</h1>
                {loading ? null : mapArticles(articles)}
            </div>
        </>
    )
}

export default Home;