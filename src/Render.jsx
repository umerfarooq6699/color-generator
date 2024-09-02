import React from 'react'

const Render = ({ input, click }) => {
  return (
    <>
      <h1 className='mt-3 text-2xl text-center'>Color Generator</h1>
      <div className='w-[280px] md:w-[370px] mt-3 md:mt-0 mx-auto'>
        <input onChange={input} className='mt-3 px-2 w-[210px] md:w-[300px] py-1 rounded border border-gray-600' placeholder='#d94821 or red,blue' type="text" />
        <button onClick={click} className='bg-blue-500 text-white px-2 py-1 rounded'>Submit</button>
      </div>
    </>
  )
}

export default Render