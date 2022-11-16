// import "./styles.css";
import { Chart } from "chart.js";

import { Bar } from "react-chartjs-2";
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";
import "chart.js/auto";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// Chart.register(ChartDataLabels); // Register the datalabels plugin for every charts

 export const ExampleChart = () => (
  <>
    <div className="barchart">
    <Bar
    data={{
      labels: ["HTML Tools, Forms, History", "Tags & References in HTML", "Tables & CSS Basics", "Tables & CSS Basics"],
      datasets: [
        {
          label: "Syllabus wise Analysis",
          backgroundColor: ["#438AF6", "#FF9142", "#FB5E5E", "#2EC971"] ,
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          height:"0.2" ,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [80, 60, 24, 96],
          borderRadius: 50 // Make Rectangle rounded
        }
      ]
    }}
    options={
        {
            // maintainAspectRatio: false,
            plugins: {
      legend: {
        display: false,
      },           
    },
      indexAxis: "y", // Horizontal bar
    //   plugins: {
    //     datalabels: {
    //       formatter: (value) => value + " %", // Add the percentage after the value
    //       align: "end",
    //       anchor: "end",
    //       clip: true // Hide label if outside of the chart
    //     }
    //   },

  
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
      
    }}
  />
    </div>
  </>
  
);

