import React from 'react'

const AddDriver = () => {
  return (
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='bg-white shadow2 w-full space-y-4 rounded-lg p-8'>
        <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>

{/* Name Inpit */}
<label htmlFor="First-name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>First Name</p>
<input type="text" placeholder='First Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>   

{/* for email */}
<label htmlFor="Last Name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Last Name</p>
<input type="text" placeholder='Last Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* for mobile no. */}
<label htmlFor="Phone Number" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Phone Number</p>
<input type="text" placeholder='Phone Number' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 
</div>

{/* Section Image */}
<div className='space-y-6'>

<div className='space-y-4 lg:col-start-1 lg:col-end-4 md:col-start-1 md:col-end-3 sm:col-start-1 col-end-1'>
<p className='font-medium text-xsm'>Driver Image</p>
<i className='bx bx-image bx-lg p-12 rounded-lg shadow2 bg-blue-200/20 hover:bg-blue-200/50 duration-500 text-slate-300'></i>
</div>
</div>

<div className='gap-4 lg:col-start-1 lg:col-end-4 md:col-start-1 md:col-end-3 sm:col-start-1 col-end-1 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 '>
<div className='space-y-4'>
<p className='font-medium text-xsm'>Driver licence Front</p>
<i className='bx bx-image bx-lg p-20 rounded-lg shadow2 bg-blue-200/20 hover:bg-blue-200/50 duration-500 text-slate-300'></i>
</div>

<div className='space-y-4'>
<p className='font-medium text-xsm'>Driver License Back</p>
<i className='bx bx-image bx-lg p-20 rounded-lg shadow2 bg-blue-200/20 hover:bg-blue-200/50 duration-500 text-slate-300'></i>
</div>

<div className='space-y-4'>
<p className='font-medium text-xsm'>Driver Identity Front</p>
<i className='bx bx-image bx-lg p-20 rounded-lg shadow2 bg-blue-200/20 hover:bg-blue-200/50 duration-500 text-slate-300'></i>
</div>

<div className='space-y-4'>
<p className='font-medium text-xsm'>Driver Identity Back</p>
<i className='bx bx-image bx-lg p-20 rounded-lg shadow2 bg-blue-200/20 hover:bg-blue-200/50 duration-500 text-slate-300'></i>
</div>

</div>

<div className='grid grid-cols-2 gap-2'>

{/* Name Inpit */}
<label htmlFor="Driver Identity Number" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Driver Identity Number</p>
<input type="text" placeholder='Driver Identity Number' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>   

{/* for email */}
<label htmlFor="Driver Identity Expiry Date" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Driver Identity Expiry Date</p>
<input type="text" placeholder='MM/YY' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

</div>



{/* form end here */}

<div className='flex items-center gap-2'>
<button className='px-3 py-2 flex justify-end items-end bg-blue-500 hover:text-white text-sm mt-4 font-semibold rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Save</button>
<button className='px-3 py-2 flex justify-end items-end text-sm mt-4 font-semibold rounded ring-1 ring-black/5'>Cancel</button>
</div>
    </div> 
        

    </div>
  )
}

export default AddDriver