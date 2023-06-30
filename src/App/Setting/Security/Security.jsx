import React from 'react'

const Security = () => {
  return (
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='bg-white shadow2 w-full space-y-4 rounded-lg p-8'>
        <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>

{/* for old Password */}
<label htmlFor="old-password" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Old Password</p>
<input type="text" placeholder='Old Password' className='ring-1 valid:bg-blue-50 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 

{/* for new Password */}
<label htmlFor="new-Password" className='w-full space-y-2'>
<p className='font-medium text-xsm'>New Password</p>
<input type="text" placeholder='New Password' className='ring-1 valid:bg-blue-50 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 

{/* for confirm Password */}
<label htmlFor="Confirm Password" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Confirm Password</p>
<input type="text" placeholder='Confirm Password' className='ring-1 valid:bg-blue-50 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 

</div>


{/* form end here */}

<button className='px-3 py-2 flex justify-end items-end bg-blue-500 hover:text-white text-sm mt-4 font-semibold rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Submit</button>

    </div>
        

    </div>
  )
}

export default Security