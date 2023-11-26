// components/YourBotArmy.js
import React from 'react';

const YourBotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          {/* Display other bot information */}
          <button onClick={() => onRelease(bot)}>Release</button>
          <button onClick={() => onDischarge(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
