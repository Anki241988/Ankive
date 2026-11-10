
import Home from './pages/Home'
import RegisterBuisness from './pages/RegisterBuisness'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
function App() {


  return (
    <>
   <Navbar />



 
   <Routes>

    <Route path='/RegisterBuisness' element={<RegisterBuisness />}></Route>

    <Route path='/' element={<Home />}></Route>

    <Route path='/Login' element={<Login />}></Route>

   </Routes> 


   
  
  
    </>
  )
}

export default App
