import React, { useState } from 'react'
import Styles from './samplelist.module.css'
import Modal from '../../sample_modal/modal'

const SampleBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const SampleBoxClick = (event) => {
    event.stopPropagation() // 이벤트 전파를 방지
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.intro}>Take a look at some samples.</div>
      <div className={Styles.switch_toggle}>
        <div className={Styles.model8}>
          <div className={Styles.checkbox}>
            <input type="checkbox" id="model8-checkbox" />
            <label htmlFor="model8-checkbox"></label>
          </div>
        </div>
      </div>
      <div className={Styles.box__container}>
        <div className={Styles.sample__line}>
          <button className={Styles.box1} onClick={(e) => SampleBoxClick(e)}>
            box1
          </button>
          <button className={Styles.box2} onClick={(e) => SampleBoxClick(e)}>
            box2
          </button>
          <button className={Styles.box3} onClick={(e) => SampleBoxClick(e)}>
            box3
          </button>
          <button className={Styles.box4} onClick={(e) => SampleBoxClick(e)}>
            box4
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}

export default SampleBox
