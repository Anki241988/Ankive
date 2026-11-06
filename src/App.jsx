import { useState } from 'react'

import BusinessCarousel from './components/BuisnessCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-4xl font-bold text-purple-600">
  Welcome to Ankive
</h1>



   <BusinessCarousel />
    </>
  )
}

export default App
