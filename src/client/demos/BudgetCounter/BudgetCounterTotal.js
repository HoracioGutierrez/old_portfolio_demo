import React, { useContext } from 'react'
import BudgetCounterContext from '../../api/contexts/BudgetCounterContext'

const BudgetCounterTotal = () => {

    const {
        handleTotalInput,
        handleTotalEdit,
        handleTotalSave,
        handleTotalCancel,
        handleDetailShow,
        total : {amount,editable}
    } = useContext(BudgetCounterContext)

    return (
        <section id="main-total">
            <p id="total-text">
                <span onInput={handleTotalInput} contentEditable={editable}>${amount}</span> 
                <br/> 
                Balance Actual
            </p>
            <nav id="total-options">
                <button onClick={handleDetailShow} className="material-icons">description</button>
                <button onClick={handleTotalEdit} className="material-icons">edit</button> 
                {editable && <button onClick={handleTotalSave}>guardar</button>}
                {editable && <button onClick={handleTotalCancel}>cancelar</button>}
            </nav>

        </section>
    )
}

export default BudgetCounterTotal
