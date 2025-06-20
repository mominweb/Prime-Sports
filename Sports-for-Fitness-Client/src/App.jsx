
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './navBar'
import Footer from './components/Footer'

function App() {
  

  return (
    
    <div className=" w-11/12 mx-auto bg-green-100/25">
 <NavBar></NavBar>

<div>
<Outlet></Outlet>
</div>
  <Footer></Footer>

    </div>
    
  )
}

export default App
