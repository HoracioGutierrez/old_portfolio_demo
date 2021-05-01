import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DemoPageContainer = ({children}) => {
    
    const {slug} = useParams()

    return (
        <>
            <header className="demo-page-header">
                <Link to="/">home</Link>
                <Link to={`/demos/${slug}`}>volver al articulo</Link>
            </header>
            <main className="demo-page-main">
                {children}
            </main>
        </>
    )
}

export default DemoPageContainer
