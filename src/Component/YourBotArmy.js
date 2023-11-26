import React from 'react'
import CardComponent from './CardComponent'

function YourBotArmy({clickBot,onSet,onHandleDelete}) {
  
  function handleDelete(data){
   
    let filterd=clickBot.filter(datas => data !==datas)
   
    onSet(filterd)

  }
  let mapedOver = clickBot.map(data =>  <CardComponent onHandleDelete={onHandleDelete}  key={data.id} onHandleClick={ () => handleDelete(data)}  bot={data} />)


  return (
    <div  className="card-wrapper">
    {clickBot =='' ? <p>No Bot added, click on the bot image to add into the army </p> : mapedOver } 
  
    
    </div>
  )
}

export default YourBotArmy