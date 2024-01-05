import React from 'react'
import Styles from './samplelist.module.css'

const SampleList = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.intro}>Take a look at some samples.</div>
      <div className={Styles.switch_toggle}>
        <div className={Styles.model8}>
          <div className={Styles.checkbox}>
            <input type="checkbox" id="model8-checkbox" />
            <label htmlFor="model8-checkbox"></label>
          </div>
        </div>
      </div>
      <div className={Styles.box__container}>
        <div className={Styles.sample__line}>
          <button className={Styles.box1}>box1</button>
          <button className={Styles.box2}>box2</button>
          <button className={Styles.box3}>box3</button>
          <button className={Styles.box4}>box4</button>
        </div>
      </div>
    </div>
  )
}

export default SampleList
