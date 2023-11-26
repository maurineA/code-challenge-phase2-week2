import React  , {useState} from 'react'
import YourBotArmy from './YourBotArmy'
import CardComponent from './CardComponent'


function BotCollection({data,handleDelete}) {

const [clickBot, setClickBot]= useState([])

function handleClick(bot){

  setClickBot(datas => {
   if(!datas.find(news => news.id ===bot.id)){
     return [...clickBot,bot]
   } 
   return clickBot
  })
  
   
}

  return (
    <div   id='main-card' >
        <YourBotArmy onSet={setClickBot} onHandleDelete={handleClick}   clickBot={clickBot} />
        <h2>List of Bots</h2>
        <div className="card-wrapper">
        {data.map( bot => {
         return (
           <CardComponent onHandleDelete={handleDelete} key={bot.id} bot={bot} onHandleClick={handleClick}/>

        )})}
      </div>
    </div>


                  
           
            )}
  


export default BotCollection