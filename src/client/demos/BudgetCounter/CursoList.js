import React, { useContext } from 'react'
import BudgetCounterContext from '../../api/contexts/BudgetCounterContext'
import CursoItem from './CursoItem'

const CursoList = () => {

    const {cursos:{list}} = useContext(BudgetCounterContext)

    return (
        <div>
            {list.map(curso=> <CursoItem key={curso._id} curso={curso}/>)}
        </div>
    )
}

export default CursoList
