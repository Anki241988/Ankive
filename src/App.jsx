import { supabase } from './lib/supabase'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import FeatureBar from './components/FeatureBar'
import AudienceSection from './components/AudienceSection'
import RegisterBuisness from './pages/RegisterBuisness'
import { Routes,Route } from 'react-router-dom'


function App() {


  return (
    <>
   <Navbar />





   <Routes>

    <Route path='/RegisterBuisness' element={<RegisterBuisness />}></Route>



   </Routes>

{/*       <Hero />

<FeatureBar />

   <AudienceSection /> */}
   
  
  
    </>
  )
}

export default App
