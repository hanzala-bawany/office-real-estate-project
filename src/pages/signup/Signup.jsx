import s from './signup.module.scss'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
// import { authContext } from '../../context/authContextApi';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { Input, Button, Flex } from 'antd';
import { IoLocationOutline } from 'react-icons/io5';




const Signup = () => {

  const [userInputs, setUserInputs] = useState({})
  const navigate = useNavigate()
  // const { dispatch, loading, error } = useContext(authContext)

  const userInputsHandler = (e) => {
    setUserInputs({ ...userInputs, [e.target.id]: e.target.value })
  }

  const signupBtnHandler = async (e) => {

    console.log("signup pem click hua", userInputs);
    e.preventDefault()
    // dispatch({ type: "login_start" })

    // loading && toast.info('Please wait...');

    // try {
    //   const res = await axios.post("http://localhost:8000/auth/login", { email, password } , {
    //     withCredentials: true
    //   })
    //   console.log(res,  "login user res in login.jsx");
    //   dispatch({ type: "login_success", payLoad: res?.data?.data?.loginUser?._doc })
    // navigate("/")
    toast.success('Signup Successful!');
    // }
    // catch (err) {
    //   dispatch({ type: "login_failure", payLoad: err?.message })
    //   toast.error(err?.message);
    //   console.log(err);
    // }
  }

  const error = false;
  const loading = false;


  return (

    <div className={s.loginPage}>

      <div className={s.container}>

        <h2 className={s.heading}>Sign Up</h2>

        <form onSubmit={signupBtnHandler} className={s.form}>

          <div>
            <h4>Username</h4>
            <Input onChange={userInputsHandler} placeholder="Username" id="username" suffix={<UserOutlined />} />
          </div>

          <div>
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

          <div>
            <h4>Address</h4>
            <Input onChange={userInputsHandler} id="address" placeholder="Address" suffix={<IoLocationOutline />} />
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