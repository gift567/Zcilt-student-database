import React, { useState } from 'react'
import './LoginSignup.css'

import mail from '../Assests/mail.png'
import pass from '../Assests/pass.png'
import person from '../Assests/person.png'

export const LogingSignup = () => {

    const[action,setAction]= useState("Sign Up"); 
  return (
    <div className='container'>
        <div className="header">

            <div className="heading">Zambia Chartered Institute of Transport and Logistics</div>
            <div className="heading">Student Management Sytem</div>
            
            <div className="text">{action}</div>
            <div className="underline"></div>
            <div className="inputs">

                {/* adding the operator that hide */}
                {action==="Login"?<div></div>:   <div className="input">
                    <img src={person} alt=''/>
                    <input type='text' placeholder='Enter Full Names'/>
                </div>
}
             
                <div className="input">
                    <img src={mail} alt=''/>
                    <input type='email' placeholder='Enter Email Address'/>
                </div>


                <div className="input">
                    <img src={pass} alt=''/>
                    <input type='password' placeholder='Enter Password'/>
                </div>
            </div>

            {action==="Sign Up"? <div></div>:<div className="forgot-password">Forgot Password? <span>Click Here</span></div>}

            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    </div>
  )
}

export default LogingSignup