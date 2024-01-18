const seminarData = {
  scenes: [
    {
      id: 's1',
      images: ['img/intro.png'],
      messages: [
        {
          text: '세미나에 대한 소개',
          size: 'large',
          color: 'white',
        },
      ],
    },
    {
      id: 's2',
      images: {
        image1: 'img/desc1.png',
        image2: 'img/desc1.png',
        image3: 'img/desc1.png',
      },
      messages: [
        {
          text: '키워드 1',
          size: 'large',
          color: 'white',
        },
        {
          text: '세미나에 대한 설명 1',
          size: 'small',
          color: 'white',
        },
      ],
    },
    {
      id: 's3',
      images: {
        image1: 'img/desc2.png',
        image2: 'img/desc2.png',
        image3: 'img/desc2.png',
      },
      messages: [
        {
          text: '키워드 2',
          size: 'large',
          color: 'white',
        },
        {
          text: '세미나에 대한 설명 2',
          size: 'small',
          color: 'white',
        },
      ],
    },
    {
      id: 's4',
      images: ['img/location.png'],
      messages: [
        {
          text: '세미나 위치',
          size: 'large',
          color: 'white',
        },
        {
          text: '시간과 날짜',
          size: 'medium',
          color: 'white',
        },
      ],
    },
    {
      id: 's5',
      images: ['img/conclusion.png'],
      messages: [
        {
          text: '맺음말',
          size: 'large',
          color: 'white',
        },
      ],
    },
  ],
}
export default seminarData
