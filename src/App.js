import React, { useEffect, useState } from 'react'
import './App.css'
import newslogo from './NewsApp.png'
import NewsContent from './NewsContent'
import axios from 'axios'

const App = () => {

    const [newsArray,setNewsArray] = useState([]);

    const [newsResults, setNewsResults] = useState();

    const [loadMore, setLoadMore] = useState(10);

    const newsApi = async() => {
        try{
            const category = "general";
            const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_KEY}&pageSize=${loadMore}`) 
            //  console.log(news)
            setNewsArray(news.data.articles)
            setNewsResults(news.data.totalResults)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        newsApi();
    },[newsResults,loadMore])

    return (
        <div className="app">
            {/* Nav Bar  -> image*/}

            <div className="nav">
                <div className="menu"></div>
                <img
                src={newslogo}
                alt="News App Logo"
                />
            </div>

            {/* News Content -> Array of News Cards */}

            <NewsContent newsArray={newsArray} newsResults={newsResults} loadMore={loadMore} setLoadMore={setLoadMore}/>

        </div>
    )
}

export default App

