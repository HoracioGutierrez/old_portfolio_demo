import React from 'react'

const Page = ({children,title="New Page"}) => {
    return (
        <main>
            <header>
                <h2>{title}</h2>
            </header>
            {children}
        </main>
    )
}

export default Page
