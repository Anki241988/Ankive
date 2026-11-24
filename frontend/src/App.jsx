
import Home from './pages/Home'
import RegisterBuisness from './pages/RegisterBuisness'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import MyRegistrations from './pages/MyRegistrations'
function App() {


  return (
     <div className="min-h-screen w-full">
   <Navbar />



 
   <Routes>

    <Route path='/RegisterBuisness' element={<RegisterBuisness />}></Route>

    <Route path='/' element={<Home />}></Route>

    <Route path='/Login' element={<Login />}></Route>

    <Route path="/MyRegistrations" element={<MyRegistrations />} />

   </Routes> 


   
  
  
    </div>
  )
}

export default App
