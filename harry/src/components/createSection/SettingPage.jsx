import React from 'react'
import Styles from './settingpage.module.css'
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

const SrcInputBtn = ({ index, srcName }) => {
    return (
        <div className={Styles.input_btn}>
            +<div className={Styles.video_title}>{srcName}</div>
        </div>
    )
}

export default function SettingPage({
    sceneData,
    setSceneData,
    index,
    messageFocus,
    setMessageFocus,
}) {
    const changeControlInfo = (data) => {
        setSceneData((v) => {
            const newInfo = { ...v }
            newInfo[index].message[messageFocus] = {
                ...newInfo[index].message[messageFocus],
                ...data,
            }
            return newInfo
        })
    }
    const onMessageBarClick = (e) => {
        if (!e.target.dataset?.index) return
        setMessageFocus(Number(e.target.dataset?.index))
    }
    return (
        <div className={Styles.setting_page}>
            {/* Video Input */}
            <div className={Styles.video_input}>
                <div className={Styles.setting_title}>
                    {sceneData.src.type === 'video' ? '비디오' : '이미지'}
                </div>
                <div className={Styles.video_setting}>
                    {sceneData.src.src.map((srcName, ind) => (
                        <SrcInputBtn
                            key={ind}
                            index={index}
                            srcName={srcName}
                        />
                    ))}
                </div>
            </div>

            {/* Message Input */}
            <div className={Styles.message_input}>
                <div className={Styles.setting_title}>메시지</div>
                <div onClick={onMessageBarClick} className={Styles.message_bar}>
                    {sceneData.message.map((v, ind) => (
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
                <div className={Styles.setting_title}>
                    메시지 {messageFocus + 1}
                </div>
                <MessageHandler
                    changeControlInfo={changeControlInfo}
                    {...sceneData.message[messageFocus]}
                />
            </div>
        </div>
    )
}
