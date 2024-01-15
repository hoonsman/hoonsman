import React, { useState } from 'react'
import Styles from './samplelist.module.css'
import Modal from '../../sample_modal/modal'

const SampleBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSampleId, setSelectedSampleId] = useState(null)

  const samples = [
    //샘플 미리보기 이미지 배열임니둥
    //사이즈 임의로 300에 300사이즈
    { id: 1, imageUrl: 'img/intro.png' },
    { id: 2, imageUrl: 'images/intro2.png' },
    { id: 3, imageUrl: 'images/intro3.png' },
    { id: 4, imageUrl: 'images/intro4.png' },
  ]

  const handleSampleBoxClick = (sampleId) => {
    setSelectedSampleId(sampleId)
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
          {samples.map((sample) => (
            <div
              key={sample.id}
              className={Styles['box' + sample.id]}
              onClick={() => handleSampleBoxClick(sample.id)}
            >
              <img src={sample.imageUrl} alt={`Sample ${sample.id}`} />
              <p>box{sample.id}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        selectedSampleId={selectedSampleId}
      />
    </div>
  )
}

export default SampleBox
