import React from 'react'

const ChangeLanguage = () => {
  return (
    <div className='px-8 w-full pb-12 space-y-8'>
    <div className='bg-white shadow2 w-full space-y-4 rounded-lg p-8'>
    <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>

    {/* Name Inpit */}
    <label htmlFor="name" className='w-full space-y-2'>
    <p className='font-medium text-xsm'>Name</p>
    <select type="text" placeholder='User Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm'><option value="English">English</option><option value="Hindi ">Hindi  </option></select>
    </label>
    </div>


<button className='px-3 py-2 flex justify-end items-end bg-blue-500 hover:text-white text-sm mt-4 font-semibold rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Save</button>

    </div>
        

    </div>
  )
}

export default ChangeLanguage