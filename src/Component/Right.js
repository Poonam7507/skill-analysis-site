import React from 'react'
import { ExampleChart } from './Chart'
import { Doughnut } from "react-chartjs-2";



export default function Right({score}) {
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    // labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data:  [score,15],
        backgroundColor:["#edf4ff","#438AF6"]
        // hoverBackgroundColor: chartColors
      }
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: false,
      position: "right"
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };
  
  return (
    <>
    <div className='box_right'>
    <div className='right'>
      <ExampleChart/>
    </div>
    <div className='analysis'>
    Question Analysis
<p>You scored {score} question correct out of 15. However it
still needs some improvements</p>
    <div className='doughnut' style={{width: '50%', height: '50%'}}>
    <Doughnut data={data} options={options} 
    
    />

    </div>
    
    </div>

    </div>

    </>
  )
}


// export const newdiv=()=>{
//   return(
//     <>
      
//     </>
//   )
// }