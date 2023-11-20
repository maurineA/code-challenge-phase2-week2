
import './App.css';
import { useEffect, useState } from 'react';




  function App() {

    const [robots, setRobots]=useState()
  
  useEffect(() =>{
    fetch('http://localhost:3000/bots')
    .then((res)=>res.json())
    .then(data =>{
      setRobots(data)
    })
  },[])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
