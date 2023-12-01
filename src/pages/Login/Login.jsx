import React, {useRef, useState} from "react";
import Google from "../../img/Google.svg"
import Facebook from "../../img/social-logos (1).svg"
import './Login.css'
import {axiosClient} from "../../Api/axios";
import md5 from "md5";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const submit = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch("https://0001.uz/myself", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "uz,en;q=0.9,ru;q=0.8",
                "key": username,
                "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": "\"Android\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "sign": md5(`GET/myself${password}`)
            },
            "referrer": "https://fboxs.netlify.app/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        }).then(r => {
            console.log(r)
        });

    };


    return (
        <div className="login-box">
            <form className="login" action="" onSubmit={submit}>
                <h3 className="login-title">Sign in</h3>

                <div className="login-top">
                    <img className="login-img" src={Google} alt=""/>
                    <button className="login-google">Coutinue with Google</button>
                </div>

                <div className="login-bottom">
                    <img className="login-img" src={Facebook} alt=""/>
                    <button className="login-facebook">Coutinue with Google</button>
                </div>

                <div className="login-line">
                    <span className="line-left"></span>
                    <p className="line-inner">OR</p>
                    <span className="line-rigth"></span>
                </div>

                <div className="login-inner">

                    {
                        error != null
                            ?
                            <div className={"p-5 bg-red-500 m-4 rounded-md"}>
                                <p className={"text-white"}>{error}</p>
                            </div>
                            :
                            null
                    }


                    <label className="login-label">
                        <p className="label-text">Your username</p>
                        <input value={username} onChange={(e) => {
                            setUsername(e.target.value);
                        }} className="login-email" type="text" placeholder="Enter your email"/>
                    </label>

                    <label className="login-label">
                        <p className="label-text">Your username</p>
                        <input value={username} onChange={(e) => {
                            setUsername(e.target.value);
                        }} className="login-user" type="password" placeholder="Enter your password"/>
                    </label>

                </div>
                {
                    isLoading
                        ?
                        <button className="register-btn" type="button">Loading...</button>
                        :
                        <button className="register-btn" type="submit">Submit</button>

                }
                <p className="login-text">Already signed up? <span className="text-line">Go to sign up.</span></p>
            </form>
        </div>
    )
}

export default Login