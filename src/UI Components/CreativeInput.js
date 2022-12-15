import React from 'react'
import InputBar from './InputBar'

const CreativeInput = () => {
  return (
    <div className='bg-gray-900 flex items-center py-10'>
      <div className='max-w-md mx-auto w-full space-y-4'>
        <h1 className='text-white text-center text-2xl'>Bulk Create Marketing Creatives</h1>
        <h2 className='text-gray-100 text-center font-extralight'>Describe your Hook</h2>
        <InputBar></InputBar>
        <h2 className='text-gray-100 text-center font-extralight'>Select Subjects / Products</h2>
        <InputBar></InputBar>
        <h2 className='text-gray-100 text-center font-extralight'>Describe the ideal scene / vibe of your Creative</h2>
        <InputBar></InputBar>
      </div>
    </div>
  )
}

export default CreativeInput