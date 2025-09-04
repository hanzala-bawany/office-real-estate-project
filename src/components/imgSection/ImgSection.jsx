import { useState } from 'react';
import s from './imgSection.module.scss'
import { FaArrowRight, FaArrowLeft, FaRegWindowClose } from 'react-icons/fa';
import { Carousel } from 'antd';


const ImgSection = ({ singleItemImgData }) => {

    const contentStyle = {
        margin: 0,
        // height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const [acticeImg, setActiceImg] = useState(null)
    const imagesIndexLegth = singleItemImgData.length - 1

    const arrowHandler = (arrowDirection) => {

        if (arrowDirection == "left") {
            setActiceImg(acticeImg == 0 ? imagesIndexLegth : acticeImg - 1)
        }
        else if (arrowDirection == "right") {
            setActiceImg(acticeImg == imagesIndexLegth ? 0 : acticeImg + 1)
        }
    }

    return (
        <div className={s.imgSection}>

            {
                acticeImg !== null &&
                <div className={s.slider}>

                    <div className={s.close} onClick={() => setActiceImg(null)}>
                        <FaRegWindowClose />
                    </div>

                    <div className={`${s.leftArrow} ${s.arrow}`} onClick={() => arrowHandler("left")}>
                        <FaArrowLeft />
                    </div>

                    <div className={s.imgConatiner}>
                        <img src={singleItemImgData[acticeImg]} alt="" />
                    </div>

                    <div className={`${s.rightArrow} ${s.arrow}`} onClick={() => arrowHandler("right")}>
                        <FaArrowRight />
                    </div>

                </div>
            }

            <div className={s.bigImg} >
                <img src={singleItemImgData[0]} onClick={() => setActiceImg(0)} alt="" />
            </div>

            <div className={s.smallImages}>
                {
                    singleItemImgData.slice(1).map((img, i) => (
                        <img className={s.smallImg} src={img} key={i} alt="img" onClick={() => setActiceImg(i + 1)} />
                    ))
                }
            </div>

        </div >
    )
}

export default ImgSection