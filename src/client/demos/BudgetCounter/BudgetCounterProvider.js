import React, { useMemo, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import BudgetCounterContext, { Provider } from '../../api/contexts/BudgetCounterContext'
import BudgetCounterReducer, { BudgetCounterInitState } from '../../api/reducers/BudgetCounterReducer'
import {useReducer} from "reinspect"

const BudgetCounterProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(BudgetCounterReducer,BudgetCounterInitState,state=>state,"BudgetCounter")
    const {total,cursos,form_submit,form_edit} = state

    useEffect(()=>{
        toast.warning("Buscando Informacion...")
        dispatch({type:"TOTAL_REQUEST_PENDING"})
        axios.get("/api/total")
        .then(({data})=>{
            dispatch({type:"TOTAL_REQUEST_SUCCESS",nuevo_total:data.amount})
            dispatch({type:"CURSOS_REQUEST_PENDING"})
            return axios.get("/api/cursos")
        })
        .then(({data})=>{
            toast.dismiss()
            dispatch({type:"CURSOS_REQUEST_SUCCESS",cursos:data})
        })

    },[])

    const handleFormSubmit = e => {
        e.preventDefault()
        toast.warning("Creando curso...")
        dispatch({type:"CURSO_CREATE_PENDING"})
        axios.post("/api/curso",{...form_submit})
        .then(({data})=>{
            toast.dismiss()
            toast.success("Curso creado!")
            dispatch({type:"CURSO_CREATE_SUCCESS",curso_nuevo:data})
        })
        .catch(()=>{
            dispatch({type:"CURSO_CREATE_ERROR"})
        })
    }

    const handleValueChange = e => {
        const target = e.target.dataset.target
        const value = e.target.value
        dispatch({type:"SUBMIT_FORM_CHANGE",target,value})
    }

    
    const deleteCurso = _id => {
        toast.warning("Borrando curso...")
        dispatch({type:"CURSOS_DELETE_PENDING"})
        axios.delete(`/api/curso/${_id}`)
        .then(({data})=>{
            toast.dismiss()
            toast.success("Curso borrado!")
            dispatch({type:"CURSOS_DELETE_SUCCESS"})
            dispatch({type:"CURSOS_REQUEST_SUCCESS",cursos:data})
        })
    }
    
    const addToTotal = () => {
        toast.warning("Guardando nuevo monto...")
        dispatch({type:"TOTAL_UPDATE_PENDING"})
        axios.post("/api/total",{price,_id,cant})
        .then(()=>{
            dispatch({type:"TOTAL_UPDATE_SUCCESS",price})
            toast.success("Nuevo mongo guardado!")
        })
    } 
    
    const editRequest = () => {}

    const updateCursos = () => {}

    const handleTotalInput = e => {
        dispatch({type:"TOTAL_INPUT_SET",nuevo_total:e.target.innerText})
    }

    const handleTotalEdit = () => {
        dispatch({type:"TOTAL_EDITABLE_START"})
    }

    const handleTotalSave = () => {
        //Falta guardar el total en la DB
        dispatch({type:"TOTAL_EDITABLE_SAVE"})
    }

    const handleTotalCancel = () => {
        dispatch({type:"TOTAL_EDITABLE_END"})
    }
    
    const value = useMemo(()=>({
        ...state , 
        handleFormSubmit , 
        handleValueChange ,
        updateCursos , 
        addToTotal , 
        deleteCurso,
        handleTotalInput,
        handleTotalEdit,
        handleTotalSave,
        handleTotalCancel,
        editRequest
    }))

    return(
        <Provider value={value}>
            {children}
        </Provider>
    )
}

export default BudgetCounterProvider