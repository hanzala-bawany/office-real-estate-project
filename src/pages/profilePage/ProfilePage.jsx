import s from "./profilePage.module.scss"
import { userData } from '../../utills/dummyData'
import ProfileItemsList from "../../components/profileItemsList/ProfileItemsList"
import MessagesAndText from "../../components/messagesAndText/MessagesAndText"
import { useSelector } from "react-redux";
import noAvatar from "../../assets/avatar.png"
import { useState } from "react";

const ProfilePage = () => {

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const loginUserData = useSelector((state) => state?.authReducer?.user);
  console.log(loginUserData, "login user data in profile page");


  return (
    <>
      <div className={s.profilePage}>

        <div className={s.leftSide}>

          <div className={s.wrapper}>

            <div className={s.sameConatiner}>
              <span>user information</span>

              <button onClick={() => setShowUpdateModal(true)} >update profile</button>
            </div>

            <div className={s.userInfo}>

              <div className={s.userPic}>
                <span>profile pic :</span>
                <img src={loginUserData?.avatar ? loginUserData?.avatar : noAvatar} alt="" />
              </div>

              <div className={s.userName}>
                <span >Username :</span>
                <p className={s.userNameP} >{loginUserData?.userName}</p>
              </div>

              <div className={s.userEmail}>
                <span>UserEmail :</span>
                <p>{loginUserData?.email}</p>
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
    </>
  )
}

export default ProfilePage