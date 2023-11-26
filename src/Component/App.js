// App.js
import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  const [yourBotArmy, setYourBotArmy] = useState([]);

  const enlistBot = (bot) => {
    // Enlist the bot 
    setYourBotArmy([...yourBotArmy, bot]);
  };

  const releaseBot = (bot) => {
    // Release the bot 
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    // Discharge the bot 
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id)))
      .catch((error) => console.error('Error discharging bot:', error));
  };

  return (
    <div>
      <BotCollection onEnlist={enlistBot} />
      <YourBotArmy
        army={yourBotArmy}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />
    </div>
  );
}

export default App;
