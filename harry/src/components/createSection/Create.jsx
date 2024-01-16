import React, { useState, useRef, useEffect } from 'react'
import Styles from './create.module.css'
import SettingPage from './SettingPage'
import Preview from './Preview'

import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
import img4 from '../../imgs/img4.png'
import img5 from '../../imgs/img5.png'
import img6 from '../../imgs/img6.png'
import img7 from '../../imgs/img7.png'
import img8 from '../../imgs/img8.png'

const letterData = {
    s1: {
        imgs: {
            img1: img1, // 경로
            img2: img2,
            img3: img3,
            img4: img4,
            intro: img3,
        },
        messages: [
            { context: 'message1', size: 'large', color: 'white' },
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

const sizeItemList = [
    {
        name: 'Iphone 13 pro max (428 x 926)',
        size: {
            width: 428,
            height: 926,
        },
        index: 0,
    },
    {
        name: 'Android small (360 x 640)',
        size: {
            width: 360,
            height: 640,
        },
        index: 1,
    },
    {
        name: 'Android Large (360 x 800)',
        size: {
            width: 360,
            height: 800,
        },
        index: 2,
    },
    {
        name: 'iPhone SE (320 x 568)',
        size: {
            width: 320,
            height: 568,
        },
        index: 3,
    },
]

const SizeBar = ({ sizeList, listIndex, setSizeListIndex }) => {
    const [isBar, setIsBar] = useState(false)

    const onBarClick = () => {
        setIsBar((v) => !v)
    }

    const onItemClick = (index) => {
        setSizeListIndex(index)
        setIsBar(false)
    }

    return (
        <div className={Styles.sizebar}>
            <div className={`${Styles.bar_container}`}>
                <div
                    onClick={onBarClick}
                    className={`${Styles.bar_item} ${Styles.bar_now} ${
                        isBar && Styles.bar_focus
                    }`}
                >
                    {sizeList[listIndex].name}
                </div>
                {isBar && (
                    <div className={`${Styles.bar_items}`}>
                        {sizeList
                            .filter((_, index) => index !== listIndex)
                            .map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => onItemClick(index)}
                                    className={`${Styles.bar_item}`}
                                >
                                    {item.name}
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default function Create() {
    const [sceneData, setSceneData] = useState([
        {
            src: {
                type: 'video',
                src: ['None'],
            },
            message: [
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
            ],
        },
        {
            src: {
                type: 'image',
                src: ['None', 'None', 'None', 'None', 'None'],
            },
            message: [
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
            ],
        },
        {
            src: {
                type: 'video',
                src: ['None'],
            },
            message: [
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
                {
                    content: '',
                    size: 'middle',
                    color: 'white',
                    sort: 'middle',
                },
            ],
        },
    ])
    const [sceneIndex, setSceneIndex] = useState(0)
    const [messageFocus, setMessageFocus] = useState(0)
    const [sizeListIndex, setSizeListIndex] = useState(0)
    const [previewSize, setPreviewSize] = useState({
        width: 0,
        height: 0,
    })

    const displayContainerRef = useRef()
    useEffect(() => {
        if (!displayContainerRef) return

        const displayHeight = displayContainerRef.current.offsetHeight

        const { width, height } = sizeItemList[sizeListIndex].size

        const whRatio = width / height

        const vHeight = (displayHeight * 8) / 10
        const vWidth = vHeight * whRatio

        setPreviewSize({
            width: vWidth,
            height: vHeight,
        })
    }, [displayContainerRef, sizeListIndex])
    const onLeftClick = () => {
        if (sceneIndex <= 0) return
        setSceneIndex((v) => v - 1)
        setMessageFocus(0)
    }

    const onRightClick = () => {
        if (sceneIndex >= sceneData.length - 1) return
        setSceneIndex((v) => v + 1)
        setMessageFocus(0)
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
                <div className={Styles.right_title}>Preview</div>

                <div className={Styles.display_container}>
                    <div
                        ref={displayContainerRef}
                        className={Styles.display__box}
                    >
                        <Preview size={previewSize} sceneData={letterData} />
                    </div>
                    <SizeBar
                        sizeList={sizeItemList}
                        listIndex={sizeListIndex}
                        setSizeListIndex={setSizeListIndex}
                    />
                </div>
            </div>
            <div className={Styles.right}>
                <div className={Styles.right_title}>Editor</div>
                <div className={Styles.scene_container}>
                    <div className={Styles.editor_header}>
                        <div
                            onClick={onLeftClick}
                            className={`${Styles.info_btn} ${
                                sceneIndex === 0 && Styles.btn_disabled
                            }`}
                        >
                            {'<'}
                        </div>

                        <div className={Styles.scene_name}>
                            Scene {sceneIndex + 1}
                        </div>

                        <div
                            onClick={onRightClick}
                            className={`${Styles.info_btn} ${
                                sceneIndex === sceneData.length - 1 &&
                                Styles.btn_disabled
                            }`}
                        >
                            {'>'}
                        </div>
                    </div>

                    <SettingPage
                        sceneData={sceneData[sceneIndex]}
                        setSceneData={setSceneData}
                        index={sceneIndex}
                        messageFocus={messageFocus}
                        setMessageFocus={setMessageFocus}
                    />
                </div>
            </div>
        </div>
    )
}
