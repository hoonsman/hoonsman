import React from 'react'
import styles from './modal.module.css'

function Modal({ isOpen, closeModal }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      // 백그라운드 판독기
      closeModal() // 백그라운드면 모달 창 닫음
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
        <p>Modal Content</p>
        <button className={styles.applyButton}>이 샘플로 생성하기</button>
      </div>
    </div>
  )
}

export default Modal
