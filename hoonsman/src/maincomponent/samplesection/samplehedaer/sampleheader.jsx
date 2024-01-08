import React from 'react'
import Style from './samplehedaer.module.css'

const SampleHeader = () => {
  return (
    <div className={Style.container}>
      <div className={Style.exit__container}>
        {/* 여기에 버튼 추가 */}
        <button className={Style.exit__button}>X</button>
      </div>
    </div>
  )
}

export default SampleHeader
