import s from "./profilePage.module.scss"
import { userData } from '../../utills/dummyData'
import ProfileItemsList from "../../components/profileItemsList/ProfileItemsList"
import MessagesAndText from "../../components/messagesAndText/MessagesAndText"

const ProfilePage = () => {

  
  return (
    <div className={s.profilePage}>

      <div className={s.leftSide}>

        <div className={s.wrapper}>

          <div className={s.sameConatiner}>
            <span>user information</span>

            <button>update profile</button>
          </div>

          <div className={s.userInfo}>

            <div className={s.userPic}>
              <span>profile pic :</span>
              <img src="https://www.bing.com/th/id/OIP.5naUK-L8A7RxxF7JB0NLuAHaE8?w=251&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
            </div>

            <div className={s.userName}>
              <span >Username :</span>
              <p className={s.userNameP} >{userData.name}</p>
            </div>

            <div className={s.userEmail}>
              <span>UserEmail :</span>
              <p>hanzalabawany0@gmail.com</p>
            </div>

          </div>

          <div className={s.sameConatiner}>
            <span>my list</span>

            <button>add new list</button>
          </div>

          <ProfileItemsList />

          <div className={s.sameConatiner}>
            <span>saved list</span>
          </div>

          <ProfileItemsList />

        </div>

      </div>

      <div className={s.rightSide}>

        <div className={s.wrapper}>
          <MessagesAndText />
        </div>

      </div>

    </div>
  )
}

export default ProfilePage