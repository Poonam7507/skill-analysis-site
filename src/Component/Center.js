import React from 'react'
import { useState } from 'react';
import Chart from "react-apexcharts";
import '../CSS/Player.css'
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
 LineElement,
 CategoryScale,
 LinearScale,
 PointElement
}from 'chart.js';

ChartJS.register(
  LineElement,
 CategoryScale,
 LinearScale,
 PointElement
)
export const Center=({display,score,percentile,rank})=> {
  
var per=percentile;



 const data={
  labels:[
    "0%","20%","40%","60%","80%","100%"
  ],
  datasets:[{
    label:"",
    data:[12,percentile,10,4,5],
    tension:0.5
  }],
 
 }
const options={
 
  plugins: {
    legend: {
      display: false,
      position: "right"
    },
    tooltip: {
     
      callbacks: {

        label: (context) => {
          let label = "";
          if (context.parsed.y) {
            label = context.parsed.y + "%"
            
            
          }
          return label;
        }
      }
    }
  }
};

  return (
    <>
<div className='center' >
  <div className='update_box'>
  <div className='text'>
  </div>
  <div className='text'>
  <h3>Hypertext Markup Language</h3>
   <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>

  </div>
  <div className='text'>

   <button onClick={display}>Update
   </button>
  </div>
   
  </div>
  <div className='quick_box'>
    <div className='rank'>
    <h3><p className='icon'>🏆</p>{rank}</h3>
    <p>YOUR RANK</p>
    </div>
    <div className='percentile'>
    <h3>
<p className='icon'>
📋 
</p>
    {percentile}
    </h3>
    <p>PERCENTILE</p>
    </div>
    <div className='ans'>
     <h3  ><p className='icon'>✅</p>  {score}/ 15</h3>
     <p>CORRECT ANSWERS</p>
    </div>
  </div>
  <div className='graph_box'>
  You scored {percentile} percentile which is lower than the average percentile  of all the engineers who took this assessment
 <Line data={data} options={
  {
    scales: {
        x: {
          grid: {
            display: false // Hide x grid
          }
        },
        y: {
          grid: {
            display: false // Hide y grid
          }
        }
      }
  }
 }/>
  </div>
</div>

    </>
  )
}

export const Newdiv=({hide,change,change2,change3,score,rank,percentile,show})=>{
  
  
  return(
    <>
{show?( <div className='update_score' >
<div className='input'>
<div>

1. Update your rank 
</div>
<input
onChange={change3}
   value={rank}
/></div>
<div className='input'><div >2. Update your percentile</div><input
    onChange={change2}
    value={percentile}
/></div>
<div className='input'><div >3. Update your current score (out of 15)</div><input
     onChange={change}
    value={score}
/></div>

<div className='btn'>
    <button onClick={hide}>Cancel</button>
    <button onClick={hide} >Save</button>
</div>

</div>):(null)}
 

     
    </>
  )
}