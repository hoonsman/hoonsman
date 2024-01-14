import React, { useState } from 'react'
import Style from './body.module.css'
import Introduce from './introduce/introduce'
import SampleList from './samplelist/samplelist'
import Modal from '../sample_modal/modal' // Modal 컴포넌트를 임포트합니다.

const MainBody = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 모달을 여는 함수
  const openModal = () => {
    setIsModalOpen(true)
  }

  // 모달을 닫는 함수
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={Style.container}>
      <div className={Style.intro__container}>
        <Introduce />
      </div>
      <div className={Style.sample__container}>
        <SampleList openModal={openModal} />
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  )
}

export default MainBody
