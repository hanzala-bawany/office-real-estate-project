import s from './listItem.module.scss'
import { FaLocationDot, FaBath, FaBed } from 'react-icons/fa6';
import { AiFillMessage, AiFillBell } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const ListItem = ({ itemData , showModal }) => {
  console.log(itemData, "list item data");

  return (
    <div className={s.listItem}>

      <div className={s.imgConatiner}>
        <Link to={`/listPage/${itemData.id}`} >
          <img src={itemData?.img} alt="" className="img" />
        </Link>
      </div>

      <div className={s.contentConatiner}>

        <h3 className={s.titleText}>
          <Link to={`/listPage/${itemData.id}`} >
            {itemData.title}
          </Link>
        </h3>

        <div onClick={showModal} className={s.location}>
          <FaLocationDot />
          <span className={s.locationText}> {itemData.address} </span>
        </div>

        <div className={s.price}>
          RS. {itemData.price}
        </div>

        <div className={s.featuredContainer}>

          <div className={s.bedbathConatiner}>
            <div className={s.bedroom}>
              <span className={s.icon}>  <FaBed /> </span>
              <span className={s.text}> {itemData.bedroom} bedroom </span>
            </div>

            <div className={s.bathroom}>
              <span className={s.icon}>  <FaBath /> </span>
              <span className={s.text}> {itemData.bathroom} bathroom </span>
            </div>
          </div>

          <div className={s.icons}>
            <div className={s.followIcon}>
              <AiFillMessage />
            </div>
            <div className={s.messageIcon}>
              <AiFillBell />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ListItem