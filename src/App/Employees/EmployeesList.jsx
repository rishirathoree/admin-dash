import React from 'react'

const EmployeesList = () => {
    const dummyArray = Array(2).fill(1)
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4'>
            <div className='bg-white lg:w-1/4 md:w-full sm:w-full rounded-lg shadow2 p-8'>
                <div className='grid grid-cols-1 space-y-4'>
                    <p className='font-semibold text-lg'>Filter</p>

                    <label htmlFor="Employee Id" className='w-full'>
                    <p className='font-semibold text-xsm'>Employee Id</p>
                    <input type="text" placeholder='User Id' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Email" className='w-full'>
                    <p className='font-semibold text-xsm'>Email</p>
                    <input type="text" placeholder='Email' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Mobile Number" className='w-full'>
                    <p className='font-semibold text-xsm'>Mobile Number</p>
                    <input type="text" placeholder='Mobile Number' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Credit Available" className='w-full'>
                    <p className='font-semibold text-xsm'>Select Designation</p>
                    <select className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded'><option value="hey">Select Designation</option></select>
                    </label>
                    
                    <div className='flex items-center gap-2 justify-between w-full'>
                    <button className='w-full p-2 bg-blue-600 text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Filter</button>
                    <button className='w-full p-2 bg-gray-200 text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-black'>Reset</button>
                    </div>
                    
                </div>
            </div>
            <div className="relative overflow-x-auto sm:rounded-lg bg-white shadow2 lg:w-3/4 md:w-full sm:w-full h-min rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className='w-full'>
              <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Id</th>
                    <th className="px-6 py-4 w-full">Name</th>
                    <th className="px-6 py-4">Number</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Designation</th>
                    <th className="px-6 py-4">Order Created</th>
                    <th className="px-6 py-4">Order Amnt</th>
                    <th className="px-6 py-4">City</th>
                    <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b last:border-none border-dashed dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 cursor-pointer">#</td>
                    <td className="px-6 py-4 cursor-pointer">CALYCID01</td>
                    <td className="px-6 py-4 cursor-pointer"><p>Test User Store</p></td>
                    <td className="px-6 py-4 cursor-pointer">8962274421</td>
                    <td className="px-6 py-4 cursor-pointer first-letter:capitalize">rishi@gmail.com</td>
                    <td className="px-6 py-4 cursor-pointer first-letter:capitalize">marketer</td>
                    <td className="px-6 py-4 cursor-pointer">8962274421</td>
                    <td className="px-6 py-4 cursor-pointer">0</td>
                    <td className="px-6 py-4 first-letter:capitalize">riyadh</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-pencil"></i>
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
    </>
  )
}

export default EmployeesList