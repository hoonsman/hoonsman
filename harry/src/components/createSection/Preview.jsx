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
let canv1W
let canv1H

const s1HeightSize = 5

const sceneActive = {
    s1: {
        opAction: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            opacityInRatio: [0, 0.1],
            opacityOutRatio: [0.9, 1],
        },
        img1: {
            drawRangeX: '',
            drawRangeY: '',
            drawIn: [0, 0.1],
            drawOut: [0.15, 0.25],
        },
        img2: {
            drawRangeX: '',
            drawRangeY: '',
            drawIn: [0.2, 0.25],
            drawOut: [0.3, 0.4],
        },
        img3: {
            drawRangeX: '',
            drawRangeY: '',
            drawIn: [0.35, 0.4],
            drawOut: [0.45, 0.55],
        },
        img4: {
            drawRangeX: '',
            drawRangeY: '',
            drawIn: [0.5, 0.55],
            drawOut: [0.6, 0.65],
        },
        messages: [
            {
                context: 'hello!',
                opOut: [0, 0.05],
                color: 'black',
                size: 'large',
                sort: 'middle',
            },
            {
                context: '잘 지냄 수과',
                opIn: [0.1, 0.15],
                opOut: [0.2, 0.25],
                trIn: [20, 0],
                trOut: [0, -20],
                color: 'black',
                size: 'large',
                sort: 'middle',
            },
            {
                context: '나도 잘 지내영',
                opIn: [0.3, 0.35],
                opOut: [0.4, 0.45],
                trIn: [20, 0],
                trOut: [0, -20],
                color: 'black',
                size: 'large',
                sort: 'middle',
            },
            {
                context: '잘 지냄 수과',
                opIn: [0.5, 0.55],
                opOut: [0.6, 0.65],
                trIn: [20, 0],
                trOut: [0, -20],
                color: 'black',
                size: 'large',
                sort: 'middle',
            },
        ],
    },
}

const paintImage = (sRatio, ctx, rangeInfo, paintImg) => {
    const paintingBorder = (rangeInfo.drawIn[1] + rangeInfo.drawOut[0]) / 2
    if (sRatio < paintingBorder) {
        let drawCX =
            (canv1W * (sRatio - rangeInfo.drawIn[0])) /
            (rangeInfo.drawIn[1] - rangeInfo.drawIn[0])

        let drawIX =
            ((rangeInfo.drawRangeX[1] - rangeInfo.drawRangeX[0]) *
                (sRatio - rangeInfo.drawIn[0])) /
            (rangeInfo.drawIn[1] - rangeInfo.drawIn[0])
        if (drawCX < 0) drawCX = 0
        else if (drawCX > canv1W) drawCX = canv1W

        if (drawIX < 0) drawIX = 0
        else if (drawIX > rangeInfo.drawRangeX[1] - rangeInfo.drawRangeX[0])
            drawIX = rangeInfo.drawRangeX[1] - rangeInfo.drawRangeX[0]
        ctx.drawImage(
            paintImg,
            rangeInfo.drawRangeX[0],
            rangeInfo.drawRangeY[0],
            drawIX,
            rangeInfo.drawRangeY[1] - rangeInfo.drawRangeY[0],
            0,
            0,
            drawCX,
            canv1H,
        )
    } else {
        let drawCX =
            (canv1W * (sRatio - rangeInfo.drawOut[0])) /
            (rangeInfo.drawOut[1] - rangeInfo.drawOut[0])
        let drawIX =
            ((rangeInfo.drawRangeX[1] - rangeInfo.drawRangeX[0]) *
                (sRatio - rangeInfo.drawOut[0])) /
            (rangeInfo.drawOut[1] - rangeInfo.drawOut[0])
        if (drawCX < 0) drawCX = 0
        else if (drawCX > canv1W) drawCX = canv1W

        if (drawIX < 0) drawIX = 0
        else if (drawIX > rangeInfo.drawRangeX[1] - rangeInfo.drawRangeX[0])
            drawIX = rangeInfo.drawRangeX[1] - rangeInfo.drawRangeX[0]
        console.log(drawCX)
        ctx.drawImage(
            paintImg,
            rangeInfo.drawRangeX[0] + drawIX,
            rangeInfo.drawRangeY[0],
            rangeInfo.drawRangeX[1] - (rangeInfo.drawRangeX[0] + drawIX),
            rangeInfo.drawRangeY[1] - rangeInfo.drawRangeY[0],
            drawCX,
            0,
            canv1W - drawCX,
            canv1H,
        )
    }
}

