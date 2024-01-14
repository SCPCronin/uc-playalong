// App.tsx
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import Button from '@mui/material/Button';

function App() {
  const [players, setPlayers] = useState<Array<{ name: string; score: number }>>([
    { name: 'Player 1', score: 0 },
  ]);

  const [totalScore, setTotalScore] = useState<number>(0);

  useEffect(() => {
    // Calculate the sum of all players' scores
    const sum = players.reduce((acc, player) => acc + player.score, 0);
    setTotalScore(sum);
  }, [players]); // Watch for changes in the players array

  const addPlayer = () => {
    const newPlayerName = `Player ${players.length + 1}`;
    setPlayers([...players, { name: newPlayerName, score: 0 }]);
  };

  const updatePlayerScore = (index: number, points: number) => {
    const updatedPlayers = [...players];
    updatedPlayers[index].score += points;
    setPlayers(updatedPlayers);
  };

  const updatePlayerName = (index: number, newName: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index].name = newName;
    setPlayers(updatedPlayers);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> University Challenge Play Along! </h1>
        <h2> Overall Score: {totalScore}</h2>
        
        {/* Add space between individual player scores and player components */}
        <div className="space-between-scores" style={{marginBottom: "10%"}}></div>

        {/* Display individual player scores */}
        <div className="individual-scores">
          {players.map((player, index) => (
            <div key={index} className="player-score">
              {player.name}: {player.score}
            </div>
          ))}
        </div>

        <div className="space-between-scores" style={{marginBottom: "10%"}}></div>

        <div className="players-container" style={{width: "100%"}}>
          {players.map((player, index) => (
            <Player
              key={index}
              name={player.name}
              score={player.score}
              updateScore={(points: number) => updatePlayerScore(index, points)}
              updateName={(newName: string) => updatePlayerName(index, newName)}
            />
          ))}
        </div>

        <div className="space-between-scores" style={{marginBottom: "10%"}}></div>

        <Button variant="contained" size="large" onClick={addPlayer}>
          Add Player
        </Button>
      </header>
    </div>
  );
}

export default App;
