import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Movies from './Components/Movies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Watchlist from './Components/Watchlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

    <NavBar/>
    <Routes >
      <Route path="/" element = {
        <>
         <Banner />
         <Movies />
        </>

      }>

      </Route>

      <Route path="/watchlist" element = {
        
       <Watchlist />
        

      }>

      </Route>
   
    </Routes>
     

     
    
    </>
  )
}

export default App
