import React, {useState} from "react";
import Google from '../../img/Google.svg'
import Facebook from '../../img/social-logos (1).svg'
import './Register.css'
import {axiosClient} from "../../Api/axios";
import {redirect} from "react-router-dom";

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const submit = (e) => {
        e.preventDefault();
        setLoading(true);

        let data = JSON.stringify({
            "name": firstName,
            "email": email,
            "key": username,
            "secret": password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/signup',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axiosClient.request(config)
            .then((response) => {
                let data = response.data.data;

                if (response.data.isOk === true) {
                    localStorage.setItem("key", data.key);
                    localStorage.setItem("secret", data.secret);
                    window.location.href = "/";
                }
                setError(null);
            })
            .catch((error) => {
                setError(error.response.data.message);
            }).finally(() => {
            setLoading(false);
        });

    };


    return (
        <div className="register-box">
            <form className="register" method="post" onSubmit={submit}>
                <h3 className="register-title">Sign in</h3>

                <div className="register-top">
                    <img className="register-img" src={Google} alt=""/>
                    <button className="register-google">Coutinue with Google</button>
                </div>

                <div className="register-bottom">
                    <img className="register-img" src={Facebook} alt=""/>
                    <button className="register-facebook">Coutinue with Google</button>
                </div>

                <div className="register-line">
                    <span className="line-left"></span>
                    <p className="line-inner">OR</p>
                    <span className="line-rigth"></span>
                </div>

                <div className="register-inner">

                    {
                        error != null
                            ?
                            <div className={"p-5 bg-red-500 m-4 rounded-md"}>
                                <p className={"text-white"}>{error}</p>
                            </div>
                            :
                            null
                    }

                    <label className="register-label">
                        <p className="label-text"> Your name</p>
                        <input
                            required
                            value={firstName} onChange={(e) => {
                            setFirstName(e.target.value);
                        }} className="register-user" type="text" placeholder="Enter your firstname"/>
                    </label>


                    <label className="register-label">
                        <p className="label-text">Your email</p>
                        <input
                            required
                            value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }} className="register-email" type="email" placeholder="Enter your email"/>
                    </label>

                    <label className="register-label">
                        <p className="label-text">Your usename</p>
                        <input
                            required
                            value={username} onChange={(e) => {
                            setUsername(e.target.value);
                        }} className="register-user" type="text" placeholder="Enter your username"/>
                    </label>

                    <label className="register-label">
                        <p className="label-text">Your password</p>
                        <input value={password} onChange={(e) => {
                            setPassword(e.target.value);
                        }} className="register-password" type="password" placeholder="Enter your password"/>
                    </label>

                </div>
                {
                    isLoading
                        ?
                        <button className="register-btn" type="button">Loading...</button>
                        :
                        <button className="register-btn" type="submit">Submit</button>

                }

                <p className="register-text">Already signed up? <span className="text-line">Go to sign up.</span></p>
            </form>
        </div>
    )
}

export default Register