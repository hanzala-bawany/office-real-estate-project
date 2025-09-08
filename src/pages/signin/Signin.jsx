import styles from './signin.module.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
// import { authContext } from '../../context/authContextApi';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { Input, Button, Flex } from 'antd';




const Signin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const { dispatch, loading, error } = useContext(authContext)
  const navigate = useNavigate()

  const loginBtnHandler = async (e) => {

    console.log("login pem click hua",{email , password});
    e.preventDefault()
    // dispatch({ type: "login_start" })

    // loading && toast.info('Please wait...');

    // try {
    //   const res = await axios.post("http://localhost:8000/auth/login", { email, password } , {
    //     withCredentials: true
    //   })
    //   console.log(res,  "login user res in login.jsx");
    //   dispatch({ type: "login_success", payLoad: res?.data?.data?.loginUser?._doc })
      navigate("/")
      toast.success('Login Successful!');
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

    <div className={styles.loginPage}>

      <div className={styles.container}>

        <h2 className={styles.heading}>Welcome Back</h2>

        <form className={styles.form}>

          <Input onChange={(e) => setEmail(e.target.value)} placeholder="Email" suffix={<UserOutlined />} />

          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />

          {/* Forgot and Join */}
          <div className={styles.linksRow}>
            <Link to="/" className={styles.forgotPass}>Forgot Password?</Link>
            <span href="#" className={styles.link}>Don't have an account? <Link className={styles.joinNowBtnInForm} to="/signUp">Join now</Link></span>
          </div>


          <Button onKeyDown={(e) => {
            if (e.key === "Enter" && !loading && !error) {
              loginBtnHandler(e);
            }
          }} onClick={ loginBtnHandler } type="primary" loading={loading} block> Login </Button>

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
