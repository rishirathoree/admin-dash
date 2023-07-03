import React, { useState } from 'react'

const AddOrder = () => {
    const [vendor,setVendor] = useState(null)
  return (
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='bg-white shadow2 w-full space-y-4 rounded-lg p-8'>
        <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>

{/* for new Password */}
<label htmlFor="Select User" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Select User</p>
<input type="text" placeholder='Select User' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 

{/* for confirm Password */}
<label htmlFor="Select Vendor" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Select Vendor</p>
<input type="text" placeholder='Select Vendor' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 

</div>


{/* form end here */}

<button className={`px-3 py-2 flex justify-end items-end bg-blue-500 text-sm mt-4 font-semibold rounded ring-1 ring-black/5 ${vendor ? 'text-white' : 'text-slate-100/50'}`}>Next</button>

    </div>
        

    </div>
  )
}

export default AddOrder