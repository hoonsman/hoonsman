import React from 'react'
import Style from './container3.module.css'
const Container3 = () => {
  return (
    <div className={Style.container}>
      <div className={Style.intro}>
        <div className={Style.intro__image}>
          <img src={`${process.env.PUBLIC_URL}/backimage2.png`} />
        </div>
      </div>
    </div>
  )
}

export default Container3
