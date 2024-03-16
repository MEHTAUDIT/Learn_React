import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/navbar'

const getrandom = () =>{
  return Math.floor(Math.random()*10);
}
const s="Hello";
const isloggedin=true;

function App() {
  return (
    <div>
      <Navbar  isloggedin={isloggedin}/>
      <h1>hiii</h1>
    </div>
  )
}

export default App
