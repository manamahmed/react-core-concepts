import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends = ['Bakkas', 'Akkas', 'Makkas', 'Jhakkas', 'Takkas', 'Lakkas']
  const nayoks = ['Rajjak', 'Jashim', 'Alamgir', 'Shakib', 'Bappi', 'Shuvo']
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'Adobe Reader', price: '$20.99'}
  ]
  
  const productNames = products.map(product => product.name)
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react Person!!</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product =><Products product={product}></Products>)
        }
        
        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products>
        <Person name="Rubel" nayika="Moushumi"></Person>
        <Person name="Jashim" nayika="Bobita"></Person>
        <Person name="Manna" nayika="Purnima"></Person>
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>increase</button>
    </div>
  )
  
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []) 

  return(
    <div>
      <h3>Dynamic Users</h3>
      <ul>
        {
          users.map(user => <li>{user.name}<br></br>{user.email}</li>)
        }
        
      </ul>
    </div>
  )
  
}

function Products(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return(
  <div style={productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy Now</button>
  </div>
  ) 
}

function Person(props) {
  const personStyle={
    border: '2px solid red', 
    margin: '10px'
  }
  return (
  <div style={personStyle}>
     <h1>Nayok: {props.name}</h1>
     <h3>Hero of {props.nayika}</h3>
  </div>
  )
}

export default App;
