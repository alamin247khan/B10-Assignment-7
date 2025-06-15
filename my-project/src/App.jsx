import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Players from './components/Players'

function App() {
  const [coin, setCoin] = useState(0);

  useEffect(() => {
    const storedCoin = localStorage.getItem('coin');
    if (storedCoin) {
      setCoin(Number(storedCoin));
    }
  }, []);

  return (
    <>
      <Navbar coin={coin} />
      <div className="mt-5 sm:mt-3">
        <Hero setCoin={setCoin} />
      </div>
      <Players />
    </>
  )
}

export default App
