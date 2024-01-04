import React from 'react'
import Styles from './samplelist.module.css'

const SampleList = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.intro}>Take a look at some samples.</div>
      <div className={Styles.box__container}>
        <div className={Styles.first__line}>
          <button className={Styles.box1}>box1</button>
          <button className={Styles.box2}>box2</button>
        </div>
        <div className={Styles.second__line}>
          <button className={Styles.box3}>box3</button>
          <button className={Styles.box4}>box4</button>
        </div>
      </div>
    </div>
  )
}

export default SampleList
