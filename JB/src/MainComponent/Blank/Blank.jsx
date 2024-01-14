import React from 'react'
import Style from './Blank.module.css'

const Comp3 = () => {
  return (
    <div className={Style.container}>
      <div className={Style.imageContainer}>
        <img src={`${process.env.PUBLIC_URL}/image3.png`} />
      </div>
    </div>
  )
}

export default Comp3
