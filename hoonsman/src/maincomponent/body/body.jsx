import React from 'react'
import Style from './body.module.css'
import Introduce from './introduce/introduce'
import SampleList from './samplelist/samplelist'

const MainBody = () => {
  return (
    <div className={Style.container}>
      <div className={Style.intro__container}>
        <Introduce />
      </div>
      <div className={Style.sample__container}>
        <SampleList />
      </div>
    </div>
  )
}

export default MainBody
