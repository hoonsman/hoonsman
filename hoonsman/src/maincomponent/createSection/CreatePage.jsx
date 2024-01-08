import { useState, useEffect, useRef } from 'react'
import Styles from './createpage.module.css'
import Header from '../top/Header'
import MessageSetting from './MessageSetting'

/* 
iphone SE - 320 X 568
Android small - 360 X 640
Android Large - 360 X 800
iphone 13 pro max - 428 X 926
*/

const sizeItems = {
  1: {
    name: 'iphone SE',
    width: 320,
    height: 568,
  },
  2: {
    name: 'Android small',
    width: 360,
    height: 640,
  },
  3: {
    name: 'Android Large',
    width: 360,
    height: 800,
  },
  4: {
    name: 'iphone 13 pro max',
    width: 428,
    height: 926,
  },
}

const ListItem = ({ text, onSelectSize }) => {
  return (
    <div className={Styles.size_option} onClick={onSelectSize}>
      {text}
    </div>
  )
}

const SizeList = ({ sizes, onSelectSize }) => {
  return (
    <div className={Styles.list}>
      {sizes.map((i, ind) => (
        <ListItem text={i} key={ind} onSelectSize={onSelectSize} />
      ))}
    </div>
  )
}

const maxMessageLen = 5 // data dongari

export default function CreatePage() {
  const messages = [] // state
  for (let i = 0; i < maxMessageLen; i++) messages.push(i)
  const [isOpen, setIsOpen] = useState(false)
  const [selectitem, setSelectItem] = useState({ ...sizeItems[4] })
  const [viewSize, setViewSize] = useState([300, 700])
  const [sceneIndex, setSceneIndex] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [sceneInfo, setSceneInfo] = useState([
    {
      info: {
        video: '',
      },
      message: [
        {
          size: 'middle',
          color: 'white',
          align: 'middle',
          content: '',
        },
        {
          size: 'middle',
          color: 'white',
          align: 'middle',
          content: '',
        },
        {
          size: 'middle',
          color: 'white',
          align: 'middle',
          content: '',
        },
        {
          size: 'middle',
          color: 'white',
          align: 'middle',
          content: '',
        },
        {
          size: 'middle',
          color: 'white',
          align: 'middle',
          content: '',
        },
      ],
    },
    {
      info: {
        video: '',
      },
      message: [
        {
          size: 'middle',
          color: 'white',
          align: 'middle',
          content: '',
        },
        {
          size: 'middle',
          color: 'white',
          align: 'middle',
          content: '',
        },
        {
          size: 'middle',
          color: 'white',
          align: 'middle',
          content: '',
        },
        {
          size: 'middle',
          color: 'white',
          align: 'middle',
          content: '',
        },
        {
          size: 'middle',
          color: 'white',
          align: 'middle',
          content: '',
        },
      ],
    },
  ])

  const viewRef = useRef()

  useEffect(() => {
    if (!viewRef) return
    const viewWidth = viewRef && viewRef.current.offsetWidth
    const viewHeight = viewRef && viewRef.current.offsetHeight
    setViewSize([viewWidth, viewHeight])
    console.log(viewSize[0])
    console.log(viewSize[1])
  }, [viewRef])

  const viewRatio = selectitem.width / selectitem.height
  const displayHeight = viewSize[1] * 0.85
  const displayWidth = displayHeight * viewRatio

  const onSelectSize = (e) => {
    console.log(e)
    setSelectItem(
      Object.keys(sizeItems)
        .map((i) => {
          return sizeItems[i]
        })
        .filter((i) => i.name === e.target.textContent)[0],
    )
    setIsOpen((prev) => !prev)
  }

  const onEditBtnClick = (sceneIndex, messageIndex, info) => {
    setSceneInfo((prev) => {
      const newsceneInfo = { ...prev }
      newsceneInfo[sceneIndex].message[messageIndex] = { ...info }
      return newsceneInfo
    })
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>헤더</div>
      <div className={Styles.wrapper}>
        <div className={Styles.preview_container}>
          <div ref={viewRef} className={Styles.preview_content}>
            <div
              className={Styles.preview_window}
              style={{
                width: `${displayWidth}px`,
                height: `${displayHeight}px`,
              }}
            >
              화면
            </div>
          </div>
          <div className={Styles.preview_size}>
            {isOpen && (
              <SizeList
                sizes={Object.keys(sizeItems)
                  .map((key) => {
                    return sizeItems[`${key}`].name
                  })
                  .filter((i) => i !== selectitem.name)}
                onSelectSize={onSelectSize}
              />
            )}
            <div
              className={Styles.size_selector}
              onClick={() => {
                setIsOpen((prev) => !prev)
              }}
            >
              {selectitem.name}
            </div>
          </div>
        </div>
        <div className={Styles.editor_container}>
          <div className={Styles.editor_content}>
            <div className={Styles.editorscene}>
              <p>Scene 1</p>
            </div>
            <div className={Styles.contentbox}>
              <p>비디오</p>
              <div className={Styles.videobox}>
                <div className={`${Styles.addbtn} ${Styles.video}`}>+</div>
                <p>비디오명</p>
              </div>
            </div>
            <hr />
            <div className={Styles.contentbox}>
              <p>메시지 - 최대 5개</p>
              <div className={Styles.messagebox}>
                {messages.map((_, ind) => {
                  return (
                    <div
                      key={ind}
                      index={ind}
                      className={Styles.addbtn}
                      onClick={() => setMessageIndex(ind)}
                    >
                      M{ind + 1}
                    </div>
                  )
                })}
              </div>
            </div>
            <hr />
            <div></div>
            <MessageSetting
              sceneIndex={sceneIndex}
              messageIndex={`${messageIndex}`}
              {...sceneInfo[sceneIndex].message[messageIndex]}
              onEditBtnClick={onEditBtnClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
