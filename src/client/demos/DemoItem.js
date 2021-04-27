import React from 'react'

const DemoItem = ({demo:{title,thumbnail_url}}) => {
    return (
        <article className="demo-item">
            <header className="demo-header">
                <h3>{title}</h3>
            </header>
            <div className="demo-thumbnail" style={{backgroundImage:`url("./${thumbnail_url}")`}}></div>
        </article>
    )
}

export default DemoItem
