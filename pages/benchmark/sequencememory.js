import React, { useState, useEffect } from 'react';
import styles from './SequenceMemory.module.css';

const gameBoxArr = [
  [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }],
  [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
  [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }],
];

const SequenceMemory = () => {
  const [level, setLevel] = useState(1);
  const [randomBoxArr, setRandomBoxArr] = useState([]);
  const [playerSelect, setPlayerSelect] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [showingSequence, setShowingSequence] = useState(false);

  const randomizeBox = () => {
    const randomRow = Math.floor(Math.random() * 3);
    const randomCol = Math.floor(Math.random() * 3);
    setRandomBoxArr((prevRandomBoxArr) => [...prevRandomBoxArr, { row: randomRow, col: randomCol }]);
  };

  const displaySequence = async () => {
    setShowingSequence(true);
  
    for (let i = 0; i < randomBoxArr.length; i++) {
      const box = randomBoxArr[i];
      setPlayerSelect([box]);
  
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 300);
      });
    }
  
    setShowingSequence(false);
    setPlayerSelect([]);
  };
  


  const handleBoxClick = (box) => {
    if (showingSequence || gameOver) return;
    setPlayerSelect((prevPlayerSelect) => [...prevPlayerSelect, box]);
  };

  useEffect(() => {
    if (showingSequence) return;

    // Compare the player's selection with the randomly selected sequence
    for (let i = 0; i < playerSelect.length; i++) {
      if (
        playerSelect[i].row !== randomBoxArr[i].row ||
        playerSelect[i].col !== randomBoxArr[i].col
      ) {
        setGameOver(true);
        return;
      }
    }

    // Player's input matches the sequence
    if (playerSelect.length === randomBoxArr.length) {
      setLevel((prevLevel) => prevLevel + 1);
      setPlayerSelect([]);
      randomizeBox();
      setTimeout(() => displaySequence(), 300);
    }
  }, [playerSelect, randomBoxArr, showingSequence]);

  const handleStartGame = () => {
    setGameOver(false);
    setLevel(1);
    setPlayerSelect([]);
    setRandomBoxArr([]);
    randomizeBox();
    setTimeout(() => displaySequence(), 300);
  };

  return (
    <div className={styles.container}>
      <h1>Sequence Memory Game</h1>
      <h1>Level : {level}</h1>
      <div className={styles.gameBoard}>
        {gameBoxArr.map((row, rowIndex) =>
            row.map((box, colIndex) => {
            let boxColor = styles.blue;
                // Check if the box is in 'randomBoxArr' and whether we are showing the sequence
                if (randomBoxArr.some((b) => b.row === rowIndex && b.col === colIndex) && showingSequence) {
                    boxColor = styles.white;
                    // Use setTimeout to change the color back to blue after 1 second
                    setTimeout(() => {
                    boxColor = styles.blue;
                    // To re-render the component and update the color
                    }, 300);
            }

            return (
                <div
                key={`${rowIndex}-${colIndex}`}
                className={`${styles.box} ${boxColor}`}
                onClick={() => handleBoxClick(box)}
                ></div>
            );
            })
        )}
        </div>

      {gameOver ? (
        <div>
          <h2>Game Over!</h2>
          <button className={styles.startButton} onClick={handleStartGame}>
            Restart
          </button>
        </div>
      ) : (
        <button className={styles.startButton} onClick={handleStartGame}>
          Start
        </button>
      )}
    </div>
  );
};

export default SequenceMemory;
