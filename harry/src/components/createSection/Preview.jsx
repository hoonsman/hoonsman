import React, { useRef, useEffect } from 'react'
import Styles from './preview.module.css'

const s1CanvasWidth = 1024
const s1CanvasHeight = 1024

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

export default function Preview({ size }) {
    const vRef = useRef()
    const cRef = useRef()
    const s1Ref = useRef()
    console.log(size)

    useEffect(() => {
        if (!vRef || !cRef || !s1Ref) return
        //height 고정, 그에 대한 width 보정

        // canvas acitve
        const ctx = cRef.current.getContext('2d')
        ctx.fillRect(100, 100, 300, 300)

        // canvas sizing(for scene1)
        const pHeight = vRef.current.parentNode.offsetHeight

        const whRatio = size.width / size.height

        const vHeight = (pHeight * 8) / 10
        const vWidth = vHeight * whRatio
        vRef.current.style.width = `${vWidth}px`
        vRef.current.style.height = `${vHeight}px`
        s1CanvasSizing(whRatio, vWidth, vHeight, cRef.current)
        s1Ref.current.style.height = vHeight * 3 + 'px'
    }, [vRef, size, cRef, s1Ref])

    return (
        <div ref={vRef} className={Styles.container}>
            <canvas
                ref={cRef}
                width={s1CanvasWidth}
                height={s1CanvasHeight}
                className={`${Styles.scene_canvas}`}
            ></canvas>
            <div ref={s1Ref} className={Styles.s1}>
                g
            </div>
        </div>
    )
}
