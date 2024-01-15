import React, { useRef, useEffect, useState } from 'react'
import Styles from './preview.module.css'
import {
    paintLRInOut,
    paintMidIn,
    paintMidToAll,
    paintBottomUpOut,
    paintLRPartIn,
    paintLRPartOut,
    paintBottomPartIn,
} from './paintAction.js'

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
let canvasWidth
let canvasHeight
const defaultMessageStyle = { top: `0px`, opacity: 0 }
const s1HeightSize = 5
const s2HeightSize = 10
const s3HeightSize = 5

const s1ImgCount = 4
const s2ImgCount = 2
const s3ImgCount = 2

const sceneActive = {
    s1: {
        intro: {
            img: img8,
        },
        img1: {
            drawRangeX: [],
            drawRangeY: [],
            drawIn: [0.2, 0.25],
            drawOut: [0.3, 0.4],
        },
        img2: {
            drawRangeX: [],
            drawRangeY: [],
            drawIn: [0.35, 0.4],
            drawOut: [0.5, 0.6],
        },
        img3: {
            drawRangeX: [],
            drawRangeY: [],
            drawIn: [0.55, 0.6],
            drawOut: [0.65, 0.75],
        },
        img4: {
            drawRangeX: [],
            drawRangeY: [],
            drawIn: [0.7, 0.75],
            drawOut: [0.9, 0.95],
        },
        messages: [
            {
                context: 'hello!',
                opIn: [0, 0.05],
                opOut: [0.15, 0.2],
                trIn: [20, 0],
                trOut: [0, -20],
                color: 'black',
                size: 'large',
                sort: 'middle',
            },
            {
                context: '잘 지냄 수과',
                opIn: [0.2, 0.25],
                opOut: [0.35, 0.4],
                trIn: [20, 0],
                trOut: [0, -20],
                color: 'black',
                size: 'large',
                sort: 'middle',
            },
            {
                context: '나도 잘 지내영',
                opIn: [0.4, 0.45],
                opOut: [0.55, 0.6],
                trIn: [20, 0],
                trOut: [0, -20],
                color: 'black',
                size: 'large',
                sort: 'middle',
            },
            {
                context: '잘 지냄 수과',
                opIn: [0.6, 0.65],
                opOut: [0.75, 0.8],
                trIn: [20, 0],
                trOut: [0, -20],
                color: 'black',
                size: 'large',
                sort: 'middle',
            },
        ],
    },
    s2: {
        img5: {
            drawRangeX: [],
            drawRangeY: [],
            drawMidIn: [0, 0.1],
            drawMidToAllIn: [0.12, 0.18],
            drawBottomUpOut: [0.33, 0.4],
        },
        img6: {
            drawRangeX: [],
            drawRangeY: [],
            drawLRPartIn1: [0.42, 0.48],
            drawLRPartIn2: [0.45, 0.51],
            drawLRPartIn3: [0.48, 0.54],
            drawLRPartIn4: [0.51, 0.57],
            drawLRPartIn5: [0.54, 0.6],
            drawLRPartOut1: [0.87, 0.93],
            drawLRPartOut2: [0.84, 0.9],
            drawLRPartOut3: [0.81, 0.87],
            drawLRPartOut4: [0.78, 0.84],
            drawLRPartOut5: [0.75, 0.81],
        },
    },
    s3: {
        img7: {
            drawRangeX: [],
            drawRangeY: [],
            drawBottomPartIn: [0, 0.1],
            drawVerticalPartIn: [0.12, 0.2],
            drawLRCustomIn: [0.21, 0.3],
            drawLRCustomOut: [0.5, 0.55],
            drawBottomPartOut: [0.56, 0.6],
        },
        img8: {
            drawRangeX: [],
            drawRangeY: [],
            drawLRPartIn: [0.58, 0.62],
            drawLRHorizontalPartIn: [0.63, 0.7],
            drawBottomCuntomIn: [0.71, 0.8],
        },
    },
}

