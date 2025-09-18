import React from 'react'
import Class from '../Classes/Class/Class'

const Classes = () => {
  return (
    <div className='box p-3 my-5'>
      <h1 className='heading'>Today's Classes</h1>
      <div className='md:grid md:grid-cols-2'>
      <Class />
      <Class />
      <Class />
      <Class />
        </div>
    </div>
  )
}

export default Classes
