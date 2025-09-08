import style from "./navbar.module.scss"
import logo from "../../assets/logo.png"
import { Link, NavLink } from "react-router-dom"
import { AiOutlineMenu } from 'react-icons/ai';
import { AiTwotoneCloseCircle } from 'react-icons/ai';
import { useState } from "react";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  // const user = true
  const user = false

  return (
    <div className={style.navbar}>
      <div className={style.leftNav}>

        <NavLink
          className={style.logoParent} to="/">
          <img src={logo} alt="logo" />
          <span >Bawany Estate</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.link}` : style.link
          } to="/">Home</NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.link}` : style.link
          } to="/about">About</NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.link}` : style.link
          } to="/contact">Contact</NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.link}` : style.link
          } to="/agents">Agents</NavLink>

      </div>
      <div className={style.rightNav}>

        {
          user ?
            <div className={style.profileConatiner}>
              
              <img src="https://avatars.githubusercontent.com/u/175537336?v=4" alt="" />

              <span className={style.name}>Hanzla bawany</span>

              <Link to="/profile">
                <span className={style.profile}>
                  Profile
                  <div className={style.notification}>3</div>
                </span>
              </Link>

            </div>
            :
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active} ${style.signin}` : style.signin
                } to="/signin">
                Sign in
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active} ${style.signup}` : style.signup
                } to="/signup">
                Sign up
              </NavLink>
            </>
        }

        <AiOutlineMenu className={style.menuIcon} onClick={() => setOpenMenu(true)} />

        <div className={`${style.menuBar}  ${openMenu && style.open}`}>

          <AiTwotoneCloseCircle className={style.closeIcon} onClick={() => setOpenMenu(false)} />

          <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/agents">Agents</NavLink>
            <NavLink to="/signin">Sign in</NavLink>
            <NavLink to="/contact">Sign up</NavLink>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar