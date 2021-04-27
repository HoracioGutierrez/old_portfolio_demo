import React from 'react'

const Detail = ({demo}) => {
    return (
        <>
            <img src={`/${demo.thumbnail_url}`} alt="demo main picture" className="demo-main-picture"/> 
            <h2 className="demo-main-title">{demo.title}</h2>  
            <p className="demo-main-description">{demo.description}</p>

        </>
    )
}

export default Detail
