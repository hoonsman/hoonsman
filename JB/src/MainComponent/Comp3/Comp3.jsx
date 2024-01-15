import React from 'react'
import Style from './Comp3.module.css' // Comp3 컴포넌트의 CSS 파일 연결

const Comp3 = ({
  active,
  showMessage1,
  showMessage2,
  showImage1,
  showImage2,
  showImage3,
}) => {
  return (
    <div
      className={`${Style.container} ${active ? Style.active : Style.inactive}`} // CSS 클래스 연결
    >
      <div className={`${Style.message1} ${showMessage1 ? Style.fadeIn : ''}`}>
        안심할 수 있는 내구성
      </div>
      <div className={`${Style.message2} ${showMessage2 ? Style.fadeIn : ''}`}>
        듀얼 레일 구조로 내구성이 뛰어난 플렉스 힌지를 만나보세요.
        <br />
        갤럭시 Z플립5는 견고하여 안심하고 사용할 수 있습니다.
      </div>
      <div className={Style.imageContainer}>
        {/* 각 이미지의 출력 여부에 따라 조건부 렌더링 */}
        <div className={`${Style.image1} ${showImage1 ? Style.fadeIn : ''}`}>
          <img src={`${process.env.PUBLIC_URL}/image3_1.png`} alt="Image 1" />
        </div>
        <div className={`${Style.image2} ${showImage2 ? Style.fadeIn : ''}`}>
          <img src={`${process.env.PUBLIC_URL}/image3_2.png`} alt="Image 2" />
        </div>
        <div className={`${Style.image3} ${showImage3 ? Style.fadeIn : ''}`}>
          <img src={`${process.env.PUBLIC_URL}/image3_3.png`} alt="Image 3" />
        </div>
      </div>
    </div>
  )
}

export default Comp3
