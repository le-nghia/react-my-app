import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Welcome from './components/expProps'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [age, setAge] = useState("")
  const [result, setResult] = useState("")
  const [color, setColor] = useState("black")
  const [icon, setIcon] = useState("🤔")

  function handleCheck() {
    if (age >= 18 && age <= 40) {
      setResult("🎉 Boss đã đủ tuổi lấy vợ rồi 😍")
      setColor("green")
      setIcon("🥳")
    } else if (age > 40) {
      setResult("😂 Boss ơi, hơi muộn đó nha!")
      setColor("red")
      setIcon("😆")
    } else {
      setResult("😅 Boss còn nhỏ, ráng học ReactJS đã!")
      setColor("orange")
      setIcon("😜")
    }
    alert(result)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input 
        type="text"
        value={age} 
        placeholder="Nhập tuổi của Boss..." 
        onChange={(e) => setAge(e.target.value)} 
      />
      <button onClick={handleCheck} style={{ marginLeft: "10px" }}>
        Check ✅
      </button>
      <h2>Tuổi của Boss là: {age}</h2>
      <p style={{ color: color, fontWeight: "bold" }}>{result} {icon}</p>
    </div>
  )

  return (
    <>
      <div>
        <Header />
        <Content />
        <Footer />
        
      </div>
      
      {/* <div className="container" style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to ReactJs</h1>
        <p>Tôi là Lê Nghĩa</p>
      </div> */}
    </>
  )
}

export default App
