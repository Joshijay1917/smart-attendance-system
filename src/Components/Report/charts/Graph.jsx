import React from 'react'
import { Chart } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Colors
  } from "chart.js";
  
  ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      ArcElement,
      BarElement,
      Title,
      Tooltip,
      Legend,
      Colors
    );

const Graph = ({type, data, options}) => {
  return (
    <div className='h-[30vh]'>
      <Chart type={type} data={data} options={options} />
    </div>
  )
}

export default Graph
