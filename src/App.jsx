import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import ResidentInfo from './Components/ResidentInfo'

function App() {
  
  const [ location, setLocation ] = useState({})
  const [ typeId, setTypeId ] = useState("")

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then(res => setLocation(res.data))
  }, [])

  const searchLocation = () => {
      axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then(res => setLocation(res.data))
  }

  console.log(location)

  return (
    <div className="App">
      <nav className='principal'>
        <div className='img-principal'>
           <img src="../src/assets/image 3.svg" alt="main image Rick and Morty" />
        </div>
        <div className='title'>
          <img src="../src/assets/image 2.svg" alt="title Rick and Morty" />
        </div>
      </nav>
      <div className='content-info_location'>
      <ul className='info-location'>
        <li className='li-name'><b>Location:</b><br /><br /> <span>{location.name}</span></li>
        <li className='li-type'><b>Type:</b><br /><br /> <span>{location.type}</span></li>
        <li className='li-dimension'><b>Dimension:</b><br /><br /> <span>{location.dimension}</span></li>
        <li className='li-population'><b>Population:</b><br /><br /> <span>{location.residents?.length}</span></li>
      </ul>
      </div>
      <div className='search'>
      <input 
      type="text" 
      value={typeId}
      onChange={e => setTypeId(e.target.value)}
      />
      <button onClick={searchLocation}>Search</button>
      </div>
      {location.residents?.map(resident => (
        <ResidentInfo
        url = {resident}
        key = {resident}
        />
      ))}
    </div>
  )
}

export default App
