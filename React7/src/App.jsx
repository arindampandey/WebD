import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [name, setname] = useState("Harry")
  const [form, setform] = useState({ email: "", phone: "" })

  const handleclick = () => {
    alert("Hey I was clicked")
  }

  const mouseover = () => {
    alert("Hey I am a mouseover")
  }

  const handlechange = (e) => {
    // setname(e.target.value)
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click Me</button>
      </div>

      {/* <div className="red" onMouseOver={mouseover}>
        I am red color
      </div> */}

      <input type="text" name='email' value={form.email ? form.email : ""} onChange={handlechange} />
      <input type="text" name='phone' value={form.phone ? form.phone : ""} onChange={handlechange} />
    </>
  )
}

export default App