const drawS1 = (sRatio, ctx, scene, imgs) => {
    const { img1, img2, img3, img4 } = scene

    paintLRInOut(
        sRatio,
        ctx,
        img1,
        imgs[imgArr[0]].img,
        canvasWidth,
        canvasHeight,
    )
    paintLRInOut(
        sRatio,
        ctx,
        img2,
        imgs[imgArr[1]].img,
        canvasWidth,
        canvasHeight,
    )
    paintLRInOut(
        sRatio,
        ctx,
        img3,
        imgs[imgArr[2]].img,
        canvasWidth,
        canvasHeight,
    )
    paintLRInOut(
        sRatio,
        ctx,
        img4,
        imgs[imgArr[3]].img,
        canvasWidth,
        canvasHeight,
    )
}

const drawS2 = (sRatio, ctx2, scene, imgs) => {
    const { img5, img6 } = scene

    // Img5

    const img5Action1Border = (img5.drawMidIn[1] + img5.drawMidToAllIn[0]) / 2
    const img5Action2Border =
        (img5.drawMidToAllIn[1] + img5.drawBottomUpOut[0]) / 2
    if (sRatio < img5Action1Border)
        paintMidIn(
            sRatio,
            ctx2,
            img5,
            imgs[imgArr[4]].img,
            canvasWidth,
            canvasHeight,
        )
    else if (sRatio < img5Action2Border)
        paintMidToAll(
            sRatio,
            ctx2,
            img5,
            imgs[imgArr[4]].img,
            canvasWidth,
            canvasHeight,
        )
    else
        paintBottomUpOut(
            sRatio,
            ctx2,
            img5,
            imgs[imgArr[4]].img,
            canvasWidth,
            canvasHeight,
        )

    // img6
    const img6ActionBorder =
        (img6.drawLRPartIn5[1] + img6.drawLRPartOut5[0]) / 2
    if (sRatio < img6ActionBorder) {
        paintLRPartIn(
            sRatio,
            ctx2,
            img6,
            imgs[imgArr[5]].img,
            canvasWidth,
            canvasHeight,
            img6[`drawLRPartIn${1}`],
            0,
            0.2,
        )
        for (let i = 0; i < 4; i++) {
            const from = 0.1 + i * 0.2
            paintLRPartIn(
                sRatio,
                ctx2,
                img6,
                imgs[imgArr[5]].img,
                canvasWidth,
                canvasHeight,
                img6[`drawLRPartIn${i + 2}`],
                from,
                0.3,
            )
        }
    } else {
        paintLRPartOut(
            sRatio,
            ctx2,
            img6,
            imgs[imgArr[5]].img,
            canvasWidth,
            canvasHeight,
            img6[`drawLRPartOut${1}`],
            0,
            0.2,
        )
        for (let i = 0; i < 4; i++) {
            const from = 0.1 + i * 0.2
            paintLRPartOut(
                sRatio,
                ctx2,
                img6,
                imgs[imgArr[5]].img,
                canvasWidth,
                canvasHeight,
                img6[`drawLRPartOut${i + 2}`],
                from,
                0.3,
            )
        }
    }
}

const drawS3 = (sRatio, ctx3, scene, imgs) => {
    const { img7, img8 } = scene
    const img7Action1Border =
        (img7.drawBottomPartIn[1] + img7.drawVerticalPartIn[0]) / 2

    if (sRatio < img7Action1Border)
        paintBottomPartIn(
            sRatio,
            ctx3,
            img7,
            imgs[imgArr[6]].img,
            canvasWidth,
            canvasHeight,
            img7.drawBottomPartIn,
            0.8,
            0.2,
        )
}

