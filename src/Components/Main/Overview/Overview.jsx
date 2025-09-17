import React from 'react'
import StatsCard from '../statsCard/StatsCard'

const Overview = () => {
  return (
    <div className='box p-2'>
      <h1 className='heading'>Overview</h1>
      <div className='grid grid-cols-2 m-3 gap-3'>
        <StatsCard type={"students"} number={200} title={"Total Students"}/>
        <StatsCard type={"rate"} number={"20%"} title={"Attendance Rate"}/>
        <StatsCard type={"sessions"} number={34} title={"Active Sessions"}/>
        <StatsCard type={"classes"} number={6} title={"Classes"}/>
      </div>
    </div>
  )
}

export default Overview
