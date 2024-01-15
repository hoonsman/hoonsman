import React from 'react'
import Style from './samplehedaer.module.css'

const SampleHeader = () => {
  return (
    <div className={Style.container}>
      <button className={Style.create__button}>
        <span>Create</span>
      </button>
      <button className={Style.exit__button}>
        <span>X</span>
      </button>
    </div>
  )
}

export default SampleHeader
