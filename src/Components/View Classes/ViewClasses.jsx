import React from 'react'
import Class from '../Classes/Class/Class'

const ViewClasses = () => {
  return (
    <div className='box mt-3 p-3'>
      <h1 className='heading-3'>Today's Classes</h1>
      <div className='mt-5 flex flex-col gap-5 md:grid md:grid-cols-2'>
        <Class />
        <Class />
      </div>
    </div>
  )
}

export default ViewClasses
