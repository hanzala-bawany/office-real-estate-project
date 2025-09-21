import { useLocation, useNavigate } from "react-router-dom"
import "./emailVerification.css"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import base_url from "../../utills/url.js"



const EmailVerification = () => {

    const navigate = useNavigate()
    const [userCode, setUserCode] = useState("")
    const [resetTrigger, setResetTrigger] = useState(0)

    const location = useLocation();
    const { email } = location.state
    console.log(email, "<--- email");



    const onInputChange = (e) => {
        setUserCode(e.target.value)
    }

    const verifyBtnHandler = async (e) => {

        e.preventDefault()
        if (userCode) {

            try {
                const verifiedUser = await axios.post(`${base_url}/api/auth/verifyEmail`, { userCode })
                toast.success("User Registered Successfully");
                console.log("user signUp successfully ", verifiedUser);
                navigate("/signin")
            }
            catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.message);
            }
        }
        else {
            toast.error("Enter Code First")
        }


    }

    // verification code delter after 3m
    useEffect(() => {
        const timer = setTimeout(() => {
            
            (async () => {
                try {
                    const res = await axios.post(`${base_url}/api/auth/verificationCodeDelete`, { email });
                    toast.info("Your Verification Code Expired");
                    console.log("user verification code deleted ", res);
                } catch (error) {
                    console.log("Error deleting verification code -->", error);
                    toast.error(error?.response?.data?.message)
                }
            })();
            
        }, 1000  * 60 * 3);

        return () => clearTimeout(timer);
    }, [resetTrigger]); // ✅  bhai yahan cleanup function ek to agar com[oent unmount ho ga to ye timer ko rok de ga or agar timeer chal raha he bilfarz 3m ka ke after 3m verification code dleete hone wala he to agar depenedeny array me mojood car change ho ta he to peghle cleanup chale ga or pura timer clear kar de ga then useEffect chale ga or new timer start kar de ga   <-- best functionality


    const resendHandler = async (e) => {

        e.preventDefault()
        try {
            const resendCodeUser = await axios.post(`${base_url}/api/auth/resendCode`, { email })
            toast.info("Check Your Gmail")
            console.log("user verification code resend successfully ", resendCodeUser);
            setUserCode("");
            setResetTrigger(prev => prev == 0 ? prev + 1 : prev - 1);
        }
        catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)
        }

    }



    return (
        <div className="verificationEmailContainer">
            <div className="verificationEmail">

                <div className="imgWrapper">
                    <img src="https://tse3.mm.bing.net/th/id/OIP.IXIniF3yuo-EL7wztSUQKgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                </div>

                <h1 className="mainHeading">Verify Your Email Address</h1>

                <div className="inputContainer">
                    <input
                        onChange={onInputChange}
                        type="text"
                        id="code"
                        placeholder="Enter Code"
                    />
                </div>

                <p className="codeSendLine">A verification code has been send to <span className="userEmail">{email || "abc@gmail.com"}</span> . Enter the code to continue and be redirected .</p>

                <div className="codeExpiryWarning">This code will not accepted after 3m</div>

                <div className="btnsContainer">
                    <button onClick={resendHandler} className="btn resendCodeBtn">Resend Code</button>
                    <button onClick={verifyBtnHandler} className="NextBtn btn">Verify</button>
                </div>

            </div>
        </div>
    )
}

export default EmailVerification