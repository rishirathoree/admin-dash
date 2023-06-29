import React from 'react'

const AddUser = () => {
  return (
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='bg-white shadow2 w-full space-y-4 rounded-lg p-8'>
        <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>

{/* Name Inpit */}
<label htmlFor="name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Name</p>
<input type="text" placeholder='User Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>    

{/* Phone Number and country code select */}

<div className='flex w-full flex-col space-y-2'>
<p className='font-medium text-xsm'>Phone No.*</p>
<div className='flex gap-2 items-center'>
<select type="text" placeholder='User Name' className='ring-1 ring-black/5 rounded p-2 w-max font-semibold text-xsm'><option value="+91">91</option></select>
<input type="text" placeholder='User Phone Number' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</div>
</div>

{/* for email */}
<label htmlFor="name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Name</p>
<input type="text" placeholder='User Email' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* for email */}
<label htmlFor="Class" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Class</p>
<input type="text" placeholder='User Class' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

</div>

<div className='w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
   {/* Name Inpit */}
<label htmlFor="Store Name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Store Name</p>
<input type="text" placeholder='Store Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  


{/* Name Inpit */}
<label htmlFor="Job Name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Job Name</p>
<select type="text" placeholder='Job Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Name Inpit */}
<label htmlFor="name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Name</p>
<input type="text" placeholder='User Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Name Inpit */}
<label htmlFor="CR" className='w-full space-y-2'>
<p className='font-medium text-xsm'>CR</p>
<input type="text" placeholder='CR' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Name Inpit */}
<label htmlFor="Credit limit Available" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Credit limit Available</p>
<input type="text" placeholder='Credit limit Available' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Name Inpit */}
<label htmlFor="Vat number" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Vat number</p>
<input type="text" placeholder='Vat number' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Name Inpit */}
<label htmlFor="Monthly Budget" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Monthly Budget</p>
<select type="text" placeholder='Monthly Budget' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Name Inpit */}
<label htmlFor="Employees Type*" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Employees Type*</p>
<input type="text" placeholder='Employees Type*' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  




{/* Name Inpit */}
<label htmlFor="Activity Type" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Activity Type</p>
<select type="text" placeholder='Activity Type' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Address Inpit */}
<label htmlFor="Address" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Address</p>
<input type="text" placeholder='Address' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Location name Inpit */}
<label htmlFor="Location name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Location name</p>
<input type="text" placeholder='Location name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* city Inpit */}
<label htmlFor="city" className='w-full space-y-2'>
<p className='font-medium text-xsm'>City</p>
<input type="text" placeholder='City' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Description Input */}
<label htmlFor="city" className='w-full space-y-2 lg:col-start-1 lg:col-end-4 md:col-start-1 md:col-end-3 sm:col-start-1 col-end-1'>
<p className='font-medium text-xsm'>Description</p>
<textarea placeholder='Description' className='ring-1 resize-none appearance-none ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm'></textarea>
</label> 

{/* Section Image */}
<div className='space-y-6'>

<div className='space-y-4 lg:col-start-1 lg:col-end-4 md:col-start-1 md:col-end-3 sm:col-start-1 col-end-1'>
<p className='font-medium text-xsm'>Store Image*</p>
<i className='bx bx-image bx-lg p-12 rounded-lg shadow2 bg-blue-200/20 hover:bg-blue-200/50 duration-500 text-slate-300'></i>
<p className='font-light text-xsm'><b>Note</b>:Image dimension should be 545px in width & 370px in height</p>
</div>

{/*CR Image */}
<div className='space-y-4 lg:col-start-1 lg:col-end-4 md:col-start-1 md:col-end-3 sm:col-start-1 col-end-1'>
<p className='font-medium text-xsm'>CR Image*</p>
<i className='bx bx-image bx-lg p-12 rounded-lg shadow2 bg-blue-200/20 hover:bg-blue-200/50 duration-500 text-slate-300'></i>
<p className='font-light text-xsm'><b>Note</b>:Image dimension should be 545px in width & 370px in height</p>
</div>
</div>

</div>
{/* form end here */}

<button className='px-3 py-2 flex justify-end items-end bg-blue-500 hover:text-white text-sm mt-4 font-semibold rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Save</button>

    </div>
        

    </div>
  )
}

export default AddUser