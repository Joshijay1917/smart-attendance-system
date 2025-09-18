import React from 'react'
import Graph from './charts/Graph';

const Report = () => {
    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
          {
            label: "Attendance Rate (%)",
            data: [40, 75, 90, 70, 95, 88], // example data
            // borderColor: [
            //     "rgba(255, 99, 132, 1)",   // red
            //     "rgba(54, 162, 235, 1)",   // blue
            //     "rgba(255, 206, 86, 1)",   // yellow
            //     "rgba(75, 192, 192, 1)",   // green
            //     "rgba(153, 102, 255, 1)",  // purple
            //     "rgba(255, 159, 64, 1)",   // orange
            //   ],
            //   backgroundColor: [
            //     "rgba(255, 99, 132, 0.6)",
            //     "rgba(54, 162, 235, 0.6)",
            //     "rgba(255, 206, 86, 0.6)",
            //     "rgba(75, 192, 192, 0.6)",
            //     "rgba(153, 102, 255, 0.6)",
            //     "rgba(255, 159, 64, 0.6)",
            //   ],
            // borderColor: "rgba(75, 192, 192, 1)",
            // backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4, // smooth curve
          },
        ],
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false, // allows chart to resize freely
        plugins: {
          legend: {
            position: "top",
            labels: {
              font: {
                size: 12, // smaller legend text
              },
            },
          },
          title: {
            display: true,
            text: "Weekly Student Attendance Rate",
            font: {
              size: 16, // smaller title on mobile
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: 10, // smaller x-axis labels
              },
            },
          },
          y: {
            min: 0,
            max: 100,
            ticks: {
              callback: (value) => value + "%",
              font: {
                size: 10, // smaller y-axis labels
              },
            },
          },
        },
      };

  return (
    <div className='box mt-3 p-3'>
      <h1 className='heading-3'>Report</h1>
      <div className='md:grid md:grid-cols-2 gap-5'>

      <div className='h-[30vh] my-3'>
      <Graph type={'line'} data={data} options={options}/>
      </div>
      <div className='h-[30vh] my-3'>
      <Graph type={'bar'} data={data} options={options}/>
      </div>
      <div className='h-[30vh] my-3'>
      <Graph type={'pie'} data={data} options={options}/>
      </div>
      <div className='h-[30vh] my-3'>
      <Graph type={'doughnut'} data={data} options={options}/>
      </div>
      </div>
    </div>
  )
}

export default Report
