

// Demo props

// function Welcome(props) {
//   return <h1>Xin chào, {props.name} 👋</h1>;
// }

// Ngắn ngọn hơn với destructuring
function Welcome({ name, age }) {
    return <h1>Name: {name}, Tuổi: {age} 👋</h1>;
}

export default Welcome;