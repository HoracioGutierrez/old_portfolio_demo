import React from 'react'
import { useHistory, useLocation } from 'react-router'

const Detail = ({demo}) => {

    const history = useHistory()

    const handleRedirect = () => {
        history.push(`/p/${demo.slug}`)
    }

    return (
        <>
            <img src={`/${demo.thumbnail_url}`} alt="demo main picture" className="demo-main-picture"/> 
            <h2 className="demo-main-title">{demo.title}</h2>  
            <p className="demo-main-description">{demo.description}</p>
            <button onClick={handleRedirect} className="demo-main-start">iniciar demo</button>
        </>
    )
}

export default Detail
