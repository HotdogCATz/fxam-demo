import React, { useState ,useEffect, useRef, use } from 'react';
import { Chart, registerables } from 'chart.js';
import styles from './Spider.module.css';
import { FLIGHT_PARAMETERS } from 'next/dist/client/components/app-router-headers';
import Router, { useRouter } from "next/router";

const Spider = ({suggestionText, }) => {

  const router = useRouter();
  

  const {
    query: {reactionScore, reactionGrade, maxLevels,},
  }  = router;

  const props = {
    reactionScore,
    reactionGrade,
    maxLevels,
  };


  const chartRef = useRef(null);
  suggestionText = "lorem no suggestions";
  const label = ['Reaction Time', 'Number Memory', 'คะแนนความเก่งเจ๋ง', 'Free For All', 'คะแนนความหล่อสวย'];
  const score = [reactionScore + ' ms',maxLevels + ' Level',point3,point4,point5,];
  const labelScore = label.map((label, index) => (
    <span key={index}>
      {label} : {score[index]}
      <br />
    </span>
  ));

const point3 = Math.floor(Math.random() * 5) + 6;
const point4 = Math.floor(Math.random() * 4) + 7;
const point5 = Math.floor(Math.random() * 6) + 4;

  useEffect(() => {
    Chart.register(...registerables); // Register all chart types and plugins

    let chartInstance = null;

    


    const createChart = () => {
      const chartElement = chartRef.current;
      const ctx = chartElement.getContext('2d');

      Chart.defaults.font.size = 14;
      
      const data = {
        labels: label,
        datasets: [
          {
            label: 'Your Score',
            data: [reactionGrade, maxLevels, point3, point4, point5],
            borderColor: 'rgb(19, 118, 148)',
            backgroundColor: 'rgba(61, 201, 243, 0.8)',
          },
          {
            label: 'Average',
            data: [8, 9, 7, 7, 6],
            borderColor: 'rgb(25, 185, 158)',
            backgroundColor: 'rgba(63, 223, 196, 0.3)',
          }
          
        ],
        hoverOffset : 4
      };
      
      chartInstance = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
          animations: {
            tension: {
              duration: 8000,
              easing: 'linear',
              from: 0.1,
              to: 0,
              loop: true
            }
          },
          scales :{
            r: {
              min: 0,
              beginAtZero: true,
              grid: {
                color: 'white', // Set grid color to white
                borderColor: '#ffffff', // Set grid border color to white
                circular: false,
              },
              angleLines: {
                color: '#ffffff', // Set angle lines color to white
                lineWidth: 1, // Set angle lines width
              },
              pointLabels: {
                color: '#ffffff', // Set point labels color to white
                font : {
                  size: 14,
                },
              },
              
            },   
          },
          ticks:{
            beginAtZero: true,
            min: 0,
            z:0,
            stepSize: 1,
          },
          
          plugins:{
            legend:{
              position:'top',
              labels:{
                font:{
                  size:'16px',
                  weight:'bold',
                },
              },
            },
          },
          
          
        },

      });
    };

    

    // Create the initial chart
    createChart();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div >
      <h1 class="text-4xl mt-8">
        <span>ผลการ Analytic</span>
      </h1>
      <div class="flex justify-center" className={styles.container}>
      <div class="p-4 w-auto grid md:gap-x-56 gap-4 xs:grid-cols-1 md:grid-cols-2 xs:p-10">
        <div class="justify-center content-center justify-items-center">
          <h1 class="md:mb-12 mb-6 mt-10 md:text-5xl text-4xl xs:gap-4">
            <span class="">Spider result</span>
          </h1>
          <div class="">
            <canvas ref={chartRef} className={styles.spiderChart}/>
          </div>
        </div>
        
        <div class="self-center">
          <div >
            {/* <div class=" p-4 pl-6 h-24 xs:h-auto mt-16 xs:mt-24 border-2 border-emerald-500">
              <div class="text-left items-start justify-items-start">
                <span class="text-teal-400 font-bold">Lorem : </span>
                <span class="font-extralight">{suggestionText}</span>
              </div>
            </div> */}
            <div class="text-left">
              <h1 class="mt-4 mb-4 text-3xl font-bold">Score</h1>
              <span class="text-2xl font-extralight">{labelScore} </span>
            </div>
            <div>
              <div class="flex mt-4 justify-between">
                <span class=" text-2xl font-bold text-sky-400">Score your get :</span>
                <span class="text-2xl">{( (reactionGrade)/5 + (maxLevels)/5 + point3/5 + point4/5 + point5/5).toPrecision(3)}</span>
              </div>
              <div class="flex justify-between">
                <span class=" text-2xl font-bold text-sky-400">Average score :</span>
                <span class="text-2xl">{(((8)/5 + (9)/5) +7/5 +7/5 +6/5).toPrecision(3)}</span>
              </div>
            </div>
            <div class="flex justify-center content-center justify-items-center h-full">
                        <button class="mt-20">
                          <div class="flex justify-center content-center bg-green-600 hover:bg-green-700 h-20 rounded-lg  w-40 md:w-96">
                            <a class="flex  items-center" href='/preBm'>
                              <p class=" text-based md:text-3xl font-bold">ลองใหม่อีกครั้ง!</p>
                            </a>  
                          </div>
                        </button>
                      </div>
          </div>
            
        </div>
      </div>
      </div>
      
        
    </div>
    
  )
};

export default Spider;

