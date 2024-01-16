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
    paintVerticalPartIn,
    paintLRCustomIn,
    paintLRCustomOut,
    paintBottomPartOut,
} from './paintAction.js'

import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
import img4 from '../../imgs/img4.png'
import img5 from '../../imgs/img5.png'
import img6 from '../../imgs/img6.png'
import img7 from '../../imgs/img7.png'
import img8 from '../../imgs/img8.png'

const heightArr = []
let canvasWidth
let canvasHeight
const defaultMessageStyle = { top: `0px`, opacity: 0 }

const s1HeightSize = 8
const s2HeightSize = 10
const s3HeightSize = 8

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
                opIn: [0.25, 0.28],
                opOut: [0.35, 0.38],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.39, 0.42],
                opOut: [0.49, 0.52],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.53, 0.56],
                opOut: [0.63, 0.66],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.67, 0.7],
                opOut: [0.77, 0.8],
                trIn: [15, 0],
                trOut: [0, -15],
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
        messages: [
            {
                opIn: [0.13, 0.15],
                opOut: [0.19, 0.21],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.22, 0.24],
                opOut: [0.28, 0.3],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.53, 0.57],
                opOut: [0.62, 0.64],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.65, 0.68],
                opOut: [0.73, 0.76],
                trIn: [15, 0],
                trOut: [0, -15],
            },
        ],
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
            drawBottomPartIn: [0.56, 0.6],
            drawLRCustomIn: [0.61, 0.7],
        },
        messages: [
            {
                opIn: [0.29, 0.32],
                opOut: [0.45, 0.48],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.65, 0.7],
                opOut: [0.8, 1],
                trIn: [15, 0],
                trOut: [0, -15],
            },
        ],
    },
}

const drawS1 = (sRatio, ctx, scene, imgs) => {
    const { img1, img2, img3, img4 } = scene

    paintLRInOut(sRatio, ctx, img1, imgs.img1.img, canvasWidth, canvasHeight)
    paintLRInOut(sRatio, ctx, img2, imgs.img2.img, canvasWidth, canvasHeight)
    paintLRInOut(sRatio, ctx, img3, imgs.img3.img, canvasWidth, canvasHeight)
    paintLRInOut(sRatio, ctx, img4, imgs.img4.img, canvasWidth, canvasHeight)
}

