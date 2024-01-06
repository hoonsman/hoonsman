import React, { useState } from 'react'
import Styles from './create.module.css'
import SettingPage from './SettingPage'

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
                    <div className={Styles.sizebar}>
                        <div
                            className={`${Styles.bar_container} ${Styles.bar_container_focus}`}
                        >
                            <div
                                className={`${Styles.bar_item} ${Styles.bar_now}`}
                            >
                                Iphone 13 pro max (428 x 926)
                            </div>
                            <div className={`${Styles.bar_items}`}>
                                <div className={`${Styles.bar_item}`}>
                                    Android small (360 x 640)
                                </div>
                                <div className={`${Styles.bar_item}`}>
                                    Android Large (360 x 800)
                                </div>
                                <div className={`${Styles.bar_item}`}>
                                    iPhone SE (320 x 568)
                                </div>
                            </div>
                        </div>
                    </div>
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
