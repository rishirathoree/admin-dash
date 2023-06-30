import React from 'react'

const AddEmployee = () => {
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
<label htmlFor="Email" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Email</p>
<input type="text" placeholder='Email Address' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* for mobile no. */}
<label htmlFor="Class" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Mobile Number</p>
<input type="text" placeholder='Mobile Number' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 

{/* for city */}
<label htmlFor="City" className='w-full space-y-2'>
<p className='font-medium text-xsm'>City</p>
<input type="text" placeholder='Enter City' value='admininfo@gmail.com' className='ring-1 valid:bg-blue-50 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 

{/* for Employees */}
<label htmlFor="City" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Select Employees</p>
<select type="text" placeholder='Select Employees'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="select Employees">Select Employees</option></select>
</label> 

{/* for Password */}
<label htmlFor="City" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Password</p>
<input type="text" placeholder='Password' value='*****' className='ring-1 valid:bg-blue-50 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 

</div>



{/* form end here */}

<button className='px-3 py-2 flex justify-end items-end bg-blue-500 hover:text-white text-sm mt-4 font-semibold rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Save</button>

    </div>
        

    </div>
  )
}

export default AddEmployee