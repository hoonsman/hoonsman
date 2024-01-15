import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const sliderRef1 = useRef();
  const sliderRef2 = useRef();
  const sectionRefs = useRef([]);
  const [textAnimationStatus, setTextAnimationStatus] = useState({});

  useEffect(() => {
    if (!sliderRef1 || !sliderRef2) return;

    const imgWidth = 380;
    let imgX = 0;
    const intervalId1 = setInterval(() => {
      imgX -= 380;
      if (imgX < -imgWidth * 2) imgX = 0;

      sliderRef1.current.style.left = `${imgX}px`;
      sliderRef2.current.style.Right = `${imgX}px`;
    }, 2000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionIndex = sectionRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            entry.target.classList.remove("fade-out");
            // 이미지 fade-in이 완료된 후에 텍스트 애니메이션 시작
            setTimeout(() => {
              setTextAnimationStatus((prev) => ({
                ...prev,
                [sectionIndex]: "text-fade-in",
              }));
            }, 2000); // 이미지 fade-in 애니메이션 시간과 일치
          } else {
            entry.target.classList.add("fade-out");
            entry.target.classList.remove("fade-in");
            // 텍스트 애니메이션 상태 초기화
            setTextAnimationStatus((prev) => ({
              ...prev,
              [sectionIndex]: "",
            }));
          }
        });
      },
      {
        threshold: [0.2, 0.9],
      }
    );

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => {
      sectionRefs.current.forEach((section) => observer.unobserve(section));
      clearInterval(intervalId1);
    };
  }, [sliderRef1, sliderRef2]);

  return (
    <div className='wrapper'>
      <div className='container'>
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className='section intro'>
          <img
            src='images/intro.png'
            alt='Intro'
            className='background-image'
          />
          <p className={`text ${textAnimationStatus[0] || ""}`}>
            세미나에 대한 소개
          </p>
        </section>
        <div className='half-height-block'></div>
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className='section intro'>
          <div ref={sliderRef1} className='slider'>
            <img
              src='images/desc1.png'
              alt='Description 1'
              className='background-image'
            />
            <img
              src='images/desc1.png'
              alt='Description 1'
              className='background-image'
            />
            <img
              src='images/desc1.png'
              alt='Description 1'
              className='background-image'
            />
          </div>
          <p className={`keyword ${textAnimationStatus[1] || ""}`}>키워드 1</p>
          <p className={`description-text ${textAnimationStatus[1] || ""}`}>
            세미나에 대한 설명 1
          </p>
        </section>
        <div className='half-height-block'></div>
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className='section intro'>
          <div ref={sliderRef2} className='slider'>
            <img
              src='images/desc2.png'
              alt='Description 2'
              className='background-image'
            />
            <img
              src='images/desc2.png'
              alt='Description 2'
              className='background-image'
            />
            <img
              src='images/desc2.png'
              alt='Description 2'
              className='background-image'
            />
          </div>
          <p className={`keyword ${textAnimationStatus[2] || ""}`}>키워드 2</p>
          <p className={`description-text ${textAnimationStatus[2] || ""}`}>
            세미나에 대한 설명 2
          </p>
        </section>
        <div className='half-height-block'></div>
        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          className='section intro'>
          <img
            src='images/location.png'
            alt='Location n Time'
            className='background-image'
          />
          <p className={`text ${textAnimationStatus[3] || ""}`}>
            세미나의 위치와 날짜
          </p>
        </section>

        <section
          ref={(el) => (sectionRefs.current[4] = el)}
          className='section intro'>
          <img
            src='images/conclusion.png'
            alt='Con'
            className='background-image'
          />
          <p className={`text ${textAnimationStatus[4] || ""}`}>맺음말</p>
        </section>
      </div>
    </div>
  );
}

export default App;
