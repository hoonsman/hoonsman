import Styles from './messagesetting.module.css'

const sizeList = {
  1: {
    text: '작게',
    option: 'small',
  },
  2: {
    text: '중간',
    option: 'middle',
  },
  3: {
    text: '크게',
    option: 'large',
  },
}

const colorList = {
  1: {
    text: 'white',
    option: 'white',
  },
  2: {
    text: 'black',
    option: 'black',
  },
}

const alignList = {
  1: {
    text: '왼쪽',
    option: 'left',
  },
  2: {
    text: '중간',
    option: 'middle',
  },
  3: {
    text: '오른쪽',
    option: 'right',
  },
}

export default function MessageSetting({
  size,
  color,
  align,
  content,
  sceneIndex,
  messageIndex,
  onEditBtnClick,
}) {
  console.log(size, color, align, content, messageIndex)
  const onOptionClick = (e) => {
    console.log(e.target)
    console.log(e.target?.dataset)
    if (!e.target?.dataset?.attr) return

    const attr = e.target?.dataset?.attr
    const val = e.target?.dataset?.val

    const newInfo = {
      size,
      color,
      align,
      content,
    }

    newInfo[attr] = val

    onEditBtnClick(sceneIndex, messageIndex, newInfo)
  }
  return (
    <div className={Styles.message_setting}>
      <div className={Styles.setting_container} onClick={onOptionClick}>
        <p>메세지{Number(messageIndex) + 1}</p>
        <p>글자크기</p>
        <div className={Styles.ctn}>
          {Object.keys(sizeList).map((key, index) => {
            return (
              <button
                key={index}
                className={`${Styles.editbtn} ${
                  sizeList[key].option === size ? Styles.choice_editbtn : null
                }`}
                data-val={sizeList[key].option}
                data-attr="size"
              >
                {`${sizeList[key].text}`}
              </button>
            )
          })}
        </div>
        <p>글자색</p>
        <div className={Styles.ctn}>
          {Object.keys(colorList).map((key, index) => {
            return (
              <button
                key={index}
                data-attr="color"
                data-val={colorList[key].option}
                className={`${Styles.editbtn} ${
                  colorList[key].option === color ? Styles.choice_editbtn : null
                }`}
              >
                {`${colorList[key].text}`}
              </button>
            )
          })}
        </div>
        <p>글자정렬</p>
        <div className={Styles.ctn}>
          {Object.keys(alignList).map((key, index) => {
            return (
              <button
                data-attr="align"
                data-val={alignList[key].option}
                key={index}
                className={`${Styles.editbtn} ${
                  alignList[key].option === align ? Styles.choice_editbtn : null
                }`}
              >
                {`${alignList[key].text}`}
              </button>
            )
          })}
        </div>
      </div>
      <div className={Styles.message_input_container}>
        <textarea
          defaultValue={content}
          placeholder="문구를 입력해주세요"
        ></textarea>
        <div className={Styles.ai_container}>
          <div className={Styles.ai_message_title}>이런 문구는 어때요?</div>
          <div className={Styles.ai_message_content}>어쩌구 저쩌구</div>
          <div className={Styles.ai_message_arrow}>
            <div>{'<'}</div>
            <div>1/10</div>
            <div>{'>'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
