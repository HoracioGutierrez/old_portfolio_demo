import React, { useMemo, useReducer } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import BudgetCounterContext, { Provider } from '../../api/contexts/BudgetCounterContext'
import BudgetCounterReducer, { BudgetCounterInitState } from '../../api/reducers/BudgetCounterReducer'

const BudgetCounterProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(BudgetCounterReducer,BudgetCounterInitState)
    const {total,cursos,form_submit,form_edit} = state

    const handleFormSubmit = e => {
        e.preventDefault()
        toast.warning("Creando curso...")
        dispatch({type:"CURSO_CREATE_PENDING"})
        axios.post("/api/curso",{...form_submit})
        .then(({data})=>{
            toast.dismiss()
            toast.success("Curso creado!")
            dispatch({type:"CURSO_CREATE_SUCCESS"})
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

    const value = useMemo(()=>({
        ...state , 
        handleFormSubmit , 
        handleValueChange 
    }))

    return(
        <Provider value={value}>
            {children}
        </Provider>
    )
}

export default BudgetCounterProvider