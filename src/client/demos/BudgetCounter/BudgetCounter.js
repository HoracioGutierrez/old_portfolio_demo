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

    useEffect(()=>{
        toast.warning("Buscando Informacion...")
        axios.get("/api/total")
        .then(({data})=>{
            setTotal(data.amount)
            return axios.get("/api/cursos")
        })
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

    const handleHoursAmountChange = e => {
        setCant(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        toast.warning("Creando curso...")
        axios.post("/api/curso",{title,price,cant})
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

    const handleTotalEdit = () => {
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

    const addToTotal = ({price,_id,cant}) => {
        setTotal(total + price)
        toast.warning("Guardando nuevo monto...")
        axios.post("/api/total",{price,_id,cant})
    }

    const editRequest = () => {
        setEdit(true)
    }
    

    return (
        <BudgetCounterProvider>
            <Modal isOpen={showDetails}>

            </Modal>
            {/* <BudgetCounterTotal/> */}
            <BudgetCounterForm/>
            {/* <CursoList cursos={cursos}/> */}
        </BudgetCounterProvider>
    )
}

export default BudgetCounter
