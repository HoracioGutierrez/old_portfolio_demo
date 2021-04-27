import React from 'react'
import { Link } from 'react-router-dom'

const DemoItem = ({demo:{title,thumbnail_url,slug}}) => {
    return (
        <article className="demo-item">
            <Link to={`/demos/${slug}`}>
                <header className="demo-header">
                    <h3>{title}</h3>
                </header>
                <div className="demo-thumbnail" style={{backgroundImage:`url("./${thumbnail_url}")`}}></div>
            </Link>
        </article>
    )
}

export default DemoItem
