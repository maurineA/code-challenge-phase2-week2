// App.js
import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [yourBotArmy, setYourBotArmy] = useState([]);

  const enlistBot = (bot) => {
    // Enlist the bot into your army
    setYourBotArmy([...yourBotArmy, bot]);
  };

  const releaseBot = (bot) => {
    // Release the bot from your army
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    // Discharge the bot from your army (and also delete from the server)
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
