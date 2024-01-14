import React from 'react'
import Style from './Comp1.module.css'

const Comp1 = ({ active }) => {
  return (
    <div
      className={`${Style.container} ${active ? Style.active : Style.inactive}`}
    >
      <div className={Style.message}>Hi nice to meet you!</div>
      <div className={Style.imageContainer}>
        <img src={`${process.env.PUBLIC_URL}/image1.png`} alt="Image" />
      </div>
    </div>
  )
}

export default Comp1
