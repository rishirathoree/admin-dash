import React from 'react'
import { Link } from 'react-router-dom'
import pfp from '../../assets/images/pfp.jpg'
const Userdetail = () => {
    const dummyArray = Array(5).fill(1)
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
      <div className='p-4 rounded-lg shadow2 bg-white space-y-6'>
        <p className='font-regular text-md'>User Information:</p>
        <div className='flex gap-6'>
          <div className='w-40 h-40 shadow2 rounded-lg overflow-hidden bg-gray-100 shadow2'>
            <img src={pfp} className='w-full h-full object-cover' alt="" />
          </div>
          <div className='space-y-2'>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>User Store :</p> <p className='font-semibold text-xsm'>Test User Store</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>User Id :</p> <p className='font-semibold text-xsm'>#CALYCID01</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>Email :</p> <p className='font-semibold text-xsm'>testuser@gmail.com</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>Mobile Number :</p> <p className='font-semibold text-xsm'>8962274421</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>Registration Date :</p> <p className='font-semibold text-xsm'>Mar 24, 2023 1:09 AM</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>Credit Available :</p> <p className='font-semibold text-blue-600 text-xsm'>4,590.91 SAR</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>User Class :</p> <p className='font-semibold text-xsm'>Customer C</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>Order Counts :</p> <p className='font-semibold text-xsm'>13</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>City :</p> <p className='font-semibold text-xsm'>Indore Division</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>Location :</p> <p className='font-semibold text-xsm'>Indore Indore</p></div>
            <div className='flex justify-between gap-12'><p className='font-semibold text-slate-300 text-xsm'>CR :</p> <p className='font-semibold text-xsm'>NA</p></div>
          </div>
        </div>
      </div>
        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4'>
            <div className='bg-white lg:w-1/4 md:w-full sm:w-full h-full rounded-lg shadow2 p-8'>
                <div className='grid grid-cols-1 space-y-4'>
                    <p className='font-semibold text-lg'>Filter</p>

                    <label htmlFor="Order Id" className='w-full'>
                    <p className='font-semibold text-xsm'>Order Id</p>
                    <input type="text" placeholder='Order Id' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Order Date" className='w-full'>
                    <p className='font-semibold text-xsm'>Order Date</p>
                    <input type="date" placeholder='Order Date' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Order Situtaion" className='w-full'>
                    <p className='font-semibold text-xsm'>Order Situtaion</p>
                    <select type="text" placeholder='Order Situtaion' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded'><option value="select">Select</option></select>
                    </label>
                    
                    <div className='flex items-center gap-2 justify-between w-full'>
                    <button className='w-full p-2 bg-blue-600 text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Filter</button>
                    <button className='w-full p-2 bg-gray-200 text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-black'>Reset</button>
                    </div>
                    
                </div>
            </div>
            <div className="relative overflow-x-auto sm:rounded-lg bg-white shadow2 lg:w-3/4 md:w-full sm:w-full rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className='w-full'>
              <th className="px-6 py-4">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Order Id</th>
                    <th className="px-6 py-4">Item</th>
                    <th className="px-6 py-4">Order Situation</th>
                    <th className="px-6 py-4">VAT%</th>
                    <th className="px-6 py-4">Delivery price</th>
                    <th className="px-6 py-4">Total Price</th>
                    <th className="px-6 py-4">Promo Code</th>
                    <th className="px-6 py-4">Payment Method</th>
                    <th className="px-6 py-4">Vendors</th>
                    <th className="px-6 py-4">Order Date</th>
                    <th className="px-6 py-4">Delivery Date</th>
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
                    <td className="px-6 py-4 cursor-pointer">
                        <input type="checkbox" name="" id="" />
                    </td>
                    <td className="px-6 py-4 cursor-pointer">1</td>
                    <td className="px-6 py-4 cursor-pointer">OCDBLV15513</td>
                    <td className="px-6 py-4"><p className='w-max'>1 Item</p></td>
                    
                    <td className="px-6 py-4 cursor-pointer">
                        <p className='w-max p-1 rounded bg-green-200/10 text-xsm font-semibold text-center text-blue-500'>New Order</p>
                    </td>
                    <td className="px-6 py-4 cursor-pointer">15%</td>
                    <td className="px-6 py-4 cursor-pointer">0 SAR</td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>538.2 SAR</p></td>
                    <td className="px-6 py-4 cursor-pointer">NA</td>
                    <td className="px-6 py-4 cursor-pointer">COD</td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>1 Vendor</p></td>
                    <td className="px-6 py-4 cursor-pointer">
                      <p className='w-max'>Jun 20, 2023</p>
                      <p className='w-max'>5:30 PM</p>
                    </td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>2023-06-25</p> </td> 
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                      <i className="bx cursor-pointer bx-sm bx-pencil"></i>
                        <Link to="/userdetail"><i className="bx cursor-pointer bx-sm bxs-card"></i></Link>
                        
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

export default Userdetail