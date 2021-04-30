import React from 'react'

const BudgetCounterTotal = () => {
    return (
        <p>
            Total $ 
            <span onInput={handleTotalInput} contentEditable={editable}>{total}</span> 
            <button>ver detalle</button>
            <button onClick={handleTotalEdit}>editar</button> 
            {editable && <button onClick={handleTotalSave}>guardar</button>}
            {editable && <button onClick={handleTotalCancel}>cancelar</button>}
        </p>
    )
}

export default BudgetCounterTotal
