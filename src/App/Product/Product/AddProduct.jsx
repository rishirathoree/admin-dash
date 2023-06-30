import React from 'react'

const Addproduct = () => {
  return (
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='bg-white shadow2 w-full space-y-4 rounded-lg p-8'>
        <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>

{/* Name Inpit */}
<label htmlFor="Section selection" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Section selection*</p>
<select type="text" placeholder='Section selection*'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="Section selection*">Select Employees</option></select>
</label> 

<label htmlFor="Category Selection*" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Category Selection</p>
<select type="text" placeholder='Category Selection'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="Category Selection">Category Selection</option></select>
</label> 

{/* for email */}
<label htmlFor="Product Name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Product Name</p>
<input type="text" placeholder='Product Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

{/* for mobile no. */}
<label htmlFor="Sub Product Name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Sub Product Name</p>
<input type="text" placeholder='Sub Product Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 


{/* for Employees */}
<label htmlFor="Brand Name" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Brand Name</p>
<select type="text" placeholder='Brand Name'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="Brand Name">Brand Name</option></select>
</label> 

{/* for Employees */}
<label htmlFor="Product Model No" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Product Model No</p>
<select type="text" placeholder='Product Model No'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="Product Model No">Product Model No</option></select>
</label> 

{/* for Employees */}
<label htmlFor="Color" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Select Color</p>
<select type="text" placeholder='Select Color'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="select Color">Select Color</option></select>
</label> 


{/* for Employees */}
<label htmlFor="Stock Quantity" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Stock Quantity</p>
<input type="text" placeholder='Stock Quantity' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  


{/* for Employees */}
<label htmlFor="Quantity Per Carton" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Quantity Per Carton</p>
<input type="text" placeholder='Quantity Per Carton' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>

<div className='lg:col-start-1 lg:col-end-3 md:col-start-1 md:col-end-3 sm:col-start-1 sm:col-end-2 w-full'>
<p className='font-medium text-xsm mb-2'>Price(Per Carton)</p>
<div className='grid lg-grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1'>

<label htmlFor="Quantity Per Carton" className='w-full space-y-1'>
<p className='font-medium text-xsm'>A</p>
<input type="text" placeholder='500' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

<label htmlFor="Quantity Per Carton" className='w-full space-y-1'>
<p className='font-medium text-xsm'>B</p>
<input type="text" placeholder='500' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

<label htmlFor="Quantity Per Carton" className='w-full space-y-1'>
<p className='font-medium text-xsm'>C</p>
<input type="text" placeholder='500' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  

<label htmlFor="Quantity Per Carton" className='w-full space-y-1'>
<p className='font-medium text-xsm'>D</p>
<input type="text" placeholder='500' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>  
  
</div>
</div>

{/* for mobile no. */}
<label htmlFor="Weight (Kg)" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Weight (Kg)</p>
<input type="text" placeholder='Weight (Kg)' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 


{/* for Employees */}
<label htmlFor="Offer Available" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Offer Available</p>
<select type="text" placeholder='Offer Available'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="Offer Available">Offer Available</option></select>
</label> 

{/* for mobile no. */}
<label htmlFor="Product Length (cm)" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Product Length (cm)</p>
<input type="text" placeholder='Product Length (cm)' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 


{/* for mobile no. */}
<label htmlFor="Product Width (cm)" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Product Width (cm)</p>
<input type="text" placeholder='Product Width (cm)' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 


{/* for mobile no. */}
<label htmlFor="Product Hight (cm)" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Product Hight (cm)</p>
<input type="text" placeholder='Product Hight (cm)' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 


{/* for mobile no. */}
<label htmlFor="Carton Length (cm)" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Carton Length (cm)</p>
<input type="text" placeholder='Carton Length (cm)' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 


{/* for mobile no. */}
<label htmlFor="Carton Width (cm)" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Carton Width (cm)</p>
<input type="text" placeholder='Carton Width (cm)' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 

{/* for Employees */}
<label htmlFor="Energy Efficiency Rating" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Energy Efficiency Rating</p>
<select type="text" placeholder='Energy Efficiency Rating'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="Energy Efficiency Rating">Select Energy Efficiency Rating</option></select>
</label> 

{/* for Employees */}
<label htmlFor="Supplier store*" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Supplier store*</p>
<select type="text" placeholder='Supplier store*'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="Supplier store*">Select store</option></select>
</label> 

<label htmlFor="Select Inventory*" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Select Inventory*</p>
<select type="text" placeholder='Select Inventory*'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="Select Inventory*">Select Inventory</option></select>
</label> 

{/* for mobile no. */}
<label htmlFor="Watt No" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Watt No</p>
<input type="text" placeholder='Watt No' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label> 

<label htmlFor="Warranty period" className='w-full space-y-2'>
<p className='font-medium text-xsm'>Warranty period</p>
<input type="text" placeholder='Warranty period' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
</label>

<div className='lg:col-start-1 lg:col-end-3 md:col-start-1 md:col-end-3 sm:col-start-1 sm:col-end-2'>
<p className='font-medium text-xsm'>Description</p>
<textarea placeholder='Description' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm'></textarea>
</div>

<div className='space-y-6'>

<div className='space-y-4 lg:col-start-1 lg:col-end-4 md:col-start-1 md:col-end-3 sm:col-start-1 col-end-1'>
<p className='font-medium text-xsm'>Product Main Image</p>
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

export default Addproduct