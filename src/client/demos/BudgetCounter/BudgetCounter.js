import React from 'react'
import BudgetCounterProvider from './BudgetCounterProvider'
import BudgetCounterFormModal from './BudgetCounterFormModal'
import BudgetCounterTotal from './BudgetCounterTotal'
import BudgetCounterTotalModal from './BudgetCounterTotalModal'
import CursoList from './CursoList'
import DemoPageContainer from '../../components/DemoPageContainer'


const BudgetCounter = () => {

    return (
        <DemoPageContainer>
            <BudgetCounterProvider>
                <BudgetCounterTotalModal/>
                <BudgetCounterTotal/>
                <BudgetCounterFormModal/>
                <CursoList/>
            </BudgetCounterProvider>
        </DemoPageContainer>
    )
}

export default BudgetCounter
