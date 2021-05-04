import React, { useContext, useEffect } from 'react'
import Modal from "react-modal"
import BudgetCounterContext from '../../api/contexts/BudgetCounterContext'

Modal.setAppElement("#root")

const BudgetCounterModal = () => {

    const {
        modal : {open},
        total : {concepts},
        handleDetailHide
    } = useContext(BudgetCounterContext)

    const formatDate = date_string => {
        const date = new Date(date_string)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const formated_date = `${day}/${month}`
        return formated_date
    }

    return (
        <Modal isOpen={open} shouldCloseOnOverlayClick={true} onRequestClose={handleDetailHide} className="budget-detail-modal" overlayClassName="budget-detail-overlay">
            <h3>Detalle del total</h3>
            {concepts.map(concept=> 
                <article key={concept._id} className="concept-item">
                    <p> <strong>Curso : </strong> {concept.title} </p>
                    <p> <strong>Cantidad:</strong> {concept.cant}hs </p>
                    <p> <strong>Creado : </strong> {formatDate(concept.created_at)} </p>
                    <button>remover</button>
                    <button>duplicar</button>
                </article>
            )}
        </Modal>
    )
}

export default BudgetCounterModal
