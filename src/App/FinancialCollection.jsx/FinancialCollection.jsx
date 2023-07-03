import React, { useState } from 'react'
import FinancicalPopup from './FinancicalPopup'

const FinancialCollection = () => {
    const dummyArray = Array(1).fill(1)
    const [seeDueAmountValue,setSeeDueAmountValue] = useState(null)
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4'>
            <div className='bg-white lg:w-1/4 md:w-full sm:w-full rounded-lg shadow2 p-8'>
                <div className='grid grid-cols-1 space-y-4'>
                    <p className='font-semibold text-lg'>Filter</p>

                    <label htmlFor="Order Id" className='w-full'>
                    <p className='font-semibold text-xsm'>Order Id</p>
                    <input type="text" placeholder='Order Id' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Driver Name" className='w-full'>
                    <p className='font-semibold text-xsm'>Driver Name</p>
                    <input type="text" placeholder='Driver Name' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Assign Date" className='w-full'>
                    <p className='font-semibold text-xsm'>Assign Date</p>n vkn fvijhngijngivrishi RISHI rATHORRE
                    <input type="date" placeholder='Assign Date' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
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
                    <th className="px-6 py-4 ">	Driver Name</th>
                    <th className="px-6 py-4">Order Date</th>
                    <th className="px-6 py-4">Due Amount</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b last:border-none border-dashed dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 ">1</td>
                    <td className="px-6 py-4 ">OID058691</td>
                    <td className="px-6 py-4 ">Ali khan</td>
                    <td className="px-6 py-4 ">May 1, 2023 06:02 PM</td>
                    <td onClick={()=>{setSeeDueAmountValue('2020')}} className="px-6 py-4 text-red-500 hover:underline duration-300 cursor-pointer first-letter:capitalize">3,036.00 SAR</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
            </div>
        </div>
        <FinancicalPopup value={seeDueAmountValue} setSeeDueAmountValue={setSeeDueAmountValue} />
    </>
  )
}

export default FinancialCollection;