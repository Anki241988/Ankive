import { useState } from 'react'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import FeatureBar from './components/FeatureBar'
import AudienceSection from './components/AudienceSection'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar />

<Hero />

<FeatureBar />

   <AudienceSection />
  
    </>
  )
}

export default App
