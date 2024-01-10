import React from 'react'
import Style from './Comp1.module.css'

const Comp1 = () => {
  return (
    <div className={Style.container}>
      <div className={Style.imageContainer}>
        <img src={`${process.env.PUBLIC_URL}/image1.png`} />
      </div>
    </div>
  )
}

export default Comp1
