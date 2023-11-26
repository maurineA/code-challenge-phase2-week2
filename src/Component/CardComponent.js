import React from 'react'

function CardComponent({bot,onHandleClick,onHandleDelete}) {

    

    
  return (
  
    <div>
        <div  onClick={ () => onHandleClick(bot)}   className="click-card">
       <div className="image-wrapper">
     
          <img src={bot.avatar_url} alt='bot' />
     
         </div>
           <div className="text-box-wrapper">
              <div className="text-box">
                <h3 className="heading"> {bot.name}  </h3>
                <p className="bot"> Health : {bot.health}  </p>
                <p className="bot"> Damage : {bot.damage}  </p> 
                <p className="bot"> Class : {bot.bot_class} </p>   
                <p className="bot">  Catch Phrase : {bot.catchphrase} </p>
                <p className="bot">   Update : {bot.updated_at}  </p> 
                
             </div>
           </div>
           <button onClick={ () =>  onHandleDelete(bot)}>X</button>
           </div>
          
        </div>
        
       
       
  )
}

export default CardComponent