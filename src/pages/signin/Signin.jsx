import styles from './signin.module.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
// import { authContext } from '../../context/authContextApi';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { Input, Button, Flex } from 'antd';
import base_url from '../../utills/url';
import axios from 'axios';




const Signin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // const { dispatch, loading, error } = useContext(authContext)
  const navigate = useNavigate()

  const loginBtnHandler = async (e) => {

    console.log("login pem click hua", { email, password });
    e.preventDefault()

    try {
      setError(false)
      setLoading(true)
      const res = await axios.post(`${base_url}/api/auth/login`, { email, password })
      setLoading(false)
      console.log(res, "login user res in login.jsx");
      navigate("/")
      toast.success('Login Successful!');
    }
    catch (err) {
      setError(true)
      setLoading(false)
      toast.error(err?.response?.data?.message);
      console.log(err , "login me error he ");
    }

  }


  return (

    <div className={styles.loginPage}>

      <div className={styles.container}>

        <h2 className={styles.heading}>Welcome Back</h2>

        <form onSubmit={loginBtnHandler} className={styles.form}>

          <div className={styles.inputConatiner} >
            <h4>Username</h4>
            <Input onChange={(e) => setEmail(e.target.value)} placeholder="Email" suffix={<UserOutlined />} />
          </div>

          <div className={styles.inputConatiner} >
            <h4>Password</h4>
            <Input.Password
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </div>

          {/* Forgot and Join */}
          <div className={styles.linksRow}>
            <Link to="/" className={styles.forgotPass}>Forgot Password?</Link>
            <span href="#" className={styles.link}>Don't have an account? <Link className={styles.joinNowBtnInForm} to="/signUp">Join now</Link></span>
          </div>


          <Button htmlType='submit' onClick={loginBtnHandler} type="primary" loading={loading} block> Login </Button>

          <Button block> Sign in with Google </Button>

          {
            error && <span style={{ color: "red" }}>Error Here</span>
          }

        </form>
      </div>
    </div>
  );
};

export default Signin;
