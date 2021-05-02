import React from 'react'
import BudgetCounterProvider from './BudgetCounterProvider'
import BudgetCounterForm from './BudgetCounterForm'
import BudgetCounterTotal from './BudgetCounterTotal'
import BudgetCounterModal from './BudgetCounterModal'
import CursoList from './CursoList'
import DemoPageContainer from '../../components/DemoPageContainer'


const BudgetCounter = () => {

    return (
        <DemoPageContainer>
            <BudgetCounterProvider>
                <BudgetCounterModal/>
                <BudgetCounterTotal/>
                <BudgetCounterForm/>
                <CursoList/>
            </BudgetCounterProvider>
        </DemoPageContainer>
    )
}

export default BudgetCounter
