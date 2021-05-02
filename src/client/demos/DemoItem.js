import React from 'react'
import { Link } from 'react-router-dom'
import backgroundUrl from "url:./../images/no-thumbnail.jpg"

const DemoItem = ({demo:{title,slug}}) => {
    return (
        <article className="demo-item">
            <Link to={`/demos/${slug}`}>
                <header className="demo-header">
                    <h3>{title}</h3>
                </header>
                <div className="demo-thumbnail" style={{backgroundImage:`url("${backgroundUrl}")`}}></div>
            </Link>
        </article>
    )
}

export default DemoItem
