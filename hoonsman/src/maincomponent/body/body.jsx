import React from 'react'
import Style from './body.module.css'
import Introduce from './introduce/introduce'

const MainBody = () => {
  return (
    <div className={Style.container}>
      <Introduce />
      {/*<SampleList />*/}
    </div>
  )
}

export default MainBody
