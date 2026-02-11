import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FetchCard from './components/FetchCards/Fetchcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <FetchCard />
      <Footer />
    </>
  )
}

export default App