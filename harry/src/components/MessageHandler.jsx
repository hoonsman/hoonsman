import React from 'react'
import Styles from './messagehandler.module.css'

export default function MessageHandler({
    content,
    size,
    color,
    sort,
    changeControlInfo,
}) {
    const onOptClick = (e) => {
        console.log(e.target.dataset)
        if (!e.target.dataset?.val) return
        changeControlInfo({
            [`${e.target.dataset.attr}`]: e.target.dataset.val,
        })
    }

    const onContentChange = (e) => {
        console.log(e.currentTarget.value)
        changeControlInfo({
            content: e.currentTarget.value,
        })
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.left} onClick={onOptClick}>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 크기</div>
                    <div className={Styles.option_bar}>
                        <div
                            data-val={'small'}
                            data-attr="size"
                            className={` ${
                                size === 'small' && Styles.opt_focus
                            } ${Styles.opt}`}
                        >
                            작게
                        </div>
                        <div
                            data-val={'middle'}
                            data-attr="size"
                            className={` ${
                                size === 'middle' && Styles.opt_focus
                            } ${Styles.opt}`}
                        >
                            중간
                        </div>
                        <div
                            data-val={'large'}
                            data-attr="size"
                            className={` ${
                                size === 'large' && Styles.opt_focus
                            } ${Styles.opt}`}
                        >
                            크게
                        </div>
                    </div>
                </div>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 색</div>
                    <div className={Styles.option_bar}>
                        <div
                            data-attr="color"
                            data-val="white"
                            className={`${
                                color === 'white' && Styles.opt_focus
                            } ${Styles.opt}`}
                        >
                            White
                        </div>
                        <div
                            data-attr="color"
                            data-val="black"
                            className={`${
                                color === 'black' && Styles.opt_focus
                            } ${Styles.opt}`}
                        >
                            Black
                        </div>
                    </div>
                </div>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 정렬</div>
                    <div className={Styles.option_bar}>
                        <div
                            data-attr="sort"
                            data-val="left"
                            className={`${
                                sort === 'left' && Styles.opt_focus
                            } ${Styles.opt}`}
                        >
                            왼쪽
                        </div>
                        <div
                            data-attr="sort"
                            data-val="middle"
                            className={`${
                                sort === 'middle' && Styles.opt_focus
                            } ${Styles.opt}`}
                        >
                            가운데
                        </div>
                        <div
                            data-attr="sort"
                            data-val="right"
                            className={`${
                                sort === 'right' && Styles.opt_focus
                            } ${Styles.opt}`}
                        >
                            오른쪽
                        </div>
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
                        value={content}
                        onChange={onContentChange}
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
