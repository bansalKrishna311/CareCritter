import React from 'react'
import logo from '../img/CC LOGO.png';
import "./SignIn.css"
import { Link } from 'react-router-dom';

export default function Signip() {
  return (
    <div className="signIn">
      <div className="form-container">
        <div className="form">
        <img className="signInLogo"src={logo} alt="" />
        <p className="loginPara">
          Sign In to Join the <br />Incredible Comunity of Pet Lovers
        </p>
        <div>
          <input type="text" name="username" id="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <p className="LoginPara" style={{fontSize:"12px", margin:"3px 0px" }}>
          By signing in, you agree to our Terms, <br />
          privacy policy and cookies policy.
        </p>
        <input type="submit" id="submit-btn" value="Sign In" />
        </div>
        <div className="form2">
          Already Have an Account? 
          <Link to = "/signup">

          
          <span style={{
            color:"blue",cursor:"pointer" }}> Sign Up </span>
            </Link>
        </div>

      </div>  
    </div>
  )
}
