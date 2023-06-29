import React from 'react'

const Addvendor = () => {
  return (
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='bg-white shadow2 w-full space-y-4 rounded-lg p-8'>
        <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>

{/* Name Inpit */}
<label htmlFor="name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Name</p>
<input type="text" placeholder='User Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>    

{/* for email */}
<label htmlFor="name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Email</p>
<input type="text" placeholder='User Email' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  


{/* Phone Number and country code select */}

<div className='flex w-full flex-col space-y-2'>
<p className='font-medium text-xsm'>Phone No.*</p>
<input type="text" placeholder='User Phone Number' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</div>


{/* for email */}
<label htmlFor="password" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Password</p>
<input type="password" placeholder='Password' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/*Store Name Inpit */}
<label htmlFor="Store Name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Store Name</p>
<input type="text" placeholder='Store Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  
</div>

<div className='w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>


{/* Monthly Budget Inpit */}
<label htmlFor="Monthly Budget" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Monthly Budget</p>
<select type="text" placeholder='Monthly Budget' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm'><option value="Monthly Budget">Select Monthly Budget</option></select>
</label>  

{/* Place Type* Inpit */}
<label htmlFor="Place Type*" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Place Type*</p>
<select type="text" placeholder='Place Type*' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm'><option value="Place Type*">Select Place Type*</option></select>
</label>  

{/* Activity Type Inpit */}
<label htmlFor="Activity Type" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Activity Type</p>
<select type="text" placeholder='Activity Type' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm'><option value="Activity Type">Select Activity Type</option></select>
</label>  

</div>
{/* form end here */}

{/* inventory location */}

<div className='w-full space-y-4'>
<p className='font-semibold text-lg'>Inventory Location</p>
<div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1'>

{/* address title Type* Inpit */}
<label htmlFor="Address Title" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Address Title</p>
<input type="text" placeholder='Address Title' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Address Type* Inpit */}
<label htmlFor="Address Type*" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Address Type*</p>
<input type="text" placeholder='Address Type*' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

</div>
</div>

{/* Section Image */}
<div className='space-y-6'>

<div className='space-y-4 lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-3 sm:col-start-1 col-end-1'>
<p className='font-medium text-xsm'>Store Image*</p>
<i className='bx bx-image bx-lg p-12 rounded-lg shadow2 bg-blue-200/20 hover:bg-blue-200/50 duration-500 text-slate-300'></i>
<p className='font-light text-xsm'><b>Note</b>:Image dimension should be 545px in width & 370px in height</p>
</div>
</div>

<button className='px-3 py-2 flex justify-end items-end bg-blue-500 hover:text-white text-sm mt-4 font-semibold rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Save</button>

    </div>
        

    </div>
  )
}

export default Addvendor;