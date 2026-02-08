import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import FetchCard from './components/FetchCards/FetchCard.jsx'

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