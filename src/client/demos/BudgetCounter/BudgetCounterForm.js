import React, { useContext } from 'react'
import BudgetCounterContext from '../../api/contexts/BudgetCounterContext'

const BudgetCounterForm = () => {

    const {
        handleFormSubmit,
        handleValueChange,
        form_submit : { title , price , cant }
    } = useContext(BudgetCounterContext)

    return (
        <section className="budget-form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" placeholder="Titulo/Curso" value={title} onChange={handleValueChange} data-target="title"/>
                </div>
                <div>
                    <input type="number" placeholder="Precio" value={price} onChange={handleValueChange} data-target="price"/>
                </div>
                <div>
                    <input type="number" placeholder="Cant. Hs" value={cant} onChange={handleValueChange} data-target="cant"/>
                </div>
                <button>guardar</button>
            </form>
        </section>
    )
}

export default BudgetCounterForm
