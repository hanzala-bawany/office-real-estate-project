import ImgSection from '../../components/imgSection/ImgSection'
import { singleItemData } from '../../utills/dummyData'
import { userData } from '../../utills/dummyData'
import { MdOutlineSave, MdMessage } from 'react-icons/md';
import { FaLocationDot, FaBath, FaDog } from 'react-icons/fa6';
import s from './SingleListPage.module.scss'
import { FaTools, FaBed, FaSchool, FaBusAlt } from 'react-icons/fa';
import { IoResizeSharp } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import { IoRestaurantSharp } from 'react-icons/io5';
import ReactLeafLetForSingleItem from '../../components/reactLeafLetForSingleItem/ReactLeafLetForSingleItem';
import { data } from "../../utills/dummyData.js";
import { useParams } from 'react-router-dom';



const SingleListPage = () => {

  const id = useParams().id
  console.log(id);

  const activeItemData = data.filter((item) => item.id == id)
  console.log(activeItemData, "active item data");



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
                  <FaLocationDot />
                  {singleItemData.address}
                </div>
                <div className={s.price}>
                  Rs. {singleItemData.price}
                </div>

              </div>

              <div className={s.userInfo}>

                <div className={s.userImgWrapper}>
                  <img src={userData.img} alt="" />
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

          <div className={s.generalConatiner}>

            <h3>General</h3>

            <div className={s.itemsWrapper}>

              <div className={s.item}>
                <FaTools />

                <div className={s.itemText}>
                  <p>utilities</p>
                  <span>renter is responsible</span>
                </div>
              </div>

              <div className={s.item}>
                <FaDog />

                <div className={s.itemText}>
                  <p>Pet policy</p>
                  <span>pet is allowed</span>
                </div>
              </div>

              <div className={s.item}>
                <AiFillHome />

                <div className={s.itemText}>
                  <p>property fees</p>
                  <span>must have 3x the rent in total house hold income</span>
                </div>
              </div>

            </div>

          </div>

          <div className={s.sizesConatiner}>

            <h3>Sizes</h3>

            <div className={s.sizesWrapper}>

              <div className={s.item}>
                <IoResizeSharp />

                <div className={s.text}>
                  80 sq ft
                </div>
              </div>

              <div className={s.item}>
                <FaBed />

                <div className={s.text}>
                  2 beds
                </div>
              </div>

              <div className={s.item}>
                <FaBath />

                <div className={s.text}>
                  1 bathroom
                </div>
              </div>

            </div>

          </div>

          <div className={s.nearByPlaceConatiner}>

            <h3>Near by Places</h3>

            <div className={`${s.itemsWrapper} ${s.nearByPlaceWrapper}`}>

              <div className={s.item}>
                <FaSchool />

                <div className={s.itemText}>
                  <p>School</p>
                  <span>250m  away</span>
                </div>
              </div>

              <div className={s.item}>
                <FaBusAlt />

                <div className={s.itemText}>
                  <p>Bus Stop</p>
                  <span>100m away</span>
                </div>
              </div>

              <div className={s.item}>
                <IoRestaurantSharp />

                <div className={s.itemText}>
                  <p>Restaurant</p>
                  <span>200m away</span>
                </div>
              </div>

            </div>

          </div>

          <div className={s.locationConatiner}>

            <h3>Location</h3>

            <div className={s.mapWrapper}>
              <ReactLeafLetForSingleItem activeItemData={activeItemData[0]} />
            </div>

          </div>

          <div className={s.btnsConatiner}>

            <div className={s.messageWrapper}>
              <MdMessage />
              <p>Send a Message</p>
            </div>

            <div className={s.saveWrapper}>
              <MdOutlineSave />
              <p>Save the Place</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default SingleListPage