import React from 'react'
import logo from '../img/CC LOGO.png';
import "./SignUp.css"
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form">
        <img className="signUpLogo"src={logo} alt="" />
        <p className="loginPara">
          Sign Up to Join the <br />Incredible Comunity of Pet Lovers
        </p>
        <div>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div>
          <input type="text" name="Fullname" id="Fullname" placeholder="Fullname" />
        </div>
        <div>
          <input type="text" name="username" id="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <p className="LoginPara" style={{fontSize:"12px", margin:"3px 0px" }}>
          By signing up, you agree to our Terms, <br />
          privacy policy and cookies policy.
        </p>
        <input type="submit" id="submit-btn" value="Sign Up" />
        </div>
        <div className="form2">
          Already Have an Account? 
          <Link to = "/signin">

          
          <span style={{
            color:"blue",cursor:"pointer" }}> Sign in </span>
            </Link>
        </div>

      </div>
    </div>
  )
}
