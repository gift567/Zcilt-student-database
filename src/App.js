
import './App.css';
import LogingSignup from './Components/LoginSignup/LogingSignup';
import {createBrowserRouter,Route,createRoutesFromElements, Link, Outlet, RouterProvider} from 'react-router-dom'

import Home from './Components/LoginSignup/Home';
import Select from './Components/LoginSignup/Select';
import Institutions from './Components/LoginSignup/Institutions';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>

            <Route index element={<Home/>} />
         
            <Route path="loginsignup"  element={<LogingSignup />} />
            <Route path="select"  element={<Select />} />
            <Route path="Institutions"  element={<Institutions />} />
            


        </Route>
    )
 )
  return (
    <div className="App">


     <RouterProvider router={router}/>

   

    
    </div>
  );
}


const Root = () => {
  return(
      <>
<div className='nav-bar'>
      <Link to="/">Home</Link>
     
     <Link to="/loginSignup">Admin</Link>
     
</div>
<div>
  <Outlet/>
</div>

      
      </>
  )
}

export default App;
