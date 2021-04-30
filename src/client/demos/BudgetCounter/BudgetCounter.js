import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Modal from "react-modal"
import CursoItem from './CursoItem'
import BudgetCounterProvider from './BudgetCounterProvider'
import BudgetCounterForm from './BudgetCounterForm'
import BudgetCounterTotal from './BudgetCounterTotal'
import CursoList from './CursoList'

const BudgetCounter = () => {

    const [total,setTotal] = useState(0)
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(0)
    const [cursos,setCursos] = useState([])
    const [editable,setEditable] = useState(false)
    const [previousTotal,setPreviousTotal] = useState(0)
    const [cant,setCant] = useState(3)
    const [edit,setEdit] = useState(false)
    const [showDetails,setShowDetails] = useState(false)

    const updateCursos = nuevos_cursos => {
        setCursos(nuevos_cursos)
    }

    const editRequest = () => {
        setEdit(true)
    }
    

    return (
        <BudgetCounterProvider>
            <Modal isOpen={showDetails}>

            </Modal>
            <BudgetCounterTotal/>
            <BudgetCounterForm/>
            <CursoList/>
        </BudgetCounterProvider>
    )
}

export default BudgetCounter
