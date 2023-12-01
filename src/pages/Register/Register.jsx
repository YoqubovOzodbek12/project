import React from "react";
import Google from '../../img/Google.svg'
import Facebook from '../../img/social-logos (1).svg'
import './Register.css'

const Register = () => {

    

    
    return (
        <div className="register-box">
            <form className="register" action="">
                <h3 className="register-title">Sign in</h3>

                <div className="register-top">
                    <img className="register-img" src={Google} alt="" />
                    <button className="register-google">Coutinue with Google</button>
                </div>

                <div className="register-bottom">
                    <img className="register-img" src={Facebook} alt="" />
                    <button className="register-facebook">Coutinue with Google</button>
                </div>

                <div className="register-line">
                    <span className="line-left"></span>
                    <p className="line-inner">OR</p>
                    <span className="line-rigth"></span>
                </div>

                <div className="register-inner">

                    <label className="register-label" for="html">
                        <p className="label-text"> Your name</p>
                        <input className="register-user" type="text" id="html" placeholder="Enter your username" />
                    </label>


                    <label className="register-label" for="html">
                        <p className="label-text">Your email</p>
                        <input className="register-email" type="email" id="html" placeholder="Enter your email" />
                    </label>

                    <label className="register-label" for="html">
                        <p className="label-text">Your usename</p>
                        <input className="register-user" type="text" id="html" placeholder="Enter your username" />
                    </label>

                    <label className="register-label" for="html">
                        <p className="label-text">Your password</p>
                        <input className="register-password" type="password" id="html" placeholder="Enter your password" />
                    </label>

                </div>
                <button className="register-btn">Submit</button>

                <p className="register-text">Already signed up? <span className="text-line">Go to sign up.</span></p>
            </form>
        </div>
    )
}

export default Register