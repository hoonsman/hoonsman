import React from 'react'
import Style from './Comp1.module.css'

const Comp1 = ({ active, showMessage, showDetailImage }) => {
  const messageClass = showMessage ? Style.fadeIn : ''
  const detailImageClass = showDetailImage ? Style.fadeIn : ''

  return (
    <div className={Style.container}>
      <div className={`${Style.message} ${messageClass}`}>갤럭시 Z 플립 5</div>
      <div className={Style.imageContainer}>
        <img src={`${process.env.PUBLIC_URL}/s_image1.png`} alt="Image" />
      </div>
      <div className={`${Style.detailImage} ${detailImageClass}`}>
        <img src={`${process.env.PUBLIC_URL}/detailImage.png`} alt="Detail" />
      </div>
    </div>
  )
}

export default Comp1
