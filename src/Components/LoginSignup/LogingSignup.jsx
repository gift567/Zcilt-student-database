
import './LoginSignup.css'
import { database } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import mail from '../Assests/mail.png'
import pass from '../Assests/pass.png'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'


export const LogingSignup = () => {

    const [Login,setLogin] = useState(false)

    const history = useNavigate()


    const handleSubmit =(e,type)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        if(type === 'Signup'){


        createUserWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData")
            history('/Select')
        
        }).catch(err=>{
            alert(err.code)
            setLogin(true)
        })
    }else{

        
        signInWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData")
            history('/Select')
        
        }).catch(err=>{
            alert(err.code)
        })
    }
    }

  return (
    

   
    <div className='container'>

        {/* <div className='row'>
            <div onClick={()=>setLogin(false)}>Sign Up</div>
            
            
        </div> */}
         <form onSubmit={(e)=>handleSubmit(e,Login?'Login':'Signup')}>
        <div className="header">

            <div className="heading">Zambia Chartered Institute of Transport and Logistics</div>
            <div className="heading"> Management Sytem</div>
            
            <div className="text">{Login?'Login':'SignUp'}</div>
            <div className="underline"></div>
            <div className="inputs">

            
           

             
                <div className="input">
                    <img src={mail} alt=''/>
                    <input name='email' type='email' placeholder='Enter Email Address'/>
                </div>


                <div className="input">
                    <img src={pass} alt=''/>
                    <input name='password' type='password' placeholder='Enter Password'/>
                </div>
            </div>

         
            <div className="forgot-password"  onClick={()=>setLogin(true)}>Already Have an Account? <span>Click Here</span></div>
            <div className="submit-container">
                
                    
                    <button className='submit'>{Login?'Login':'SignUp'}</button>
               
            </div>
        </div>

        </form>
    </div>

    
  )
}



export default LogingSignup