import React from 'react'

const Page = ({children,title}) => {
    return (
        <main className="page-main">
            {title && <header>
                <h2>{title}</h2>
            </header>}
            {children}
        </main>
    )
}

export default Page
