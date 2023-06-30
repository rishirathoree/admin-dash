import React from 'react'

const Brand = () => {
    const dummyArray = Array(10).fill(1)
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
            
            <div className="relative overflow-x-auto sm:rounded-lg bg-white shadow2 lg:w-w-full md:w-full sm:w-full rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-400 border-b border-dashed uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr className='w-full'>
              <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Brand Name</th>
                    <th className="px-6 py-4">Brand Image</th>
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
                    <td className="px-6 py-4 cursor-pointer">1</td>
                    <td className="px-6 py-4 cursor-pointer">
                        <div>
                            <p>Cashback Offer</p>
                            <p className='font-light text-slate-400'>This promocode for the cashback</p>
                        </div>
                    </td>
                    <td className="px-6 py-4 cursor-pointer">
                        <i className='bx bx-image p-4 bx-md bg-blue-50 rounded-lg text-slate-400'></i>
                    </td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex p-1 w-12 h-6 rounded-full ring-1 ring-black/5 items-center ">
                      <div className="flex bg-red-500/60 justify-center w-4 h-4 rounded-full ring-1 ring-black/5 items-center "></div>
                      </div>
                      <i className='bx bxs-pencil bx-sm'></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
    </>
  )
}

export default Brand