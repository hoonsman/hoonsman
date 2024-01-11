import React, { useState, useEffect, useRef } from 'react'
import Style from './Main.module.css'
import Comp1 from './Comp1/Comp1'
import Comp2 from './Comp2/Comp2'
import Comp3 from './Comp3/Comp3' // Comp3 import

const Main = () => {
  const [activeComp, setActiveComp] = useState('Comp1') // 활성화된 컴포넌트 상태
  const containerRef = useRef(null)

  const handleScroll = () => {
    if (containerRef.current) {
      const scrolledPercentage =
        (containerRef.current.scrollTop /
          (containerRef.current.scrollHeight -
            containerRef.current.clientHeight)) *
        100

      if (scrolledPercentage < 33) {
        setActiveComp('Comp1')
      } else if (scrolledPercentage < 66) {
        setActiveComp('Comp2')
      } else {
        setActiveComp('Comp3')
      }
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={Style.container} ref={containerRef}>
      <div className={Style.mainContainer}>
        {activeComp === 'Comp1' && <Comp1 />}
        {activeComp === 'Comp2' && <Comp2 />}
        {activeComp === 'Comp3' && <Comp3 />}
      </div>
    </div>
  )
}

export default Main
