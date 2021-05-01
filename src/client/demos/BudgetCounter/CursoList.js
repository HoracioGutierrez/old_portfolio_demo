import React, { useContext } from 'react'
import BudgetCounterContext from '../../api/contexts/BudgetCounterContext'
import CursoItem from './CursoItem'

const CursoList = () => {

    const {cursos:{list}} = useContext(BudgetCounterContext)

    return (
        <section className="cursos-list">
            {list.map(curso=> <CursoItem key={curso._id} curso={curso}/>)}
        </section>
    )
}

export default CursoList
