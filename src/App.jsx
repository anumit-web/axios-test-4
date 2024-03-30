import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function GetDataFromJSONPlaceholder() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsersData = () => {
      
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          console.log(response.data);
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };

    getUsersData();    

  }, []);
  
  

  // return "Test data";
  return (
    <div>
      {data.map(item => (  <p key={item.id}>{item.name}, {item.username}, {item.email}, {item.address.street} </p>    ))}
    </div>  
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Hello from React!</h2>
        <GetDataFromJSONPlaceholder />
      </div>
    </>
  )
}

export default App
