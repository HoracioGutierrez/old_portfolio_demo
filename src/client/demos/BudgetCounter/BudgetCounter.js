import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CursoItem from './CursoItem'

const BudgetCounter = () => {

    const [total,setTotal] = useState(0)
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(0)
    const [cursos,setCursos] = useState([])
    const [editable,setEditable] = useState(false)
    const [previousTotal,setPreviousTotal] = useState(0)

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
            setTitle("")
            setPrice("")
            setCursos([...cursos,data])
        })
    }

    const updateCursos = nuevos_cursos => {
        setCursos(nuevos_cursos)
    }

    const handleTotalEdit = e => {
        setPreviousTotal(total)
        setEditable(true)
    }

    const handleTotalInput = e => {
        setTotal(e.target.innerText)
    }

    const handleTotalSave = () => {
        setEditable(false)
    }

    const handleTotalCancel = () => {
        setTotal(previousTotal)
        setEditable(false)
    }

    return (
        <>
            <p>
                Total $ 
                <span onInput={handleTotalInput} contentEditable={editable}>{total}</span> 
                <button onClick={handleTotalEdit}>editar</button> 
                {editable && <button onClick={handleTotalSave}>guardar</button>}
                {editable && <button onClick={handleTotalCancel}>cancelar</button>}
            </p>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" placeholder="Titulo/Curso" value={title} onChange={handleTitleChange} data-target="title"/>
                </div>
                <div>
                    <input type="number" placeholder="Precio" value={price} onChange={handlePriceChange} data-target="price"/>
                </div>
                <button>guardar</button>
            </form>
            {cursos.map(curso=> <CursoItem key={curso._id} curso={curso} updateCursos={updateCursos}/>)}
        </>
    )
}

export default BudgetCounter
