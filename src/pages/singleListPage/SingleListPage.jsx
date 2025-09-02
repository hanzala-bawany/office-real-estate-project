import ImgSection from '../../components/imgSection/ImgSection'
import { singleItemData } from '../../utills/dummyData'
import { userData } from '../../utills/dummyData'
import s from './SingleListPage.module.scss'


const SingleListPage = () => {


  return (
    <div className={s.singleListPage}>



      <div className={s.leftSide}>
        <div className={s.wrapper}>

          <ImgSection singleItemImgData={singleItemData.images} />

          <div className={s.infoSection}>

            <div className={s.topInfo}>

              <div className={s.itemInfo}>

                <h2>
                  {singleItemData.title}
                </h2>
                <div className={s.singleItemLocation}>
                  Rs. {singleItemData.location}
                </div>
                <div className={s.price}>
                  {singleItemData.price}
                </div>

              </div>

              <div className={s.userInfo}>

                <div className={s.userImgWrapper}>
                  <img width={200} src={userData.img} alt="" />                  
                </div>

                <p>{userData.name}</p>

              </div>          

            </div>

            <div className={s.bottomInfo}>
              {singleItemData.description}
            </div>

          </div>

        </div>
      </div>

      <div className={s.rightSide}>
        <div className={s.wrapper}>

          rightSide

        </div>
      </div>

    </div>
  )
}

export default SingleListPage