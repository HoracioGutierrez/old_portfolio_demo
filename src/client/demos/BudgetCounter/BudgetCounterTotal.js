import React, { useContext } from 'react'
import BudgetCounterContext from '../../api/contexts/BudgetCounterContext'

const BudgetCounterTotal = () => {

    const {
        handleTotalInput,
        handleTotalEdit,
        handleTotalSave,
        handleTotalCancel,
        total : {amount,editable}
    } = useContext(BudgetCounterContext)

    return (
        <p>
            Total $ 
            <span onInput={handleTotalInput} contentEditable={editable}>{amount}</span> 
            <button>ver detalle</button>
            <button onClick={handleTotalEdit}>editar</button> 
            {editable && <button onClick={handleTotalSave}>guardar</button>}
            {editable && <button onClick={handleTotalCancel}>cancelar</button>}
        </p>
    )
}

export default BudgetCounterTotal
