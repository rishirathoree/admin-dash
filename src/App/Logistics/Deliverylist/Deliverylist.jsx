import React, { useState } from 'react'
import CollectShipmentModal from '../CollectShipment/CollectShipmentModal'
const Deliverylist = () => {
    const dummyArray = Array(2).fill(1)
    const [selectDriver,setSelectDriver] = useState(null)
    console.log(selectDriver)
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4'>
            <div className='bg-white lg:w-1/4 md:w-full sm:w-full rounded-lg shadow2 p-8'>
                <div className='grid grid-cols-1 space-y-4'>
                    <p className='font-semibold text-lg'>Filter</p>

                    <label htmlFor="Driver Id" className='w-full'>
                    <p className='font-semibold text-xsm'>Driver Id</p>
                    <input type="text" placeholder='Driver Id' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Driver Name" className='w-full'>
                    <p className='font-semibold text-xsm'>Driver Name</p>
                    <input type="text" placeholder='Select Driver Name' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Driver Number" className='w-full'>
                    <p className='font-semibold text-xsm'>Driver Number</p>
                    <input type="text" placeholder='Select Driver' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Location" className='w-full'>
                    <p className='font-semibold text-xsm'>Location</p>
                    <input type="text" placeholder='Location' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
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
                    <th className="px-6 py-4">Driver Id</th>
                    <th className="px-6 py-4 w-full">Name</th>
                    <th className="px-6 py-4"><p className="w-max">Number</p></th>
              <th className="px-6 py-4"><p className="w-max">Monthly Delivered</p></th>
              <th className="px-6 py-4"><p className="w-max">Collected Cash</p></th>
              <th className="px-6 py-4"><p className="w-max">Wallet Amount</p></th>
              <th className="px-6 py-4"><p className="w-max">Action</p></th>
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
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>63458196435</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>0</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>0.00 SAR</p></td>
                    <td className="px-6 py-4 cursor-pointer"><p className='w-max'>130.00 SAR</p></td>
                    <td className="px-6 py-4 cursor-pointer">
                        <div className='flex items-center gap-2'>
                            <i className='bx bxs-toggle-left bx-sm'></i>
                            <i className='bx bx-pencil bx-sm'></i>
                            <i class='bx bx-right-arrow-alt bx-sm'></i>
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
        <CollectShipmentModal driver={selectDriver} setSelectDriver={setSelectDriver  } />
    </>
  )
}

export default Deliverylist