const drawS1 = (sRatio, ctx, scene, imgs) => {
    const { opAction, img1, img2, img3, img4 } = scene
    // opacity
    const opaB = (opAction.opacityInRatio[1] + opAction.opacityOutRatio[0]) / 2
    let opNow
    if (sRatio < opaB) {
        opNow = sRatio * 10
    } else {
        opNow = 1 - (sRatio - opAction.opacityOutRatio[0]) / 0.1
    }
    if (opNow > 1) opNow = 1
    else if (opNow < 0) opNow = 1

    paintImage(sRatio, ctx, img1, imgs[imgArr[0]].img)
    paintImage(sRatio, ctx, img2, imgs[imgArr[1]].img)
    paintImage(sRatio, ctx, img3, imgs[imgArr[2]].img)
    paintImage(sRatio, ctx, img4, imgs[imgArr[3]].img)
}

const s1ImgSizing = (vWidth, vHeight, imgs) => {
    const whRatio = vWidth / vHeight
    // img draw Range - img1, img2
    imgs.forEach((i) => {
        const imgVHRatio = i.width / i.height
        if (whRatio < imgVHRatio) {
            const fixedScaleRatio = vHeight / i.height
            const fixedWidth = i.width * fixedScaleRatio
            const xDiff = (fixedWidth - vWidth) / fixedScaleRatio / 2
            sceneActive.s1[i.name].drawRangeX = [xDiff, i.width - xDiff]
            sceneActive.s1[i.name].drawRangeY = [0, i.height]
        } else {
            const fixedScaleRatio = vWidth / i.width
            const fixedHeight = i.height * fixedScaleRatio
            const yDiff = (fixedHeight - vHeight) / fixedScaleRatio / 2
            sceneActive.s1[i.name].drawRangeX = [0, i.width]
            sceneActive.s1[i.name].drawRangeY = [yDiff, i.height - yDiff]
        }
    })
}

const activeScene = (currentscene, sRatio, ctx, imgs) => {
    switch (currentscene) {
        case 0:
            drawS1(sRatio, ctx, sceneActive.s1, imgs)
            break
        default:
    }
}

export default function Preview({ size }) {
    const vRef = useRef()
    const cRef = useRef()
    const s1Ref = useRef()
    const [isLoading, setIsLoading] = useState(true)
    const [imgs, setImgs] = useState({})
    const s1MessageRef = useRef([])

    useEffect(() => {
        if (!vRef || !cRef || !s1Ref || isLoading) return

        //height 고정, 그에 대한 width 보정
        const vContainer = vRef.current
        // canvas acitve
        const ctx = cRef.current.getContext('2d')

        // canvas sizing(for scene1)
        // s1 - img1 - 4
        const pHeight = vContainer.parentNode.offsetHeight

        const whRatio = size.width / size.height

        const vHeight = (pHeight * 8) / 10
        const vWidth = vHeight * whRatio
        vContainer.style.width = `${vWidth}px`
        vContainer.style.height = `${vHeight}px`
        canv1W = cRef.current.width = vWidth
        canv1H = cRef.current.height = vHeight

        // s1 message position initialization
        for (let i = 0; i < sceneActive.s1.messages.length; i++)
            s1MessageRef[i].style.top = `${vHeight / 2}px`

        s1ImgSizing(vWidth, vHeight, [
            imgs[img1],
            imgs[img2],
            imgs[img3],
            imgs[img4],
        ])

        s1Ref.current.style.height = vHeight * s1HeightSize + 'px'
        heightArr[0] = vHeight * s1HeightSize

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
            const messageBoxes = []
            const sRatio = (scrollY - currentStartY) / heightArr[currentScene]
            ctx.clearRect(0, 0, canv1W, canv1H)
            activeScene(currentScene, sRatio, ctx, imgs)
        }

        vContainer.addEventListener('scroll', handleViewScroll)

        return () => {
            vContainer.removeEventListener('scroll', handleViewScroll)
        }
    }, [vRef, size, cRef, s1Ref, isLoading, imgs])

    // Src Loading
    useEffect(() => {
        // src Uploading
        imgArr.forEach((path, index) => {
            const img = new Image()
            img.src = path
            img.onload = () => {
                setImgs((prev) => {
                    return {
                        ...prev,
                        [path]: {
                            name: `img${index + 1}`,
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
                <div className={Styles.sticky_box}>
                    <canvas
                        ref={cRef}
                        className={`${Styles.s1_canvas}`}
                    ></canvas>

                    {sceneActive.s1.messages.map((message, index) => {
                        return (
                            <div
                                key={index}
                                className={Styles.s1message}
                                ref={(el) => {
                                    s1MessageRef[index] = el
                                }}
                            >
                                {message.context}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