const imgSizing = (vWidth, vHeight, imgs) => {
    const whRatio = vWidth / vHeight
    imgs.forEach((i, index) => {
        const imgVHRatio = i.width / i.height
        if (whRatio < imgVHRatio) {
            const fixedScaleRatio = vHeight / i.height
            const fixedWidth = i.width * fixedScaleRatio
            const xDiff = (fixedWidth - vWidth) / fixedScaleRatio / 2
            if (index < s1ImgCount) {
                sceneActive.s1[i.name].drawRangeX = [xDiff, i.width - xDiff]
                sceneActive.s1[i.name].drawRangeY = [0, i.height]
            } else if (index < s1ImgCount + s2ImgCount) {
                sceneActive.s2[i.name].drawRangeX = [xDiff, i.width - xDiff]
                sceneActive.s2[i.name].drawRangeY = [0, i.height]
            } else if (index < s1ImgCount + s2ImgCount + s3ImgCount) {
                sceneActive.s3[i.name].drawRangeX = [xDiff, i.width - xDiff]
                sceneActive.s3[i.name].drawRangeY = [0, i.height]
            }
        } else {
            const fixedScaleRatio = vWidth / i.width
            const fixedHeight = i.height * fixedScaleRatio
            const yDiff = (fixedHeight - vHeight) / fixedScaleRatio / 2
            if (index < s1ImgCount) {
                sceneActive.s1[i.name].drawRangeX = [0, i.width]
                sceneActive.s1[i.name].drawRangeY = [yDiff, i.height - yDiff]
            } else if (index < s1ImgCount + s2ImgCount) {
                sceneActive.s2[i.name].drawRangeX = [0, i.width]
                sceneActive.s2[i.name].drawRangeY = [yDiff, i.height - yDiff]
            } else if (index < s1ImgCount + s2ImgCount + s2ImgCount) {
                sceneActive.s3[i.name].drawRangeX = [0, i.width]
                sceneActive.s3[i.name].drawRangeY = [yDiff, i.height - yDiff]
            }
        }
    })
}

const drawMessage = (sRatio, currentScene, mp, setmp, vheight) => {
    const sceneMessage = sceneActive[`s${currentScene + 1}`].messages
    const newMessagePosition = { s1: [] }
    sceneMessage.forEach((message, index) => {
        const border = (message.opIn[1] + message.opOut[0]) / 2
        let opacity
        let top
        if (sRatio < border) {
            opacity =
                (sRatio - message.opIn[0]) / (message.opIn[1] - message.opIn[0])
            if (opacity < 0) opacity = 0
            else if (opacity > 1) opacity = 1
            top =
                message.trIn[0] + (message.trIn[1] - message.trIn[0]) * opacity
        } else {
            opacity =
                1 -
                (sRatio - message.opOut[0]) /
                    (message.opOut[1] - message.opOut[0])
            if (opacity < 0) opacity = 0
            else if (opacity > 1) opacity = 1
            top =
                message.trOut[0] +
                (message.trOut[1] - message.trOut[0]) * (1 - opacity)
        }

        newMessagePosition[`s${currentScene + 1}`].push({
            ...mp[index],
            top: `${vheight / 2 + top}px`,
            opacity,
        })
    })
    setmp(newMessagePosition)
}

const activeScene = (
    currentscene,
    sRatio,
    ctx,
    imgs,
    mp,
    setmp,
    vheight,
    ctx2,
    ctx3,
) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx2.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx3.clearRect(0, 0, canvasWidth, canvasHeight)
    switch (currentscene) {
        case 0:
            drawS1(sRatio, ctx, sceneActive.s1, imgs)
            drawMessage(sRatio, currentscene, mp, setmp, vheight)
            break
        case 1:
            drawS2(sRatio, ctx2, sceneActive.s2, imgs)
            break
        case 2:
            drawS3(sRatio, ctx3, sceneActive.s3, imgs)
            break
        default:
    }
}
const messagePositionInitial = (vWidth, vHeight, setMessagePosition) => {
    const newStyles = {
        s1: [],
    }
    for (let i = 0; i < sceneActive.s1.messages.length; i++) {
        newStyles.s1.push({ top: `${vHeight / 2}px`, opacity: 0 })
    }
    setMessagePosition(newStyles)
}

