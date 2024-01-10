import React, { useState, useEffect } from 'react'
import Style from './samplebody.module.css'
import Container1 from './container1/container1'
import Container2 from './container2/container2'
import Container3 from './container3/container3'

const SampleBody = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={Style.container}>
      <div style={{ color: scrollPosition > 100 ? 'red' : 'black' }}>
        스크롤되면 색이 변합니다!
      </div>
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  )
}

export default SampleBody
