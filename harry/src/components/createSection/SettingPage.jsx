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
    settingData,
    setSettingData,
    index,
    messageFocus,
    setMessageFocus,
    setLetterData,
}) {
    const changeControlInfo = (data) => {
        setSettingData((v) => {
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
                <div className={Styles.setting_title}>이미지</div>
                <div className={Styles.video_setting}>
                    {settingData.images.map((srcName, ind) => (
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
                    {settingData.message.map((v, ind) => (
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
                    setLetterData={setLetterData}
                    {...settingData.message[messageFocus]}
                />
            </div>
        </div>
    )
}
