import React, { useEffect, useRef, useState } from 'react'
import CollectShipmentModal from '../CollectShipment/CollectShipmentModal'
const OrderDelivery = () => {
    const dummyArray = Array(2).fill(1)
    const thisli = useRef()
    const [selectDriver,setSelectDriver] = useState(null)
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

                    <label htmlFor="User Store" className='w-full'>
                    <p className='font-semibold text-xsm'>User Store</p>
                    <input type="text" placeholder='Select User Store' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Order Date" className='w-full'>
                    <p className='font-semibold text-xsm'>Order Date</p>
                    <input type="date" className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                           
                    <li ref={thisli} className='flex border-b border-blue-100/50 items-center gap-2 p-2 pl-12'></li>
                    
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
                    <th className="px-6 py-4">Collection Id</th>
                    <th className="px-6 py-4 w-full">Vendor Store</th>
                    <th className="px-6 py-4"><p className="w-max">Order Status</p></th>
              <th className="px-6 py-4"><p className="w-max">User Class</p></th>
              <th className="px-6 py-4"><p className="w-max">Total Sales Comission</p></th>
              <th className="px-6 py-4"><p className="w-max">City</p></th>
              <th className="px-6 py-4"><p className="w-max">Vendors</p></th>
              <th className="px-6 py-4"><p className="w-max">Order Items</p></th>
              <th className="px-6 py-4"><p className="w-max">Total Amount</p></th>
              <th className="px-6 py-4"><p className="w-max">Payment Method</p></th>
              <th className="px-6 py-4"><p className="w-max">Order Date</p></th>
              <th className="px-6 py-4"><p className="w-max">Delivery Date</p></th>
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
                    <td className="px-6 py-4 cursor-pointer hover:text-blue-600"><p className='w-max'>CALYVID06-801312</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>Test User Store</p></td>
                    <td className="px-6 py-4 cursor-pointer">
                    <div className='flex items-center gap-2 w-max'>
                    <i onClick={()=>{setSelectDriver(index)}} className='bx p-2 rounded-md bg-blue-200/50 bx-sm bxs-truck'></i>
                    <p className='font-semibold text-xsm'>Rish Rathore</p>
                    </div></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max font-semibold text-[10px] text-blue-600 bg-blue-400/30 rounded px-2 py-1'>New Order</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>638.67 SAR</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>Indore</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>1 Vendor</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>1 Item</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>4590.43 SAR</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>COD</p></td>
                    <td className="px-6 py-4 cursor-pointer">
                      <p className='w-max'>Jun 20, 2023</p>
                      <span>5:30 PM</span>
                      </td>
                    <td className="px-6 py-4 cursor-pointer">
                        <p className='w-max'>Jun 20, 2023</p>
                        <span>5:30 PM</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
        </div>
        <CollectShipmentModal driver={selectDriver} setSelectDriver={setSelectDriver  } />
    </>
  )
}

export default OrderDelivery