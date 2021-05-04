import React from 'react'
import './NewsCard.css'

// urlToImage
// title
// author
// url
// publishedAt
// description
// source.name

const NewsCard = ({newsItem}) => {
     console.log(newsItem)
    return (
        <div className="newsCard">
            <img
                src={newsItem.urlToImage 
                    ? newsItem.urlToImage 
                    : `https://img.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg?size=626&ext=jpg&ga=GA1.2.1614264220.1616976000`
                }
                className = "newsImage"
            />

            <div className="newsText">
                <div>
                    <span className="title">
                        {newsItem.title}
                    </span>
                    <br/>
                    <span className="author">

                        <a href={newsItem.url} target="__blank">
                            <b>short </b>
                        </a>

                        <span className="light">
                            by {newsItem.author} / {newsItem.publishedAt}
                        </span>

                    </span>

                    <div className="lowerNewsText">
                        <div className="description">
                            {newsItem.description}
                            <span className="readmore">
                                <br/>read more at {" "}
                                 <a href={newsItem.url} target = "__blank">
                                     {newsItem.source.name}
                                 </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard


