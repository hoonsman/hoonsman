import React from 'react'
import Styles from './messagehandler.module.css'

export default function MessageHandler() {
    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 크기</div>
                    <div className={Styles.option_bar}>
                        <div className={Styles.opt}>작게</div>
                        <div className={Styles.opt}>중간</div>
                        <div className={Styles.opt}>크게</div>
                    </div>
                </div>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 색</div>
                    <div className={Styles.option_bar}>
                        <div className={Styles.opt}>White</div>
                        <div className={Styles.opt}>Black</div>
                    </div>
                </div>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 정렬</div>
                    <div className={Styles.option_bar}>
                        <div className={Styles.opt}>왼쪽</div>
                        <div className={Styles.opt}>가운데</div>
                        <div className={Styles.opt}>오른쪽</div>
                    </div>
                </div>
                <div className={Styles.submit_btn}>저장</div>
            </div>
            <div className={Styles.right}>
                <div className={Styles.input_container}>
                    <textarea
                        name="message"
                        id="message"
                        cols="20"
                        rows="6"
                        placeholder="입력해주세용"
                    ></textarea>
                    <div className={Styles.recommend_container}>
                        <div className={Styles.recommend_title}>
                            이런 문구는 어때영??
                        </div>
                        <div className={Styles.recommend_content}>
                            Lorem ipsum ..
                        </div>
                        <div className={Styles.recommend_switching_bar}>
                            <div className={Styles.bar_btn}>{'<'}</div>
                            <div className={Styles.recommend_count}>1 / 10</div>
                            <div className={Styles.bar_btn}>{'>'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
