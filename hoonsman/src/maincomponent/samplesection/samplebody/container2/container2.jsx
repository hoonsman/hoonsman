import React from 'react'
import Style from './container2.module.css'
const Container2 = () => {
  return (
    <div className={Style.container}>
      <div className={Style.intro}>
        <div className={Style.intro__image}>
          <img src={`${process.env.PUBLIC_URL}/backimage1.png`} />
        </div>
      </div>
    </div>
  )
}

export default Container2
