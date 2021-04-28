import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

const CursoItem = ({curso,updateCursos}) => {

    const handleDelete = (_id) => {
        toast.warning("Borrando curso...")
        axios.delete(`/api/curso/${_id}`)
        .then(({data})=>{
            toast.dismiss()
            toast.success("Curso borrado!")
            updateCursos(data)
        })
    }

    return (
        <article>
            <header>
                <h3>{curso.title}</h3>
            </header>
            <p>${curso.price}</p>
            <button onClick={handleDelete.bind(null,curso._id)}>borrar</button>
        </article>
    )
}

export default CursoItem
