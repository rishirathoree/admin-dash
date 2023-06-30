import React from 'react'

const AddDiscountCoupons = () => {
  return (
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='bg-white shadow2 w-full space-y-4 rounded-lg p-8'>

<div className='w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
{/* Name Inpit */}
<label htmlFor="title" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Title</p>
<input type="text" placeholder='Title' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* for email */}
<label htmlFor="Coupon Type" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Coupon Type</p>
<select type="text" placeholder='Activity Type' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* for email */}
<label htmlFor="Discount Value" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Discount Value ( % )</p>
<input type="text" placeholder='10%' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* Name Inpit */}
<label htmlFor="Promocode" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Promocode</p>
<input type="text" placeholder='Promocode' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>

<textarea className='lg:col-start-1 lg:col-end-3 ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-200 text-xsm appearance-none' placeholder='Description'></textarea>
</div>

{/* form end here */}

{/* Section Image */}
<div className='space-y-6'>

{/*Discount Image Image */}
<div className='space-y-4 lg:col-start-1 lg:col-end-4 md:col-start-1 md:col-end-3 sm:col-start-1 col-end-1'>
<p className='font-medium text-xsm'>Coupon Image</p>
<i className='bx bx-image bx-lg p-12 rounded-lg shadow2 bg-blue-200/20 hover:bg-blue-200/50 duration-500 text-slate-300'></i>
<p className='font-light text-xsm'><b>Note</b>::Image dimension should be 545px in width & 370px in height</p>
</div>
</div>

<button className='px-3 py-2 flex justify-end items-end bg-blue-500 hover:text-white text-sm mt-4 font-semibold rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Save</button>

    </div>
        

    </div>
  )
}

export default AddDiscountCoupons