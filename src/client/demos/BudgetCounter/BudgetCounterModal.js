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

    return (
        <Modal isOpen={open} shouldCloseOnOverlayClick={true} onRequestClose={handleDetailHide} className="budget-detail-modal" overlayClassName="budget-detail-overlay">
            <h3>Detalle del total</h3>
            {concepts.map(concept=> <p key={concept._id}>{concept.price} X {concept.cant}</p> )}
        </Modal>
    )
}

export default BudgetCounterModal
