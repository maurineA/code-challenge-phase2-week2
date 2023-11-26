
import BotCollection from './BotCollection';
import { useState, useEffect } from 'react';



function App() {
  
  const [data, setData] = useState([])

  function handleDelete(bot){
    alert("Deleted")
   
    fetch(`http://localhost:8001/bots/${bot.id}` , {
        method :"DELETE",
        headers : {
            "content-Type" : "application/json"
        }
    })
   setData(data)
 }

useEffect( () => {
  fetch(`https://bot-battlr-json.onrender.com/bots`)
    .then(r => r.json())
    .then(data => setData(data))


},[] )
if (!data) return <h1>Loading...</h1>

  return (
    <div className="App">
     <h1>My Bot Army</h1>
      <BotCollection handleDelete={handleDelete} onSetData={setData} data={data} />
     
    </div>
  );
}

export default App;