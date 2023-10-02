import React, { useState, useEffect } from 'react';
import styles from './NumberMemory.module.css';
import Router, { useRouter } from "next/router";


const NumberMemory = () => {
  const [level, setLevel] = useState(1);
  const [randomNumber, setRandomNumber] = useState('');
  const [userInput, setUserInput] = useState('');
  const [collectInput, setCollectInput] = useState('');
  const [showingNumber, setShowingNumber] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [maxLevels, setMaxLevels] = useState(0)

  

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * (10 ** level));
    setRandomNumber(randomNum.toString());
  };

  useEffect(() => {
    if (showingNumber) {
      setTimeout(() => {
        setShowingNumber(false);
        setUserInput('');
      }, 2500);
    }
  }, [showingNumber]);

  useEffect(() => {
    if (!showingNumber && collectInput === randomNumber && submitted) {
      setLevel((prevLevel) => prevLevel + 1);
      setMaxLevels((prevLevel) => prevLevel + 1);
      generateRandomNumber();
      setShowingNumber(true);
      setSubmitted(false);
    } 
    else if (!showingNumber && collectInput !== randomNumber && submitted){
      setShowingNumber(false);
      setGameOver(true);
      setGameStarted(true);
    }
  }, [collectInput, randomNumber, showingNumber]);

  useEffect(() => {
    generateRandomNumber();
  }, [level]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    setCollectInput(userInput);
    setSubmitted(true);
    e.preventDefault();
  };

  const handleStartGame = () => {
    setLevel(1);
    setMaxLevels(0);
    generateRandomNumber();
    setShowingNumber(true);
    setGameOver(false);
    setSubmitted(false);
    setGameStarted(true);
  };

  const router = useRouter();

  const {
    query: {reactionScore, reactionGrade},
  }  = router;

  function sendProps(){
    Router.push({
      pathname:"/benchmark/spider",
      query:{
        reactionScore,
        reactionGrade,
        maxLevels,
      },
    });
  }

  return (
    <div class="justify-center items-center">
      <div class="mt-10 mb-10">
        <h1 class="text-3xl md:text-6xl font-semibold">Number Memory Test</h1>
        <p class="text-xl md:text-2xl font-normal mt-2">มาวัดความจำกัน! จำเลขที่ปรากฏแล้วพิมพ์ลงในช่อง</p>
      </div>

      <div class="p-10 w-auto grid gap-4 xs:grid-cols-1 md:grid-cols-1 xs:p-10">
        <div class="justify-center items-center">
          <div class="flex justify-center content-center justify-items-center">
            <div class="bg-teal-400 rounded-3xl w-11/12 md:w-2/3 h-96">
                {gameStarted ? (
                <div class=" ">
                  <p class="bg-emerald-500 rounded-t-3xl text-4xl md:text-5xl font-semibold h-20 md:h-32 grid content-center" >Level : {level}</p>
                  {showingNumber ? (
                    <div class="flex justify-center content-center justify-items-center h-full">
                      <p class="flex justify-center content-center">
                        <p class="flex items-center font-bold text-4xl md:text-5xl mt-10">{randomNumber}</p>
                      </p>
                    </div>
                    
                  ) : (
                    <>
                      {gameOver ? (
                        <div>
                          <h2 class="bg-rose-500 text-4xl md:text-5xl font-bold h-20 md:h-32 grid content-center">GAME OVER</h2>
                          <h2 class="bg-rose-500 text-2xl md:text-3xl font-normal md:rounded-b-3xl h-20 md:h-32 grid content-center">Max levels : {maxLevels}</h2>
                          <div class="flex justify-center content-center justify-items-center h-full">
                            <button class="" onClick={sendProps}>
                              <div class="flex justify-center content-center bg-green-600 hover:bg-green-700 h-24 mt-4 rounded-lg  w-40 md:w-96">
                                <p class="flex  items-center text-3xl font-bold">See Result</p>
                              </div>
                            </button>
                          </div>
                        </div>
                        
                      ) : 
                        <>
                          <form onSubmit={handleInputSubmit}>
                            <div class="p-4 w-auto grid gap-4 xs:grid-cols-1 md:grid-cols-1 ">
                              <div class="">
                                <input
                                  type="text"
                                  value={userInput}
                                  onChange={handleInputChange}
                                  className={styles.input}
                                  autoFocus
                                />
                              </div>
                              <div class="">
                                <input
                                type="submit"
                                className={styles.submitButton}
                              />
                              </div>
                              
                            </div>
                          
                          </form>
                        </>
                      }
                    </>     
                  )}
                </div>
              ) : (
                <div class="flex justify-center content-center justify-items-center h-full">
                  <button class="" onClick={handleStartGame}>
                    <div class="flex justify-center content-center bg-green-600 h-1/4 rounded-lg  w-40 md:w-96">
                      <p class="flex  items-center text-3xl font-bold">เริ่มกันเลย!</p>
                    </div>
                  </button>
                </div>
                
              )}
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default NumberMemory;
