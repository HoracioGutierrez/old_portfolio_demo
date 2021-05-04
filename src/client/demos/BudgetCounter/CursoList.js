import React, { useContext } from 'react'
import BudgetCounterContext from '../../api/contexts/BudgetCounterContext'
import CursoItem from './CursoItem'

const CursoList = () => {

    const { cursos: { list } , handleFormShow } = useContext(BudgetCounterContext)

    return (
        <section className="cursos-list">
            <article className="curso-item" id="crear-curso">
                <header>
                    <h3>CREAR CURSO</h3>
                </header>
                <button className="material-icons" onClick={handleFormShow}>add</button>
            </article>
            {list.map(curso => <CursoItem key={curso._id} curso={curso} />)}
        </section>
    )
}

export default CursoList
