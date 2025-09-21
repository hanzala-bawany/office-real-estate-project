import s from './signup.module.scss'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
// import { authContext } from '../../context/authContextApi';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { Input, Button, Flex } from 'antd';
import { IoLocationOutline } from 'react-icons/io5';
import base_url from '../../utills/url';




const Signup = () => {

  const [userInputs, setUserInputs] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const userInputsHandler = (e) => {
    setUserInputs({ ...userInputs, [e.target.id]: e.target.value })
  }

  console.log(userInputs, "user inputs");

  const signupBtnHandler = async (e) => {

    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      const res = await axios.post(`${base_url}/api/auth/signup`, userInputs)
      console.log(res, "signup user res in login.jsx");
      setLoading(false)
      navigate("/emailVerification", { state: { email: userInputs.email } })
      toast.info('Check Your Gmail');
    }
    catch (err) {
      setLoading(false)
      setError(true)
      toast.error(err?.response?.data?.message);
      console.log(err);
    }

  }


  return (

    <div className={s.loginPage}>

      <div className={s.container}>

        <h2 className={s.heading}>Sign Up</h2>

        <form onSubmit={signupBtnHandler} className={s.form}>

          <div  >
            <h4>Username</h4>
            <Input onChange={userInputsHandler} placeholder="Username" id="userName" suffix={<UserOutlined />} />
          </div>

          <div >
            <h4>Email</h4>
            <Input onChange={userInputsHandler} placeholder="Email" id="email" suffix={<UserOutlined />} />
          </div>

          <div>
            <h4>Password</h4>
            <Input.Password
              onChange={userInputsHandler}
              placeholder="Password"
              id="password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </div>

          {/* Forgot and Join */}
          <div className={s.linksRow}>
            <span href="#" className={s.link}>Already have an account? <Link className={s.joinNowBtnInForm} to="/signin">Sign in</Link></span>
          </div>

          <Button onClick={signupBtnHandler} htmlType='submit' type="primary" loading={loading} block> Sign up </Button>

          {
            error && <span style={{ color: "red" }}>Error Here</span>
          }

        </form>
      </div>
    </div>
  );
};

export default Signup;