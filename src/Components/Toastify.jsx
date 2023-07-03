import React, { useEffect } from 'react'

const Toastify = ({title,color}) => {
    // if (!title) return null; // Don't render if title is not provided
    return (
      <>
        <div className={`bg-blue-600 fixed ${title ? 'duration-500 opacity-100 translate-y-4' : 'duration-500 opacity-0 -translate-y-full'} top-10 right-1/2 px-2 shadows translate-x-1/2 py-2 flex items-center gap-2 ring-1 ring-black/5 z-[1000] rounded-lg`}>
          <i className={`bx text-white bx-user-check p-2`}></i>
          <p className='text-xsm font-semibold text-white'>User Added Successfully</p>
        </div>
      </>
    );
}

export default Toastify