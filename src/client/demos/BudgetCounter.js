import axios from 'axios'
import React, { useState } from 'react'

const BudgetCounter = () => {

    const [total,setTotal] = useState(0)
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(0)

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handlePriceChange = e => {
        setPrice(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        axios.post("/api/curso",{title,price})
    }

    return (
        <>
            <p>Total ${total}</p>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" placeholder="Titulo/Curso" value={title} onChange={handleTitleChange} data-target="title"/>
                </div>
                <div>
                    <input type="number" placeholder="Precio" value={price} onChange={handlePriceChange} data-target="price"/>
                </div>
                <button>guardar</button>
            </form>
        </>
    )
}

export default BudgetCounter
