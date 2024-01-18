import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
import img4 from '../../imgs/img4.png'
import img5 from '../../imgs/img5.png'
import img6 from '../../imgs/img6.png'
import img7 from '../../imgs/img7.png'
import img8 from '../../imgs/img8.png'

const SampleData = [
    {
        type: 0,
        s1: {
            imgs: {
                intro: img1,
                img1: img2,

                // 경로
                img2: img2,
                img3: img3,
                img4: img4,
            },
            messages: [
                { content: 'message1', size: 'large', color: 'white' },
                { content: 'message2', size: 'medium', color: 'white' },
                { content: 'message3', size: 'medium', color: 'white' },
                { content: 'message4', size: 'medium', color: 'white' },
            ],
        },
        s2: {
            imgs: {
                img5: img5,
                img6: img6,
            },
            messages: [
                { content: 'message5', size: 'medium', color: 'white' },
                { content: 'message6', size: 'medium', color: 'white' },
                { content: 'message7', size: 'medium', color: 'white' },
                { content: 'message8', size: 'medium', color: 'white' },
            ],
        },
        s3: {
            imgs: {
                img7: img7,
                img8: img8,
            },
            messages: [
                { content: 'message9', size: 'medium', color: 'white' },
                { content: 'message10', size: 'medium', color: 'white' },
            ],
        },
    },
]

export default SampleData
