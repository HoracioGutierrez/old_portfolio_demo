import React, { useContext } from 'react'
import BudgetCounterContext from '../../api/contexts/BudgetCounterContext'
import Modal from "react-modal"

const BudgetCounterForm = () => {

    const {
        handleFormSubmit,
        handleValueChange,
        handleFormHide,
        form_submit : { title , price , cant },
        form_modal : {open}
    } = useContext(BudgetCounterContext)

    return (
        <Modal isOpen={open} shouldCloseOnOverlayClick={true} onRequestClose={handleFormHide} className="budget-form-modal" overlayClassName="budget-form-overlay">
            <section className="budget-form">
                <h3>Nuevo Curso</h3>
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
        </Modal>
    )
}

export default BudgetCounterForm
