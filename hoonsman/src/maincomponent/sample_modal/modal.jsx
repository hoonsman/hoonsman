import React from 'react'
import styles from './modal.module.css'
import SeminarSample from '../samples/seminarsample'

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
        {selectedSampleId === 1 && <SeminarSample />}
        <button className={styles.applyButton}>이 샘플로 생성하기</button>
      </div>
    </div>
  )
}

export default Modal
