import ImgSection from '../../components/imgSection/ImgSection'
import { singleItemData } from '../../utills/dummyData'
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
              </div>

              <div className={s.userInfo}>
              </div>          

            </div>

            <div className={s.bottomInfo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi recusandae fuga nisi, distinctio soluta! Quos esse possimus excepturi praesentium cum optio mollitia quisquam deleniti quis est! Consequuntur nisi corrupti eaque illum.
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