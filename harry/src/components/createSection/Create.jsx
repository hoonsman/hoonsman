import React, { useState } from 'react'
import Styles from './create.module.css'
import SettingPage from './SettingPage'

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
                    <div className={Styles.display__box}>
                        <div className={Styles.display}>Sample</div>
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
