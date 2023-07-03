import React from 'react'
import { Link } from 'react-router-dom'

const Userpage = () => {
    const dummyArray = Array(10).fill(1)
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4'>
            <div className='bg-white lg:w-1/4 md:w-full sm:w-full h-full rounded-lg shadow2 p-8'>
                <div className='grid grid-cols-1 space-y-4'>
                    <p className='font-semibold text-lg'>Filter</p>

                    <label htmlFor="email" className='w-full'>
                    <p className='font-semibold text-xsm'>Email</p>
                    <input type="text" placeholder='User Id' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="email" className='w-full'>
                    <p className='font-semibold text-xsm'>Email</p>
                    <input type="text" placeholder='User Store' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Phone No." className='w-full'>
                    <p className='font-semibold text-xsm'>Phone No.</p>
                    <input type="text" placeholder='User Phone.No' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Credit Available" className='w-full'>
                    <p className='font-semibold text-xsm'>Credit Available</p>
                    <select className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded'><option value="hey">select</option></select>
                    </label>

                    <label htmlFor="Verified" className='w-full'>
                    <p className='font-semibold text-xsm'>Verified</p>
                    <select className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded'><option value="hey">select</option></select>
                    </label>

                    <label htmlFor="User-class" className='w-full'>
                    <p className='font-semibold text-xsm'>User class</p>
                    <select className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded'><option value="hey">select</option></select>
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
                    <th className="px-6 py-4">User Id</th>
                    <th className="px-6 py-4">Store Name</th>
                    <th className="px-6 py-4">Manager</th>
                    <th className="px-6 py-4">Phone No.</th>
                    <th className="px-6 py-4">Verify</th>
                    <th className="px-6 py-4">Credit Available</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Order Count</th>
                    <th className="px-6 py-4">Reg. Date</th>
                    <th className="px-6 py-4">City</th>
                    <th className="px-6 py-4">Class</th>
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
                    <td className="px-6 py-4 cursor-pointer">#</td>
                    <td className="px-6 py-4 cursor-pointer">CALYCID01</td>
                    <td className="px-6 py-4 cursor-pointer">Test User Store</td>
                    <td className="px-6 py-4 cursor-pointer">
                        <div className='flex w-max items-center gap-2'>
                            <i className='bx bx-user bg-blue-200 bx-sm p-1 rounded'></i>
                            <p>صادق البكري</p>
                        </div>
                    </td>
                    <td className="px-6 py-4 cursor-pointer">
                        <div className='p-1 rounded bg-green-200 text-xsm font-semibold text-center text-green-500'>Verified</div>
                    </td>
                    <td className="px-6 py-4 cursor-pointer">8962274421</td>
                    <td className="px-6 py-4 cursor-pointer">8962274421</td>
                    <td className="px-6 py-4 cursor-pointer">8962274421</td>
                    <td className="px-6 py-4 cursor-pointer">8962274421</td>
                    <td className="px-6 py-4 cursor-pointer">8962274421</td>
                    <td className="px-6 py-4 cursor-pointer">8962274421</td>
                    <td className="px-6 py-4">Active</td>
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

export default Userpage