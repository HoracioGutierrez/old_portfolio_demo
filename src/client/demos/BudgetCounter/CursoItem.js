import axios from 'axios'
import React, { useContext } from 'react'
import BudgetCounterContext from '../../api/contexts/BudgetCounterContext'
import { toast } from 'react-toastify'

const CursoItem = ({curso}) => {

    const {deleteCurso,addToTotal,editRequest} = useContext(BudgetCounterContext)

    const handleDelete = () => {
        deleteCurso(curso._id)
    }

    const handleAddToTotal = () => {
        addToTotal(curso)
    }

    const handleEditRequest = () => {
        editRequest()
    }
    

    return (
        <article className="curso-item">
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
