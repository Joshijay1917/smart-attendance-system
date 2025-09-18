import React from 'react'
import { Chart } from "react-chartjs-2";

const Graph = ({type, data, options}) => {
  return (
    <div className='h-[30vh]'>
      <Chart type={type} data={data} options={options} />
    </div>
  )
}

export default Graph
