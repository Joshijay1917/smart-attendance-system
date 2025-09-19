import React from 'react'
import Class from '../Classes/Class/Class'

const Classes = () => {
  return (
    <div className='box p-3 my-5'>
      <h1 className='heading-3'>Today's Classes</h1>
      <div className='md:grid md:grid-cols-2 md:gap-[20px] flex flex-col gap-3 mt-10'>
      <Class />
      <Class />
      <Class />
      <Class />
      </div>
    </div>
  )
}

export default Classes
