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

    return (
        <BudgetCounterProvider>
            <Modal isOpen={false}>

            </Modal>
            <BudgetCounterTotal/>
            <BudgetCounterForm/>
            <CursoList/>
        </BudgetCounterProvider>
    )
}

export default BudgetCounter
