import React, { useRef, useEffect, useState } from 'react'
import Styles from './preview.module.css'

import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
import img4 from '../../imgs/img4.png'
import img5 from '../../imgs/img5.png'
import img6 from '../../imgs/img6.png'
import img7 from '../../imgs/img7.png'
import img8 from '../../imgs/img8.png'

const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8]
const heightArr = []

let s1CanvasWidth
let s1CanvasHeight

let currentScene = 0

const s1CanvasSizing = (whRatio, vWidth, vHeight, canvCurrent) => {
    const cwhRatio = s1CanvasWidth / s1CanvasHeight

    if (whRatio < cwhRatio) {
        const fixedScaleRatio = vHeight / s1CanvasHeight
        const cTransX = (vWidth / 2) * (1 / fixedScaleRatio) - s1CanvasWidth / 2
        canvCurrent.style.transform = `scale(${fixedScaleRatio}) translate3d(${cTransX}px, 0, 0)`
    } else {
        const fixedScaleRatio = vWidth / s1CanvasWidth
        const cTransY =
            -s1CanvasHeight / 2 + (vHeight / 2) * (1 / fixedScaleRatio)
        canvCurrent.style.transform = `scale(${fixedScaleRatio}) translate3d(0, ${cTransY}px, 0)`
    }
}

const activeScene = (currentscene, sRatio, ctx) => {
    console.log(sRatio)
}

export default function Preview({ size }) {
    const vRef = useRef()
    const cRef = useRef()
    const s1Ref = useRef()
    const [isLoading, setIsLoading] = useState(true)
    const [imgs, setImgs] = useState({})

    useEffect(() => {
        if (!vRef || !cRef || !s1Ref || isLoading) return
        //height 고정, 그에 대한 width 보정
        console.log(imgs)
        const vContainer = vRef.current

        // canvas acitve
        const ctx = cRef.current.getContext('2d')
        ctx.fillRect(100, 100, 300, 300)

        // canvas sizing(for scene1)
        // s1 - img1, img2
        s1CanvasWidth = imgs[img1].width
        s1CanvasHeight = imgs[img1].height
        const pHeight = vContainer.parentNode.offsetHeight

        const whRatio = size.width / size.height

        const vHeight = (pHeight * 8) / 10
        const vWidth = vHeight * whRatio
        vContainer.style.width = `${vWidth}px`
        vContainer.style.height = `${vHeight}px`
        s1CanvasSizing(whRatio, vWidth, vHeight, cRef.current)
        s1Ref.current.style.height = vHeight * 3 + 'px'
        heightArr[0] = vHeight * 3

        const handleViewScroll = (e) => {
            // calculate scrollY
            const vTop = e.target.getBoundingClientRect().top
            const sTop = s1Ref.current.getBoundingClientRect().top
            const scrollY = vTop - sTop

            let currentScene = 0
            let tempHeightVal = scrollY
            let currentStartY = 0
            // check current scene
            for (let i = 0; i < heightArr.length; i++) {
                tempHeightVal -= heightArr[i]
                if (tempHeightVal < 0) break
                else {
                    currentScene++
                    currentStartY += heightArr[i]
                }
            }

            const sRatio = (scrollY - currentStartY) / heightArr[currentScene]

            activeScene(currentScene, sRatio, ctx)
        }

        vContainer.addEventListener('scroll', handleViewScroll)

        return () => {
            vContainer.removeEventListener('scroll', handleViewScroll)
        }
    }, [vRef, size, cRef, s1Ref, isLoading, imgs])

    // Src Loading
    useEffect(() => {
        // src Uploading
        imgArr.forEach((path) => {
            const img = new Image()
            img.src = path
            img.onload = () => {
                setImgs((prev) => {
                    return {
                        ...prev,
                        [path]: {
                            img,
                            path,
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                        },
                    }
                })
            }
        })

        const onWindowLoad = () => {
            setIsLoading(false)
        }
        window.addEventListener('load', onWindowLoad)
        return () => {
            window.removeEventListener('load', onWindowLoad)
        }
    }, [])

    return (
        <div ref={vRef} className={Styles.container}>
            <div ref={s1Ref} className={Styles.s1}>
                <canvas
                    ref={cRef}
                    width={s1CanvasWidth}
                    height={s1CanvasHeight}
                    className={`${Styles.scene_canvas}`}
                ></canvas>
                g
            </div>
        </div>
    )
}
