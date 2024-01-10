// Main.jsx

import React from 'react'
import Style from './Main.module.css'
import Comp1 from './Comp1/Comp1'
import Comp2 from './Comp2/Comp2'

const Main = () => {
  return (
    <div className={Style.container}>
      <div className={Style.mainContainer}>
        <Comp1 />
        <Comp2 />
      </div>
    </div>
  )
}

export default Main
