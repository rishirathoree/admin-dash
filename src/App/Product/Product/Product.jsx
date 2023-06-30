import React, { useState } from 'react'

const Product = () => {
    const dummyArray = Array(2).fill(1)
    const [productApprovalStatus,setProductApprovalStatus] = useState('Approved')
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4'>
            <div className='bg-white lg:w-1/4 md:w-full sm:w-full rounded-lg shadow2 p-8'>
                <div className='grid grid-cols-1 space-y-4'>
                    <p className='font-semibold text-lg'>Filter</p>

                    <label htmlFor="Product Id" className='w-full'>
                    <p className='font-semibold text-xsm'>Product Id</p>
                    <input type="text" placeholder='Product Id' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Product Name" className='w-full'>
                    <p className='font-semibold text-xsm'>Product Name</p>
                    <input type="text" placeholder='Product Name' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Category Name" className='w-full'>
                    <p className='font-semibold text-xsm'>Category Name</p>
                    <input type="text" placeholder='Category Name' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Vendor Store" className='w-full'>
                    <p className='font-semibold text-xsm'>Vendor Store</p>
                    <input type="text" placeholder='Vendor Store' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Select Inventory" className='w-full'>
                    <p className='font-semibold text-xsm'>Select Inventory</p>
                    <select className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded'><option value="Select Inventory">Select Inventory</option></select>
                    </label>

                    <label htmlFor="Product Brand" className='w-full'>
                    <p className='font-semibold text-xsm'>Product Brand</p>
                    <select className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded'><option value="Product Brand">Product Brand</option></select>
                    </label>

                    <label htmlFor="Section Name" className='w-full'>
                    <p className='font-semibold text-xsm'>Section Name</p>
                    <select className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded'><option value="Section Name">Section Name</option></select>
                    </label>

                    
                    <div className='flex items-center gap-2 justify-between w-full'>
                    <button className='w-full p-2 bg-blue-600 text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Filter</button>
                    <button className='w-full p-2 bg-gray-200 text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-black'>Reset</button>
                    </div>
                    
                </div>
            </div>
            <div className='lg:w-3/4 md:w-full sm:w-full h-min rounded-lg space-y-4'>
              <div className='gap-2 flex items-center'>
                <button onClick={()=>{setProductApprovalStatus('Approved')}} className={`font-semibold text-xsm  ${productApprovalStatus === 'Approved' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'}`}>Approved</button>
                <button onClick={()=>{setProductApprovalStatus('Unapproved')}} className={`font-semibold text-xsm  ${productApprovalStatus === 'Unapproved' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'}`}>Unapproved</button>
              </div>
              <div className="relative overflow-x-auto sm:rounded-lg bg-white shadow2 ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-400 uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr className='w-full'>
              <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4 w-full">Product Id</th>
                    <th className="px-6 py-4">Vendor Store</th>
                    <th className="px-6 py-4">Product Details</th>
                    <th className="px-6 py-4">Product Price (whithout VAT)</th>
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className=''>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white  border-b last:border-none border-dashed dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 cursor-pointer">#</td>
                    <td className="px-6 py-4 cursor-pointer">CALYCID01</td>
                    <td className="px-6 py-4 cursor-pointer w-max"><p className='w-max'>LC Company</p></td>
                    <td className="px-6 py-4 cursor-pointer ">
                      <div className='flex gap-2 items-center w-max  '>
                        <div className='w-24 h-16 bg-white rounded-lg ring-1 ring-black/5'></div>
                        <div className='flex flex-col'>
                          <p className='text-slate-400 font-medium'>RECESSED COB 30W</p>
                          <div className='flex flex-col w-max'>
                        <p className='font-medium text-xsm '><span className='text-slate-400   font-light'>Brand:</span>LC</p>
                        <p className='font-medium text-xsm'><span className='text-slate-400    font-light'>Brand:</span>LC</p>
                        <p className='font-medium text-xsm'><span className='text-slate-400 font-light'>Brand:</span>LC</p>
                        </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 cursor-pointer first-letter:capitalize">
                    <div className='flex flex-col w-max'>
                        <p className='font-medium text-xsm '><span className='text-slate-400   font-light'>Class A: </span>140 SAR</p>
                        <p className='font-medium text-xsm'><span className='text-slate-400    font-light'>Class B: </span>140 SAR</p>
                        <p className='font-medium text-xsm'><span className='text-slate-400 font-light'>Class C: </span>140 SAR</p>
                        </div>
                    </td>
                    <td className="px-6 py-4 space-y-2 first-letter:capitalize">
                      <div className='flex gap-2 items-center'><div className='w-4 h-4 rounded-full bg-yellow-200 shadows'></div><p className='font-medium text-xsm '><span className='text-slate-400   font-light'>Yellow:</span>18</p></div>
                      <div className='flex gap-2 items-center'><div className='w-4 h-4 rounded-full bg-white shadows'></div><p className='font-medium text-xsm '><span className='text-slate-400   font-light'>White:</span>18</p></div>
                    </td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-pencil"></i>
                      <i class='bx bx-lg bxs-toggle-left'></i>
                      <button className='font-medium text-white rounded hover:shadows text-xsm bg-blue-500 p-2'>Duplicate</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Product