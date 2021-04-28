import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const BudgetCounter = () => {

    const [total,setTotal] = useState(0)
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(0)
    const [cursos,setCursos] = useState([])

    useEffect(()=>{
        toast.warning("Buscando cursos...")
        axios.get("/api/cursos")
        .then(({data})=>{
            toast.dismiss()
            setCursos(data)
        })
    },[])

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handlePriceChange = e => {
        setPrice(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        toast.warning("Creando curso...")
        axios.post("/api/curso",{title,price})
        .then(({data})=>{
            toast.dismiss()
            toast.success("Curso creado!")
            setCursos([...cursos,data])
        })
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
            {cursos.map(curso=> <p key={curso._id}>{curso.title}</p> )}
        </>
    )
}

export default BudgetCounter
