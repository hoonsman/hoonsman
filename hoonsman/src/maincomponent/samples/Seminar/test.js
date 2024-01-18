import dummyData from './seminarData.js'

const mapDummyToSettingData = (dummyData) => {
  return dummyData.map((scene) => ({
    images: scene.imgs ? Object.values(scene.imgs) : [],
    message: scene.messages
      ? scene.messages.map((msg) => ({
          content: msg.text || '',
          size: msg.size || 'medium',
          color: msg.color || 'white',
        }))
      : [],
  }))
}

const mapSettingDataToDummy = (settingData) => {
  return settingData.map((scene) => ({
    imgs: scene.images.reduce((acc, img, index) => {
      acc[`image${index + 1}`] = img
      return acc
    }, {}),
    messages: scene.message.map((msg) => ({
      text: msg.content,
      size: msg.size,
      color: msg.color,
    })),
  }))
}

const settingData = mapDummyToSettingData(dummyData)
console.log('Setting Data:', settingData)

const transformedDummyData = mapSettingDataToDummy(settingData)
console.log('Transformed Dummy Data:', transformedDummyData)
