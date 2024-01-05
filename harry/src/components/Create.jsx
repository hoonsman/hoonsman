import React, { useState } from 'react'
import Styles from './create.module.css'
import MessageHandler from './MessageHandler'

const MessageBtn = ({ index, focus }) => {
    const isfocus = index === focus

    return (
        <div
            data-index={index}
            className={`${Styles.input_btn} ${isfocus && Styles.btn_focus}`}
        >
            M{index + 1}
        </div>
    )
}

export default function Create() {
    const [sceneIndex, setSceneIndex] = useState(0)
    const [messageFocus, setMessageFocus] = useState(0)
    const [controlData, setControlData] = useState([
        {
            src: {
                video: 'None',
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
    ])

    const onMessageBarClick = (e) => {
        if (!e.target.dataset?.index) return
        setMessageFocus(Number(e.target.dataset?.index))
    }

    const changeControlInfo = (data) => {
        setControlData((v) => {
            const newInfo = { ...v }
            newInfo[sceneIndex].message[messageFocus] = {
                ...newInfo[sceneIndex].message[messageFocus],
                ...data,
            }
            return newInfo
        })
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
                <div className={Styles.display_container}>
                    <div className={Styles.display__box}>
                        <div className={Styles.display}>1</div>
                    </div>
                    <div className={Styles.sizebar}></div>
                </div>
            </div>
            <div className={Styles.right}>
                <div className={Styles.right_title}>Editor</div>
                <div className={Styles.scene_container}>
                    <div className={Styles.scene_info}>
                        <div className={Styles.info_btn}>{'<'}</div>
                        <div className={Styles.scene_name}>Scene 1</div>
                        <div className={Styles.info_btn}> {'>'}</div>
                    </div>
                    <div className={Styles.setting_page}>
                        {/* Video Input */}
                        <div className={Styles.video_input}>
                            <div className={Styles.setting_title}>비디오</div>
                            <div className={Styles.video_setting}>
                                <div className={Styles.input_btn}>+</div>
                                <div className={Styles.video_title}>
                                    No video
                                </div>
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className={Styles.message_input}>
                            <div className={Styles.setting_title}>메시지</div>
                            <div
                                onClick={onMessageBarClick}
                                className={Styles.message_bar}
                            >
                                {controlData[0].message.map((v, ind) => (
                                    <MessageBtn
                                        index={ind}
                                        key={ind}
                                        focus={messageFocus}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Message Setting */}
                        <div className={Styles.message_setting}>
                            <div className={Styles.setting_title}>메시지 1</div>
                            <MessageHandler
                                changeControlInfo={changeControlInfo}
                                {...controlData[sceneIndex].message[
                                    messageFocus
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
