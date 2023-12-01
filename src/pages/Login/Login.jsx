import React, { useRef } from "react";
import Google from "../../img/Google.svg"
import Facebook from "../../img/social-logos (1).svg"
import './Login.css'

const Login = () => {
    const name = useRef()
    const email = useRef()
    const password = useRef()

    const handleClick =() => {
        
        if(name.current.value && email.current.value && password.current.value == '') {

            console.log(name.current.value,email.current.value,password.current.value)    
        }
    }

    return (
        <div className="login-box">
            <form className="login" action="">
                <h3 className="login-title">Sign in</h3>

                <div className="login-top">
                    <img className="login-img" src={Google} alt="" />
                    <button className="login-google">Coutinue with Google</button>
                </div>

                <div className="login-bottom">
                    <img className="login-img" src={Facebook} alt="" />
                    <button className="login-facebook">Coutinue with Google</button>
                </div>

                <div className="login-line">
                    <span className="line-left"></span>
                    <p className="line-inner">OR</p>
                    <span className="line-rigth"></span>
                </div>

                <div className="login-inner">

                    <label className="login-label" for="name">
                        <p className="label-text"> Your name</p>
                        <input className="login-user" type="text" id="name" ref={name} placeholder="Enter your username" />
                    </label>


                    <label className="login-label" >
                        <p className="label-text">Your email</p>
                        <input className="login-email" type="email" ref={email} placeholder="Enter your email" />
                    </label>

                    <label className="login-label" >
                        <p className="label-text">Your username</p>
                        <input className="login-user" type="password" ref={password} placeholder="Enter your password" />
                    </label>

                </div>
                <button className="login-btn" onClick={handleClick}>Submit</button>

                <p className="login-text">Already signed up? <span className="text-line">Go to sign up.</span></p>
            </form>
        </div>
        )
}

export default Login