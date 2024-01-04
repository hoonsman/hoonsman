import React from 'react'
import Styles from './create.module.css'
import MessageHandler from './MessageHandler'

export default function Create() {
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
                            <div className={Styles.message_bar}>
                                <div className={Styles.input_btn}>M1</div>
                                <div className={Styles.input_btn}>M2</div>
                                <div className={Styles.input_btn}>M3</div>
                            </div>
                        </div>

                        {/* Message Setting */}
                        <div className={Styles.message_setting}>
                            <div className={Styles.setting_title}>메시지 1</div>
                            <MessageHandler />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
