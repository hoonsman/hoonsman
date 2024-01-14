import React from 'react'
import Style from './Comp2.module.css'

const Comp2 = ({ active, showMessage1, showMessage2 }) => {
  return (
    <div
      className={`${Style.container} ${active ? Style.active : Style.inactive}`}
    >
      <div className={`${Style.message1} ${showMessage1 ? Style.fadeIn : ''}`}>
        최대 크기의 커버 스크린, <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 플렉스 윈도우
      </div>
      <div className={`${Style.message2} ${showMessage2 ? Style.fadeIn : ''}`}>
        나를 온전하게 표현할 수 있는 86.1mm 플렉스 윈도우를 만나보세요.
        <br />
        새로운 플렉스 힌지를 장착한 Z플립5와 함께 하세요.
      </div>
      <div className={Style.imageContainer}>
        <img src={`${process.env.PUBLIC_URL}/image2.png`} alt="Image" />
      </div>
    </div>
  )
}

export default Comp2
