import React from 'react'
import Style from './container1.module.css'
const Container1 = () => {
  return (
    <div className={Style.container}>
      <div className={Style.intro}>
        <div className={Style.intro__image}>
          <img src={`${process.env.PUBLIC_URL}/image1.png`} />
        </div>
      </div>
    </div>
  )
}

export default Container1
