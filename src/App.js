import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home.js';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
    </Routes>
    </>
  )
}

export default App

//***FETCHING BACKEND DATA EXAMPLE***
/*const [backendData, setBackendData] = useState([{}])
//Using use effect to fetch the backend data from server.js and use it in front end...
useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
}, [])

return (
  <div>
    {(typeof backendData.users === 'undefined') ? (
      <p>Loading...</p>
    ) : (
      backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))
    )}
  </div>
)*/