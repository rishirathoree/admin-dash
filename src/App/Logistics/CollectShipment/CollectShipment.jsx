import React, { useState } from 'react'
import CollectShipmentModal from './CollectShipmentModal'
const CollectShipment = () => {
    const dummyArray = Array(2).fill(1)
    const [selectDriver,setSelectDriver] = useState(null)
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4'>
            <div className='bg-white lg:w-1/4 md:w-full sm:w-full rounded-lg shadow2 p-8'>
                <div className='grid grid-cols-1 space-y-4'>
                    <p className='font-semibold text-lg'>Filter</p>

                    <label htmlFor="Collection Id" className='w-full'>
                    <p className='font-semibold text-xsm'>Collection Id</p>
                    <input type="text" placeholder='Collection Id' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Vendor Store" className='w-full'>
                    <p className='font-semibold text-xsm'>Vendor Store</p>
                    <input type="text" placeholder='Vendor Store' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Driver Name" className='w-full'>
                    <p className='font-semibold text-xsm'>Driver Name</p>
                    <input type="text" placeholder='Driver Name' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
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
                    <th className="px-6 py-4">Collection Id</th>
                    <th className="px-6 py-4 w-full">Vendor Store</th>
                    <th className="px-6 py-4">Assigned Driver</th>
                    <th className="px-6 py-4">User Count</th>
                    <th className="px-6 py-4">Order Count</th>
                    <th className="px-6 py-4">Total Price</th>
                    <th className="px-6 py-4">Inventory</th>
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
                    <td className="px-6 py-4 cursor-pointer hover:text-blue-600"><p className='w-max'>CALYVID06-801312</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>Test User Store</p></td>
                    <td className="px-6 py-4 cursor-pointer">
                    <div className='flex items-center gap-2 w-max'>
                    <i onClick={()=>{setSelectDriver(index)}} className='bx p-2 rounded-md bg-blue-200/50 bx-sm bxs-truck'></i>
                    <p className='font-semibold text-xsm'>Rish Rathore</p>
                    </div></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>5 Orders</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>5 Orders</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>20003.93 SAR</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>مشكاة المصباح فرع الرياض</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max text-[10px] px-2 py-1 hover:shadow-md duration-300 rounded-lg bg-blue-800/10 text-blue-700 font-medium'>Emergency Collect</p></td>
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

export default CollectShipment