import { signOut } from 'firebase/auth'
import React from 'react'
import { database } from '../FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import './Ins.css'
import zicta from '../../Assests/ZICTA.jpg'
import {Link,Route} from 'react-router-dom'

function Select() {


const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
console.log(val,"val")
            history('/')

        })
    }
  return (




    <div>
        
      
        <div class="sign-out-btn">
        <button onClick={handleClick}>Sign Out</button>
        </div>



    <section>
      <div class="row">
        <h1>Select Sytem of your choice</h1>
      </div>
      <div class="row">
        {/* <!-- Column One --> */}
        <div class="column">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-user"></i>
            </div>
            <h3>Student Management Sytem</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
              commodi.
            </p>

            <Link path to="/Institutions">
            <button>Enter</button>
            </Link>
          </div>
        </div>
        {/* <!-- Column Two --> */}
        <div class="column">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3>CPC Management Sytem</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
              commodi.
            </p>

            <Link path to="#">
            <button>Enter</button>
            </Link>
          </div>
        </div>
        {/* <!-- Column Three --> */}
        <div class="column">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-headset"></i>
            </div>
            <h3>Membership Management Sytem</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
              commodi.
            </p>
            <Link path to="#">
            <button>Enter</button>
            </Link>
          </div>
        </div>
      </div>



      
    </section>



   </div>








    
  )
}

export default Select