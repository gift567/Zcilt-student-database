import React from 'react'
import './Ins.css'
import {Link,Route} from 'react-router-dom'





function Institutions() {
  return (
    

<div className='section'>

<section>
      <div class="row">
        <h1>Our Institutions</h1>
      </div>
      <div class="row">
        {/* <!-- Column One --> */}
        <div class="column">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-user"></i>
            </div>
            <h3>Institute 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
              commodi.
            </p>
            <Link path to="/crudPage">
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
            <h3>Institute 2</h3>
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
            <h3>Institute 3</h3>
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

export default Institutions