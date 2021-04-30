import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

const CursoItem = ({curso,updateCursos,addToTotal,editRequest}) => {

    const handleDelete = () => {
        toast.warning("Borrando curso...")
        axios.delete(`/api/curso/${curso._id}`)
        .then(({data})=>{
            toast.dismiss()
            toast.success("Curso borrado!")
            updateCursos(data)
        })
    }

    const handleAddToTotal = () => {
        addToTotal(curso)
    }

    const handleEditRequest = () => {
        editRequest()
    }
    

    return (
        <article>
            <header>
                <h3>{curso.title}</h3>
            </header>
            <p>${curso.price}</p>
            <button onClick={handleAddToTotal}>agregar</button>
            <button onClick={handleEditRequest}>editar</button>
            <button onClick={handleDelete}>borrar</button>
        </article>
    )
}

export default CursoItem
