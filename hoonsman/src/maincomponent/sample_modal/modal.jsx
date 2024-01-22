import React from 'react'
import styles from './modal.module.css'
import SeminarSample from '../samples/Seminar/seminarsample'
import Promotion from '../samples/ProductPromotion/product_promotion'
import SamplePage from '../samples/WeddingSample/SamplePage'

function Modal({ isOpen, closeModal, selectedSampleId }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div
      className={isOpen ? styles.modalOpen : styles.modalClosed}
      onClick={handleBackdropClick}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
        {selectedSampleId === 1 && <SeminarSample size={[320, 568]} />}
        {selectedSampleId === 2 && <Promotion size={[320, 568]} />}
        {selectedSampleId === 3 && <SamplePage size={[428, 926]} />}
        <button className={styles.applyButton}>생성하기</button>
      </div>
    </div>
  )
}

export default Modal
