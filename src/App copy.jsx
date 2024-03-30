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
  return data;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Hello from React!</p>
        <GetDataFromJSONPlaceholder />
      </div>
    </>
  )
}

export default App
