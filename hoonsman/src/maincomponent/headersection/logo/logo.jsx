import React from 'react'
import Style from './logo.module.css'

const Logo = () => {
  return (
    <div className={Style.Logo}>
      <a href="../../App.js">
        <img src={`${process.env.PUBLIC_URL}/img/lllogo.png`} />
      </a>
    </div>
  )
}

export default Logo
