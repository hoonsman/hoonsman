import React from 'react'
import Style from './Comp4.module.css'

const Comp4 = () => {
  return (
    <div className={Style.container}>
      <div className={Style.message}>gdgdgdgdgdgdgd</div>
      <div className={Style.imageContainer}>
        <img src={`${process.env.PUBLIC_URL}/image4.png`} />
      </div>
    </div>
  )
}

export default Comp4
