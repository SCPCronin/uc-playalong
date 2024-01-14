// Player.tsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface PlayerProps {
  name: string;
  score: number;
  updateScore: (points: number) => void;
  updateName: (name: string) => void;
}

const Player: React.FC<PlayerProps> = ({ name, score, updateScore, updateName }) => {
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState(name);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(event.target.value);
  };

  const handleNameSubmit = () => {
    updateName(tempName);
    setEditingName(false);
  };

  return (
    <div className="player-container" style={{ marginBottom: '2.5%', padding: '10px', borderRadius: '8px' }}>
      {editingName ? (
        <>
          <TextField
            type="text"
            value={tempName}
            onChange={handleNameChange}
            onBlur={handleNameSubmit}
            autoFocus
            variant="outlined"
            InputProps={{
              style: { background: 'white' }, // Set the background color of the input field
            }}
          />
        </>
      ) : (
        <span className="player-name" onClick={() => setEditingName(true)} style={{ fontSize: '1.2rem', marginRight: '5%' }}>
          {name}
        </span>
      )}

      <Button
        variant="outlined"
        size="small"
        style={{ backgroundColor: 'white' }}
        onClick={() => updateScore(+5)}
      >
        +5
      </Button>
      <Button
        variant="outlined"
        size="small"
        style={{ backgroundColor: 'white' }}
        onClick={() => updateScore(+10)}
      >
        +10
      </Button>
    </div>
  );
};

export default Player;
