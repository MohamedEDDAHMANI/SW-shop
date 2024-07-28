import React from 'react'

function skeletonProductInfo() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='w-[300px] h-[20px] bg-slate-200 animate-pulse'></div>
      <div className='w-[30px] h-[20px] bg-slate-200 animate-pulse'></div>
      <div className='w-full h-[20px] bg-slate-200 animate-pulse'></div>
      <div className='w-full h-[20px] bg-slate-200 animate-pulse'></div>
      <div className='w-[100px] h-[20px] bg-slate-200 animate-pulse'></div>
      <div className='w-[200px] h-[20px] bg-slate-200 animate-pulse'></div>
      <div className='w-[100px] h-[40px] bg-slate-200 animate-pulse'></div>
      <div className='w-[120px] h-[45px] rounded-lg bg-slate-200 animate-pulse'></div>
    </div>
  )
}

export default skeletonProductInfo
