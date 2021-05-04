import React from 'react'
import Container from '@material-ui/core/Container';
import NewsCard from './NewsCard';
import './NewsContent.css';

const NewsContent = ({newsArray,newsResults,loadMore,setLoadMore}) => {
    return (
        <Container maxWidth='md'>
            <div className="content">
                {/* News Content */}
                {/* News Cards */}

                {
                    newsArray.map((newsItem) => (
                        <NewsCard newsItem={newsItem} key={newsItem.title}/>
                    ))
                }

                {/* newsresults = 38
                newsArray = 10 */}

                {
                    loadMore <= newsResults && (
                        <>
                            <button className="loadMore" onClick={()=>setLoadMore(loadMore+10)}>Load More</button>
                        </>
                    )
                }

            </div>
        </Container>
    )
}

export default NewsContent
