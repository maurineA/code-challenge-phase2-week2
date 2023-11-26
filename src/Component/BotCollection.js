// components/BotCollection.js
import React, { useState, useEffect } from 'react';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          
          <button onClick={() => onEnlist(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