export default function Preview({ size }) {
    const vRef = useRef()
    const cRef = useRef()
    const s1Ref = useRef()
    const s2Ref = useRef()
    const s3Ref = useRef()
    const c2Ref = useRef()
    const c3Ref = useRef()
    const [isLoading, setIsLoading] = useState(true)
    const [imgs, setImgs] = useState({})
    const [messagePosition, setMessagePosition] = useState({
        s1: [
            defaultMessageStyle,
            defaultMessageStyle,
            defaultMessageStyle,
            defaultMessageStyle,
            defaultMessageStyle,
        ],
    })

    useEffect(() => {
        if (
            !vRef ||
            !cRef ||
            !s1Ref ||
            !s2Ref ||
            !s3Ref ||
            !c2Ref ||
            !c3Ref ||
            isLoading
        )
            return

        //height 고정, 그에 대한 width 보정
        const vContainer = vRef.current
        // canvas acitve
        const ctx = cRef.current.getContext('2d')
        const ctx2 = c2Ref.current.getContext('2d')
        const ctx3 = c3Ref.current.getContext('2d')
        // canvas sizing(for scene1)
        // s1 - img1 - 4
        const pHeight = vContainer.parentNode.offsetHeight

        const whRatio = size.width / size.height

        const vHeight = (pHeight * 8) / 10
        const vWidth = vHeight * whRatio
        vContainer.style.width = `${vWidth}px`
        vContainer.style.height = `${vHeight}px`
        canvasWidth =
            cRef.current.width =
            c2Ref.current.width =
            c3Ref.current.width =
                vWidth
        canvasHeight =
            cRef.current.height =
            c2Ref.current.height =
            c3Ref.current.height =
                vHeight

        messagePositionInitial(vWidth, vHeight, setMessagePosition)

        imgSizing(vWidth, vHeight, [
            imgs[img1],
            imgs[img2],
            imgs[img3],
            imgs[img4],
            imgs[img5],
            imgs[img6],
            imgs[img7],
        ])

        s1Ref.current.style.height = vHeight * s1HeightSize + 'px'
        heightArr[0] = vHeight * s1HeightSize
        s2Ref.current.style.height = vHeight * s2HeightSize + 'px'
        heightArr[1] = vHeight * s2HeightSize
        s3Ref.current.style.height = vHeight * s3HeightSize + 'px'
        heightArr[2] = vHeight * s3HeightSize

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
            activeScene(
                currentScene,
                sRatio,
                ctx,
                imgs,
                messagePosition,
                setMessagePosition,
                vHeight,
                ctx2,
                ctx3,
            )
        }

        vContainer.addEventListener('scroll', handleViewScroll)

        return () => {
            vContainer.removeEventListener('scroll', handleViewScroll)
        }
    }, [vRef, size, cRef, s1Ref, s2Ref, isLoading, imgs, c2Ref, s3Ref, c3Ref])

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
            <div ref={s1Ref} className={Styles.scene}>
                <div className={Styles.intro_img}>
                    <img src={sceneActive.s1.intro.img} alt="introimage" />
                </div>
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
                                style={{ ...messagePosition.s1[index] }}
                            >
                                {message.context}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div ref={s2Ref} className={Styles.scene}>
                <div className={Styles.sticky_box}>
                    <canvas
                        ref={c2Ref}
                        className={`${Styles.s1_canvas}`}
                    ></canvas>
                </div>
            </div>
            <div ref={s3Ref} className={Styles.scene}>
                <div className={Styles.sticky_box}>
                    <canvas
                        ref={c3Ref}
                        className={`${Styles.s1_canvas}`}
                    ></canvas>
                </div>
            </div>
        </div>
    )
}
