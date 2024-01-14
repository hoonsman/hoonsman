import React, { useState, useEffect, useRef } from 'react'
import styles from './Main.module.css'
import Comp1 from './Comp1/Comp1'
import Comp2 from './Comp2/Comp2'
import Comp3 from './Comp3/Comp3'

const Main = () => {
  // activeComp 상태를 사용하여 현재 활성화된 컴포넌트를 추적합니다.
  const [activeComp, setActiveComp] = useState('Comp1')

  // containerRef는 스크롤 이벤트를 위한 DOM 참조입니다.
  const containerRef = useRef(null)

  const handleScroll = () => {
    // 현재 스크롤 위치와 컨테이너 높이를 가져옵니다.
    const scrollY = containerRef.current.scrollTop
    const height = containerRef.current.clientHeight

    // 스크롤 위치에 따라 활성 컴포넌트를 변경합니다.
    if (scrollY < height) {
      setActiveComp('Comp1') // 스크롤이 첫 번째 컴포넌트 범위에 있을 때
    } else if (scrollY < height * 3) {
      setActiveComp('Comp2') // 스크롤이 두 번째 컴포넌트 범위에 있을 때
    } else if (scrollY < height * 5) {
      setActiveComp('Comp3') // 스크롤이 세 번째 컴포넌트 범위에 있을 때
    }
  }

  // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너를 추가하고, 언마운트될 때 제거합니다.
  useEffect(() => {
    const container = containerRef.current
    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 현재 활성 컴포넌트에 따라 애니메이션 클래스를 결정합니다.
  const getAnimationClass = (compName) => {
    // 활성 컴포넌트일 경우 fadeIn, 아닐 경우 fadeOut 클래스를 적용합니다.
    return activeComp === compName ? styles.fadeIn : styles.fadeOut
  }

  return (
    <div className={styles.container} ref={containerRef}>
      {/* 각 컴포넌트에 애니메이션 클래스를 적용합니다. */}
      <div className={`${styles.mainContainer} ${getAnimationClass('Comp1')}`}>
        <Comp1 active={activeComp === 'Comp1'} />
      </div>
      <div className={`${styles.mainContainer} ${getAnimationClass('Comp2')}`}>
        <Comp2 active={activeComp === 'Comp2'} />
      </div>
      <div className={`${styles.mainContainer} ${getAnimationClass('Comp3')}`}>
        <Comp3 active={activeComp === 'Comp3'} />
      </div>
    </div>
  )
}

export default Main
