import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Players from './components/Players'
import Newsletter from './components/Newsletter'

function App() {
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

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
      <div className="mt-5 sm:mt-3">
        <Players coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
      </div>
      <div className="mt-5 sm:mt-3">
        <Newsletter />
      </div>
      
    </>
  )
}

export default App
