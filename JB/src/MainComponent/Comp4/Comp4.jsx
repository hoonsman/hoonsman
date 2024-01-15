import React from 'react'
import Style from './Comp4.module.css'

const Comp4 = ({ showMessage4 }) => {
  const message4Class = showMessage4 ? Style.fadeIn : '' // showMessage4 상태 추가

  return (
    <div className={Style.container}>
      <div className={`${Style.message} ${message4Class}`}>
        지금 바로 Z플립5와
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;함께하세요!
      </div>{' '}
      {/* showMessage4 상태에 따라 메시지 제어 */}
    </div>
  )
}

export default Comp4
