// pages/index.js
import { useState } from 'react';
import styles from './ReactionTime.module.css';
import Router from "next/router";


const ReactionTime = () => {
  const [displayText, setDisplayText] = useState('Click to start!');
  const [scoreElements, setScoreElements] = useState(['-', '-', '-', '-']);
  const [scoreHistory, setScoreHistory] = useState([]);
  const [msSinceEpochOnTimeout, setMsSinceEpochOnTimeout] = useState(0);
  const [waitingForClick, setWaitingForClick] = useState(false);
  const [earlyClick, setEarlyClick] = useState(false);

  const [scoreArr, setScoreArr] = useState([]); // New array to store scores
  const [scoreAvg, setScoreAvg] = useState(0); // New variable to store average score

  // for router
  const [reactionScore, setReactionScore] = useState(0);

  const scoreboardLimit = 10;

  const [leaderboard, setLeaderboard] = useState([]); // Leaderboard array

  //check for player play all 4 round?
  const [playAllRounds, setPlayAllRounds] = useState(false);

  const MINIMUM_MS_TILL_CHANGE = 2000;
  const MAXIMUM_MS_TILL_CHANGE = 6000;

  const [reactionGrade, setReactionGrade] = useState(0);

  const play = () => {
      // const button = document.getElementById('btn');
      // button.addEventListener('click', function handleClick() {
      //   setButtonClicked(true);
      // });

      const msTillChange =
        Math.floor(
          Math.random() * (MAXIMUM_MS_TILL_CHANGE - MINIMUM_MS_TILL_CHANGE)
        ) + MINIMUM_MS_TILL_CHANGE;

        // Revert the colour back to red
        setDisplayText('Wait for the box turn to green');
        setWaitingForClick(false);
        setEarlyClick(true);
        setPlayAllRounds(false);

        setTimeout(() => {
          setMsSinceEpochOnTimeout(Date.now());
          setDisplayText('Click!');
          setWaitingForClick(true);
          setEarlyClick(false);
        }, msTillChange);
  };
  
  const addScore = (score) => {
    const updatedScoreHistory = [score, ...scoreHistory];
    setScoreHistory(updatedScoreHistory);

    // Update the scoreArr with the new score
    setScoreArr((prevScoreArr) => [...prevScoreArr, score]);

    const limitedScores = updatedScoreHistory.slice(0, 4);
    const scoreElements = limitedScores.map((score, index) => (
      <div key={index} className={styles.score}>
        {score} ms
      </div>
    ));
    setScoreElements(scoreElements);

    // Calculate the average score only when player has completed 4 rounds
    if (scoreArr.length === 3) {
      const sumScores = scoreArr.reduce((sum, score) => sum + score, 0);
      const avgScore = sumScores / scoreArr.length;

      if (avgScore <= 200 && avgScore != 0) {
        setReactionGrade(10);
      } else if (avgScore >= 201 && avgScore <= 250) {
        setReactionGrade(9);
      }  else if (avgScore >= 251 && avgScore <= 300) {
        setReactionGrade(8);
      }  else if (avgScore >= 301 && avgScore <= 350) {
        setReactionGrade(7);
      }  else if (avgScore >= 351 && avgScore <= 370) {
        setReactionGrade(6);
      }  else if (avgScore >= 371 && avgScore <= 380) {
        setReactionGrade(5);
      }   else if (avgScore >= 381 && avgScore <= 400) {
        setReactionGrade(4);
      }   else if (avgScore >= 401 && avgScore <= 420) {
        setReactionGrade(3);
      }   else if (avgScore >= 421 && avgScore <= 450) {
        setReactionGrade(2);
      }   else {
        setReactionGrade(1);
      }
  

      setScoreAvg(avgScore);
      setReactionScore(avgScore);
      setScoreArr([]); // Reset scoreArr to collect new scores for the next player
      setPlayAllRounds(true);

      addToLeaderboard(avgScore)
    }
  };

  const addToLeaderboard = (scoreAvg) => {

    setLeaderboard((prevLeaderboard) => {
      const updatedLeaderboard = [...prevLeaderboard, scoreAvg].slice(0, scoreboardLimit);
      return updatedLeaderboard.sort((a, b) => a - b);
    });

  };

  const handleButtonClick = () => {
    
    if (waitingForClick && !earlyClick) {
      const score = Date.now() - msSinceEpochOnTimeout;
      setWaitingForClick(false);
      setDisplayText(`Your time was ${score} ms! Click to play again.`);
      addScore(score);
    }else if (!waitingForClick && earlyClick){
      setWaitingForClick(false);
      setDisplayText(`Too soon!`);
    }else {
      play();
    }
  };

  function sendProps(){
    Router.push({
      pathname:"/benchmark/numbermemory",
      query:{
        reactionScore,
        reactionGrade,
      },
    });
  }

  return (
    <div >
      <div class="mt-10 mb-10">
        <h1 class="text-3xl md:text-6xl font-semibold ">Reaction Time Test</h1>
        <p class="text-xl md:text-2xl font-normal mt-2">เล่น 4 รอบ รอให้กล่องเป็นสีเขียว วัดความไวของคุณ!</p>
      </div>

      <div>
        {/* Display the Game box on the screen */}
        <div class="flex justify-center items-center font-bold">
          <div className={styles.app}>
            {/* Add "waiting" class to clickArea when waitingForClick is true */}
            <div
              id = "btn"
              className={`${styles.clickArea} ${waitingForClick&&!earlyClick ? styles.waiting : ''} 
              ${!waitingForClick && earlyClick ? styles.early : ''}`}
              onClick={handleButtonClick}
            >
              <div class="grid grid-rows-2 ">
                  <div class="text-3xl md:text-5xl p-6 w-full text-center">{displayText}</div>
                  <div class="">
                    {playAllRounds ? (
                      <div class="flex justify-center content-center justify-items-center h-full">
                        <button class="">
                          <div class="flex justify-center content-center bg-green-600 hover:bg-green-700 h-20 rounded-lg  w-40 md:w-96">
                            <p class="flex  items-center text-based md:text-3xl font-bold" onClick={sendProps}>เข้าสู่บทพิสูจน์ถัดไป!</p>
                          </div>
                        </button>
                      </div>) 
                    : ''}
                  </div>
                      
              </div>
              
              
            </div>
            
          </div>
        </div>

        {/* Display the average score on the screen */}
        
          <div class="flex justify-center w-auto h-96 " >
            <div class="p-10 md:w-4/5 w-11/12 grid gap-4 xs:grid-cols-1 md:grid-cols-2 xs:p-10 ">
              <div class="bg-teal-700 rounded-3xl">
                <div class="flex w-full h-20 bg-teal-400 justify-center items-center font-medium text-3xl xs:text-5xl  rounded-t-3xl">recent score</div>
                <div class="flex justify-center items-center text-2xl xs:text-5xl mt-4"><ul>{scoreElements}</ul></div>
              </div>
              <div class="bg-cyan-700 rounded-3xl">
                <div className={styles.scoreAvgText}>
                  <div class="flex w-full h-20 bg-cyan-500 justify-center items-center font-medium text-3xl xs:text-5xl  rounded-t-3xl">Your average score is</div>
                  <div class="flex font-bold justify-center items-center text-4xl xs:text-5xl mt-4">
                      {scoreAvg > 0 ? scoreAvg.toPrecision(6)  : '0'} ms
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center w-auto h-96">
            <div class="p-10 md:w-4/5 w-11/12 grid gap-4 grid-cols-5 xs:p-10 ">
              <div class=""></div>
              {/* <div class="col-span-5 lg:col-span-3 md:col-span-5">
                <div class="w-full h-96 bg-sky-800 rounded-3xl">
                    <div class="flex h-20 bg-sky-500 justify-center items-center font-medium text-3xl xs:text-5xl  rounded-t-3xl">
                      Leaderboard
                    </div>
                    <ul class="text-xl xs:text-5xl mt-4">
                      <div class="">
                      {leaderboard.map((entry, index) => (
                        <li key={index}>
                          RANK {index+1} : {entry.toPrecision(6)} ms
                        </li>
                      ))}
                      </div>
                    </ul>
                  </div>
              </div> */}
                
            </div>
              
            </div>
      </div>
    </div>
  );
};

export default ReactionTime;