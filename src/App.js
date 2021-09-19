import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand="Being Human" price="3 crore"></MyComponent>
      <MyComponent brand="Google" price="10000"></MyComponent>
      <MyComponent brand="Microsoft" price="10001"></MyComponent>
    </div>
  );
}

function LoadUsers () {
  const [users,setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h1>Users Loaded:{users.length} </h1>
    {
      // users.map (user => <h5>{user.name}</h5>) name show korebe . 
      users.map (user => <User name={user.name} phone= {user.phone} website={user.website}></User>)
    }
    </div>
  )
}
function User(props) {
  return (
    <div className="user">
      <h2>Name: {props.name}</h2>
      <p>Call me baby!!{props.phone}</p>
      <h5>Website {props.website}</h5>
    </div>
  )
}




function MyComponent(props) {
  const [points, setPoints] = useState(1);
  // console.log(props)
  const myStyle = {
    backgroundColor : 'lightgreen',
    border : '5px solid tomato',
    margin: '15px',
    padding: '15px',
    borderRadius:'10px'
  }
  const handlePoints = () => {
    const newPonits = points * 2;
    setPoints(newPonits);
    // console.log('clicked');
  }
  return (
    <div style= {myStyle}>
      <h1>Yo Yo mama! {props.brand}!!!</h1>
      <h4>Money, {props.price} I have points:{points} </h4>
      <button style={{backgroundColor:'salmon', margin:'10px', padding: '10px',borderRadius: '7px'}} onClick= {handlePoints}>Add points </button>
      <p style={{color: 'magenta', fontWeight:'bold',}}>I can write HTML in JS </p>
    </div>
  )
}

export default App;
