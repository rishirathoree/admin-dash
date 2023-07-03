import React from 'react'
import { Link } from 'react-router-dom'
const Userorderdetail = () => {
    const dummyArray = Array(5).fill(1)
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
      <div className='p-4 rounded-lg shadow2 bg-white space-y-6'>
        <p className='font-semibold text-md'>Order Information:</p>
          <div className='space-y-2'>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-400 text-xsm'>User Store :</p> <p className='font-semibold text-xsm'>Test User Store</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-400 text-xsm'>Order Id :</p> <p className='font-semibold text-xsm'>OID208735</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-400 text-xsm'>User Number :</p> <p className='font-semibold text-xsm'>8962274421</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-400 text-xsm'>Total Price :</p> <p className='font-semibold text-xsm'>1269.6 SAR</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-400 text-xsm'>Delivery Charges :</p> <p className='font-semibold text-xsm'>0 SAR</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-400 text-xsm'>Payment Method :</p> <p className='font-semibold text-xsm'>COD</p></div>
          </div>
      </div>
        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4'>
            <div className="relative overflow-x-auto sm:rounded-lg bg-white shadow2 lg:w-full md:w-full sm:w-full rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className='w-full'>
              <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Product Id</th>
                    <th className="px-6 py-4">Product Details</th>
                    <th className="px-6 py-4">Quantity</th>
                    <th className="px-6 py-4">Total price</th>
              </tr>
            </thead>
            <tbody>
              {dummyArray.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b last:border-none border-dashed dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 cursor-pointer">1</td>
                    <td className="px-6 py-4 cursor-pointer">OCDBLV15513</td>
                    <td className="px-6 py-4 cursor-pointer">
                        <div className='flex items-center gap-2 w-max'>
                            <div className='w-20 h-20 bg-white ring-1 ring-black/5 rounded-lg'></div>
                            <div>
                            <p className='w-max'>LED Panel light 60*60 64W</p>
                            <p className='text-xsm'><span className='font-medium text-xsm text-slate-400'>Brand:</span>ENAR</p>
                            <p className='text-xsm'><span className='font-medium text-xsm text-slate-400'>Model No:</span>23453356664</p>
                            <p className='text-xsm'><span className='font-medium text-xsm text-slate-400'>Color Name:</span>YELLOW</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4"><p className='w-max'>4</p></td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">1104 SAR</td>
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

export default Userorderdetail;