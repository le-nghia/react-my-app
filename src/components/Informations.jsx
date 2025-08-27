

// Component hiển thị thông tin Boss
function showInformation({ name, age,hobby, status, position }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Thông tin Boss 👑</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Status: {status}</p>
        <p>Position: {position}</p>
        <p>Hobby: {hobby}</p>
      
    </div>
  );
}


// Component hiển thị thông tin Boss
function BossInfo() {
    return (
        <div style={{ marginTop: "20px" }}>
      <h2>Thông tin Boss 👑</h2>
      <p>Tên: Lê Nghĩa</p>
      <p>Tuổi: 25+</p>
    </div>
  );
}


export default showInformation;