import React from 'react'
import BudgetCounterProvider from './BudgetCounterProvider'
import BudgetCounterForm from './BudgetCounterForm'
import BudgetCounterTotal from './BudgetCounterTotal'
import BudgetCounterModal from './BudgetCounterModal'
import CursoList from './CursoList'

const BudgetCounter = () => {

    return (
        <BudgetCounterProvider>
            <BudgetCounterModal/>
            <BudgetCounterTotal/>
            <BudgetCounterForm/>
            <CursoList/>
        </BudgetCounterProvider>
    )
}

export default BudgetCounter
