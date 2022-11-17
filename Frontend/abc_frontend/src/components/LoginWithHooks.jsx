import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import {authenticateUser, sendOTP} from "../services/user";
import { useAlert } from 'react-alert'
function LoginWithHooks() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpId, setOtpId] = useState('');
    function login() {
        console.log(userName)
        console.log(password)
        let object = {
            username: userName,
            password: password
        }
        authenticateUser(object).then((response) => {
            setPopoUpVisibleTrue();
            setOtpId(response.data)
            // console.log(response.data);
        }).catch((err) => {
            console.log("Error ",err.response.data)
            alert(err.response.data)
        })

    }

    function setPopoUpVisibleTrue() {
        setPopUpVisible(true);
    }

    function sentOTP() {
        sendOTP(otpId, otp).then((responce) => {
            setPopUpVisible(false);
            console.log(responce.data);
        }).catch((err) => {
            console.log("error ", err);
        })
    }
    const handleChange = (event) => {
        event.preventDefault();
        setOtp(event.target.value);
    }

    const OTPModel = () => (
        <Popup open={popUpVisible}
            position="center center">
            <div className='container model-radius mt-5'>
                <div className='row model-close-button'>
                    <i class="fa fa-times-circle"
                        onClick={
                            () => setPopUpVisible(false)
                        }
                        aria-hidden="true"></i>
                </div>
                <div className='card patient-card-popup'>
                    <div className='row m-2'>
                        <form className="Auth-form mb-3">
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Send OTP</h3>
                                <div className="form-group mt-3">
                                    <label>Add OTP Number Here</label>
                                    <input type="text" className="form-control mt-1" placeholder="Enter otp"
                                        value={otp}
                                        onChange={handleChange}/>
                                </div>
                                <div className="d-grid gap-2 mt-3 mb-4">
                                    <button type="button"
                                        onClick={
                                            () => sentOTP()
                                        }
                                        className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Popup>
    );

    return (
        <>
            <OTPModel/>
            <div className="Auth-form-container">
                {
                popUpVisible ? null : <form className="Auth-form mb-3">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input type="text" className="form-control mt-1" placeholder="Enter email"
                                onChange={
                                    (e) => setUserName(e.target.value)
                                }/>
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input type="password" className="form-control mt-1 mb-3" placeholder="Enter password"
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }/>
                        </div>
                        <div className="d-grid gap-2 mt-3 mb-4">
                            <button type="button"
                                onClick={
                                    () => login()
                                }
                                className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            } </div>
        </>
    );

}
export default LoginWithHooks;
