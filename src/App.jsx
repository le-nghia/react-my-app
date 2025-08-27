import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Welcome from './components/expProps'
import Informations from './components/Informations'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState("") // trạng thái tên
  const [age, setAge] = useState("") // trạng thái tuổi
  const [status, setStatus] = useState("") // trạng thái tình trạng
  const [position, setPosition] = useState("") // trạng thái vị trí
  const [hobby, setHobby] = useState("") // trạng thái sở thích
  
  const [result, setResult] = useState("") // trạng thái kết quả
  const [color, setColor] = useState("black") // trạng thái màu
  const [icon, setIcon] = useState("🤔")  // trạng thái icon
  const [isLoggedIn, setIsLoggedIn] = useState(false) // trạng thái đăng nhập
  const [show, setShow] = useState(false) // trạng thái hiển thị thông tin

  // const bossInfor = {
  //   name: "Lê Nghĩa",
  //   age: "25+",
  //   status: "Độc thân",
  //   position: "Front-end Developer",
  //   hobby: "Code React & uống cafe ☕"
  // }


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
    // alert(result)
  }

  // Toggle hiển thị thông tin
  const handleTogegle = () => {
    if(!show){
      if(!name || !age || !hobby || !status || !position) {
        alert("Vui lòng nhập đầy đủ thông tin của Boss 📝")
        return
      }
      setShow(true)
    }else{
      setShow(false)
      setName("")
      setAge("")
      setHobby("")
      setStatus("")
      setPosition("")
    }
  }

  return (
    <>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>

        <h2>
          {isLoggedIn ? "Xin chào Boss 👑" : "Mời Boss đăng nhập 🔑"}
        </h2>

        <br /><br />

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Nhập thông tin của Boss 📝</h1>

          <input
            type="text"
            placeholder="Tên..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />

          <input
            type="number"
            placeholder="Tuổi..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br /><br />

          <input
            type="text"
            placeholder="Sở thích..."
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
          <br /><br />

          <input
            type="text"
            placeholder="Tình trạng..."
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Vị trí..."
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <br /><br />

          <button onClick={handleTogegle}>
            {show ? "Ẩn thông tin ❌" : "Hiện thông tin ✅"}
          </button>

          {show && <Informations name={name} age={age} hobby={hobby} status={status} position={position}/>}

        </div>

        {/* <h1>Demo 2</h1> */}
        {/* <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button onClick={() => setShow(!show)}>
            {show ? "Ẩn thông tin ❌" : "Hiện thông tin ✅"}
          </button>

          {show && (
            <Informations
              name={bossInfor.name}
              age={bossInfor.age}
              status={bossInfor.status}
              position={bossInfor.position}
              hobby={bossInfor.hobby}
            />)
          }
        </div> */}

      </div>
      
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
    </>
  );

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
