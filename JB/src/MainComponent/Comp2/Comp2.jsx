import React from 'react'
import Style from './Comp2.module.css'

const Comp2 = () => {
  return (
    <div className={Style.container}>
      <div className={Style.message}>Thasdfadsfadsfdasffank you</div>
      <div className={Style.imageContainer}>
        <img src={`${process.env.PUBLIC_URL}/image2.png`} />
      </div>
    </div>
  )
}

export default Comp2
