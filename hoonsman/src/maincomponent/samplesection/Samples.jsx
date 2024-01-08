import React from 'react'
import Style from './Samples.module.css'
import SampleHeader from './samplehedaer/sampleheader'
import SampleBody from './samplebody/samplebody'
const Samples = () => {
  return (
    <div className={Style.container}>
      <div className={Style.main__container}>
        <SampleHeader />
        <SampleBody />
      </div>
    </div>
  )
}

export default Samples
