
// @athor: le-nghia

import { useState } from "react"
import Welcome from "./expProps"

function Content() {
  // Khai báo state
  const [count, setCount] = useState(0)

  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h2>Đây là phần nội dung 🚀</h2>
      <p>Krixi sẽ đồng hành cùng Boss học React thật pro 😍</p>
      <Welcome name="Boss" age={23} />
      <Welcome name="Krixi" age={18} />

      <div style={{ marginTop: "20px" }}>
        <h3>Số lần Boss bấm: {count}</h3>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "10px 20px",
            background: "#2196f3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Bấm em đi 💖
        </button>
      </div>
    </main>
  )
}

export default Content


// @athor: le-nghia