const drawS2 = (sRatio, ctx2, scene, imgs) => {
    const { img5, img6 } = scene

    // Img5

    const img5Action1Border = (img5.drawMidIn[1] + img5.drawMidToAllIn[0]) / 2
    const img5Action2Border =
        (img5.drawMidToAllIn[1] + img5.drawBottomUpOut[0]) / 2
    if (sRatio < img5Action1Border)
        paintMidIn(sRatio, ctx2, img5, imgs.img5.img, canvasWidth, canvasHeight)
    else if (sRatio < img5Action2Border)
        paintMidToAll(
            sRatio,
            ctx2,
            img5,
            imgs.img5.img,
            canvasWidth,
            canvasHeight,
        )
    else
        paintBottomUpOut(
            sRatio,
            ctx2,
            img5,
            imgs.img5.img,
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
            imgs.img6.img,
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
                imgs.img6.img,
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
            imgs.img6.img,
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
                imgs.img6.img,
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
    const img7Action2Border =
        (img7.drawVerticalPartIn[1] + img7.drawLRCustomIn[0]) / 2
    const img7Action3Border =
        (img7.drawLRCustomIn[1] + img7.drawLRCustomOut[0]) / 2
    const img7Action4Border =
        (img7.drawLRCustomOut[1] + img7.drawBottomPartOut[0]) / 2

    // img7Action
    if (sRatio < img7Action1Border)
        paintBottomPartIn(
            sRatio,
            ctx3,
            img7,
            imgs.img7.img,
            canvasWidth,
            canvasHeight,
            img7.drawBottomPartIn,
            0.9,
            0.1,
        )
    else if (sRatio < img7Action2Border)
        paintVerticalPartIn(
            sRatio,
            ctx3,
            img7,
            imgs.img7.img,
            canvasWidth,
            canvasHeight,
            img7.drawVerticalPartIn,
            0.9,
            0.1,
        )
    else if (sRatio < img7Action3Border)
        paintLRCustomIn(
            sRatio,
            ctx3,
            img7,
            imgs.img7.img,
            canvasWidth,
            canvasHeight,
            img7.drawLRCustomIn,
            0.1,
        )
    else if (sRatio < img7Action4Border)
        paintLRCustomOut(
            sRatio,
            ctx3,
            img7,
            imgs.img7.img,
            canvasWidth,
            canvasHeight,
            img7.drawLRCustomOut,
            0.1,
        )
    else
        paintBottomPartOut(
            sRatio,
            ctx3,
            img7,
            imgs.img7.img,
            canvasWidth,
            canvasHeight,
            img7.drawBottomPartOut,
            0.9,
            0.1,
        )

    // img8Action
    const img8Action1Border =
        (img8.drawBottomPartIn[1] + img8.drawLRCustomIn[0]) / 2
    if (sRatio < img8Action1Border)
        paintBottomPartIn(
            sRatio,
            ctx3,
            img8,
            imgs.img8.img,
            canvasWidth,
            canvasHeight,
            img8.drawBottomPartIn,
            0,
            0.1,
        )
    else
        paintLRCustomIn(
            sRatio,
            ctx3,
            img8,
            imgs.img8.img,
            canvasWidth,
            canvasHeight,
            img8.drawLRCustomIn,
            0.1,
        )
}

const imgSizing = (vWidth, vHeight, imgs, sceneActive) => {
    const { img1, img2, img3, img4, img5, img6, img7, img8 } = imgs

    const s1Imgs = [img1, img2, img3, img4]
    const s2Imgs = [img5, img6]
    const s3Imgs = [img7, img8]

    const whRatio = vWidth / vHeight
    s1Imgs.forEach((i) => {
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
    s2Imgs.forEach((i) => {
        const imgVHRatio = i.width / i.height
        if (whRatio < imgVHRatio) {
            const fixedScaleRatio = vHeight / i.height
            const fixedWidth = i.width * fixedScaleRatio
            const xDiff = (fixedWidth - vWidth) / fixedScaleRatio / 2

            sceneActive.s2[i.name].drawRangeX = [xDiff, i.width - xDiff]
            sceneActive.s2[i.name].drawRangeY = [0, i.height]
        } else {
            const fixedScaleRatio = vWidth / i.width
            const fixedHeight = i.height * fixedScaleRatio
            const yDiff = (fixedHeight - vHeight) / fixedScaleRatio / 2

            sceneActive.s2[i.name].drawRangeX = [0, i.width]
            sceneActive.s2[i.name].drawRangeY = [yDiff, i.height - yDiff]
        }
    })
    s3Imgs.forEach((i) => {
        const imgVHRatio = i.width / i.height
        if (whRatio < imgVHRatio) {
            const fixedScaleRatio = vHeight / i.height
            const fixedWidth = i.width * fixedScaleRatio
            const xDiff = (fixedWidth - vWidth) / fixedScaleRatio / 2

            sceneActive.s3[i.name].drawRangeX = [xDiff, i.width - xDiff]
            sceneActive.s3[i.name].drawRangeY = [0, i.height]
        } else {
            const fixedScaleRatio = vWidth / i.width
            const fixedHeight = i.height * fixedScaleRatio
            const yDiff = (fixedHeight - vHeight) / fixedScaleRatio / 2

            sceneActive.s3[i.name].drawRangeX = [0, i.width]
            sceneActive.s3[i.name].drawRangeY = [yDiff, i.height - yDiff]
        }
    })
}

const drawMessage = (
    sRatio,
    currentScene,
    messageStyles,
    setMessageStyles,
    vheight,
    sceneActive,
) => {
    const messageActive = sceneActive[`s${currentScene + 1}`].messages
    const sceneMessage = messageStyles[`s${currentScene + 1}`]
    const newMessageStyles = []
    sceneMessage.forEach((_, index) => {
        const border =
            (messageActive[index].opIn[1] + messageActive[index].opOut[0]) / 2
        let opacity
        let top
        if (sRatio < border) {
            opacity =
                (sRatio - messageActive[index].opIn[0]) /
                (messageActive[index].opIn[1] - messageActive[index].opIn[0])
            if (opacity < 0) opacity = 0
            else if (opacity > 1) opacity = 1
            top =
                messageActive[index].trIn[0] +
                (messageActive[index].trIn[1] - messageActive[index].trIn[0]) *
                    opacity
        } else {
            opacity =
                1 -
                (sRatio - messageActive[index].opOut[0]) /
                    (messageActive[index].opOut[1] -
                        messageActive[index].opOut[0])
            if (opacity < 0) opacity = 0
            else if (opacity > 1) opacity = 1
            top =
                messageActive[index].trOut[0] +
                (messageActive[index].trOut[1] -
                    messageActive[index].trOut[0]) *
                    (1 - opacity)
        }

        newMessageStyles.push({
            ...sceneMessage[index],
            top: `${vheight / 2 + top}px`,
            opacity,
        })
    })

    setMessageStyles((prev) => {
        const newStyles = {
            ...prev,
            [`s${currentScene + 1}`]: [...newMessageStyles],
        }

        return newStyles
    })
}

const activeScene = (
    currentscene,
    sRatio,
    ctx,
    imgs,
    messageStyles,
    setMessageStyles,
    vheight,
    ctx2,
    ctx3,
    sceneActive,
    sceneData
) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx2.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx3.clearRect(0, 0, canvasWidth, canvasHeight)
    switch (currentscene) {
        case 0:
            drawS1(sRatio, ctx, sceneActive.s1, imgs)
            drawMessage(
                sRatio,
                currentscene,
                messageStyles,
                setMessageStyles,
                vheight,
                sceneActive,
            )
            break
        case 1:
            drawS2(sRatio, ctx2, sceneActive.s2, imgs)
            drawMessage(
                sRatio,
                currentscene,
                messageStyles,
                setMessageStyles,
                vheight,
                sceneActive,
            )
            break
        case 2:
            drawS3(sRatio, ctx3, sceneActive.s3, imgs)
            drawMessage(
                sRatio,
                currentscene,
                messageStyles,
                setMessageStyles,
                vheight,
                sceneActive,
            )
            break
        default:
    }
}

const messageStylesInitial = (vWidth, vHeight, setMessageStyles, sceneData) => {
    const { s1, s2, s3 } = sceneData

    const newStyles = {
        s1: [],
        s2: [],
        s3: [],
    }
    for (let i = 0; i < s1.messages.length; i++) {
        const fontSize =
            s1.messages[i].size === 'small'
                ? '14px'
                : s1.messages[i].size === 'medium'
                ? '20px'
                : '28px'
        const color = s1.messages[i].color === 'white' ? 'white' : 'black'
        const style = {
            fontSize,
            color,
            top: `${vHeight / 2}px`,
            opacity: 0,
        }
        newStyles.s1.push(style)
    }
    for (let i = 0; i < s2.messages.length; i++) {
        const fontSize =
            s2.messages[i].size === 'small'
                ? '14px'
                : s2.messages[i].size === 'medium'
                ? '20px'
                : '28px'
        const color = s2.messages[i].color === 'white' ? 'white' : 'black'
        const style = {
            fontSize,
            color,
            top: `${vHeight / 2}px`,
            opacity: 0,
        }
        newStyles.s2.push(style)
    }
    for (let i = 0; i < s3.messages.length; i++) {
        const fontSize =
            s3.messages[i].size === 'small'
                ? '14px'
                : s3.messages[i].size === 'medium'
                ? '20px'
                : '28px'
        const color = s3.messages[i].color === 'white' ? 'white' : 'black'
        const style = {
            fontSize,
            color,
            top: `${vHeight / 2}px`,
            opacity: 0,
        }
        newStyles.s3.push(style)
    }
    console.log(newStyles)
    setMessageStyles(newStyles)
}

const sceneData = {
    s1: {
        imgs: {
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
            intro: img3,
        },
        messages: [
            { context: 'message1', size: 'medium', color: 'white' },
            { context: 'message2', size: 'medium', color: 'white' },
            { context: 'message3', size: 'medium', color: 'white' },
            { context: 'message4', size: 'medium', color: 'white' },
        ],
    },
    s2: {
        imgs: {
            img5: img5,
            img6: img6,
        },
        messages: [
            { context: 'message5', size: 'medium', color: 'white' },
            { context: 'message6', size: 'medium', color: 'white' },
            { context: 'message7', size: 'medium', color: 'white' },
            { context: 'message8', size: 'medium', color: 'white' },
        ],
    },
    s3: {
        imgs: {
            img7: img7,
            img8: img8,
        },
        messages: [
            { context: 'message9', size: 'medium', color: 'white' },
            { context: 'message10', size: 'medium', color: 'white' },
        ],
    },
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
    const [isMessageInitial, setMessageInitial] = useState(false)
    const [messageStyles, setMessageStyles] = useState({
        s1: [
            defaultMessageStyle,
            defaultMessageStyle,
            defaultMessageStyle,
            defaultMessageStyle,
        ],
        s2: [
            defaultMessageStyle,
            defaultMessageStyle,
            defaultMessageStyle,
            defaultMessageStyle,
        ],
        s3: [defaultMessageStyle, defaultMessageStyle],
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
        messageStylesInitial(vWidth, vHeight, setMessageStyles, sceneData)

        imgSizing(vWidth, vHeight, imgs, sceneActive)

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
                messageStyles,
                setMessageStyles,
                vHeight,
                ctx2,
                ctx3,
                sceneActive,
                sceneData
            )
        }

        vContainer.addEventListener('scroll', handleViewScroll)

        return () => {
            vContainer.removeEventListener('scroll', handleViewScroll)
        }
    }, [
        vRef,
        size,
        cRef,
        s1Ref,
        s2Ref,
        isLoading,
        imgs,
        c2Ref,
        s3Ref,
        c3Ref,
        isMessageInitial,
    ])

    // Src Loading
    useEffect(() => {
        const { s1, s2, s3 } = sceneData
        // s1 img loading

        Object.keys(s1.imgs).forEach((k, index) => {
            if (k === 'intro') return
            const img = new Image()
            img.src = s1.imgs[k]
            img.onload = () => {
                setImgs((prev) => {
                    return {
                        ...prev,
                        [k]: {
                            name: k,
                            img,
                            path: s1.imgs[k],
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                        },
                    }
                })
            }
        })

        // s2 img loading
        Object.keys(s2.imgs).forEach((k, index) => {
            const img = new Image()
            img.src = s2.imgs[k]
            img.onload = () => {
                setImgs((prev) => {
                    return {
                        ...prev,
                        [k]: {
                            name: k,
                            img,
                            path: s2.imgs[k],
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                        },
                    }
                })
            }
        })

        // s3 img loading
        Object.keys(s3.imgs).forEach((k, index) => {
            const img = new Image()
            img.src = s3.imgs[k]
            img.onload = () => {
                setImgs((prev) => {
                    return {
                        ...prev,
                        [k]: {
                            name: k,
                            img,
                            path: s3.imgs[k],
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
            setIsLoading(true)
            window.removeEventListener('load', onWindowLoad)
        }
    }, [sceneData])

    return (
        <div ref={vRef} className={Styles.container}>
            <div ref={s1Ref} className={Styles.scene}>
                <div className={Styles.intro_img}>
                    <img src={sceneData.s1.imgs.intro} alt="introimage" />
                </div>
                <div className={Styles.sticky_box}>
                    <canvas
                        ref={cRef}
                        className={`${Styles.scenecanvas}`}
                    ></canvas>

                    {sceneData.s1.messages.map((message, index) => {
                        return (
                            <div
                                key={index}
                                className={Styles.scenemessage}
                                style={{ ...messageStyles.s1[index] }}
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
                        className={`${Styles.scenecanvas}`}
                    ></canvas>
                    {sceneData.s2.messages.map((message, index) => {
                        return (
                            <div
                                key={index}
                                className={Styles.scenemessage}
                                style={{ ...messageStyles.s2[index] }}
                            >
                                {message.context}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div ref={s3Ref} className={Styles.scene}>
                <div className={Styles.sticky_box}>
                    <canvas
                        ref={c3Ref}
                        className={`${Styles.scenecanvas}`}
                    ></canvas>
                    {sceneData.s3.messages.map((message, index) => {
                        return (
                            <div
                                key={index}
                                className={Styles.scenemessage}
                                style={{ ...messageStyles.s3[index] }}
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
