import React, { useContext } from 'react'
import Modal from "react-modal"
import BudgetCounterContext from '../../api/contexts/BudgetCounterContext'

Modal.setAppElement("#root")

const BudgetCounterModal = () => {

    const {
        modal : {open},
        handleDetailHide
    } = useContext(BudgetCounterContext)

    return (
        <Modal isOpen={open} shouldCloseOnOverlayClick={true} onRequestClose={handleDetailHide} className="budget-detail-modal" overlayClassName="budget-detail-overlay">
            <h3>Detalle del total</h3>
        </Modal>
    )
}

export default BudgetCounterModal
