import React from 'react'
import Style from './Comp1.module.css'

const Comp1 = ({ active, showMessage, showDetailImage }) => {
  const messageClass = showMessage ? Style.fadeIn : ''
  const detailImageClass = showDetailImage ? Style.fadeIn : ''

  return (
    <div className={Style.container}>
      <div className={`${Style.message} ${messageClass}`}>갤럭시 Z 플립 5</div>
      <div className={Style.imageContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/img/Promo_Image/Comp1_Main.png`}
          alt="Image"
        />
      </div>
      <div className={`${Style.detailImage} ${detailImageClass}`}>
        <img
          src={`${process.env.PUBLIC_URL}/img/Promo_Image/Comp1_Sub.png`}
          alt="Detail"
        />
      </div>
    </div>
  )
}

export default Comp1
