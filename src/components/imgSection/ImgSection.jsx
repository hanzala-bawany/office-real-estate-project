import s from './imgSection.module.scss'


const ImgSection = ({ singleItemImgData }) => {
    return (
        <div className={s.imgSection}>

            <div className={s.bigImg}>

                <img src={singleItemImgData[0]} alt="" />

            </div>
            
            <div className={s.smallImages}>

                {
                    singleItemImgData.slice(1).map((img, i) => (
                        <img className={s.smallImg} src={img} key={i} alt="img" />
                    ))
                }

            </div>

        </div>
    )
}

export default ImgSection