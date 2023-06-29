import React from 'react'

const Vendor = () => {
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4'>
            <div className='bg-white lg:w-1/4 md:w-full sm:w-full h-full rounded-lg shadow2 p-8'>
                <div className='grid grid-cols-1 space-y-4'>
                    <p className='font-semibold text-lg'>Filter</p>

                    <label htmlFor="Vendor Id" className='w-full'>
                    <p className='font-semibold text-xsm'>Vendor Id</p>
                    <input type="text" placeholder='Vendor Id' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Vendor Store" className='w-full'>
                    <p className='font-semibold text-xsm'>Vendor Store</p>
                    <input type="text" placeholder='Vendor Store' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Phone No." className='w-full'>
                    <p className='font-semibold text-xsm'>Phone No.</p>
                    <input type="text" placeholder='User Phone.No' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>
                    
                    <div className='flex items-center gap-2 justify-between w-full'>
                    <button className='w-full p-2 bg-blue-600 text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Filter</button>
                    <button className='w-full p-2 bg-gray-200 text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-black'>Reset</button>
                    </div>
                    
                </div>
            </div>
            <div className="relative overflow-x-auto sm:rounded-lg bg-white shadow2 lg:w-3/4 md:w-full sm:w-full rounded-lg">
          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1 p-4'>
        
        {/* vendor card */}
        <div className='p-4 bg-gray-100/40 ring-1 ring-black/10 rounded-lg space-y-2'>
            <div className='flex items-start justify-between'>
                <div className='flex gap-2'>
                    <div className='w-20 h-20 bg-white rounded-lg shadow2'></div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-blue-600 text-xsm'>LC Company</p>
                    </div>
                </div>
                <div>
                    <i className='bx bx-pencil shadows bg-blue-200/10 p-2 rounded-lg'></i>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
            </div>
        </div>

        <div className='p-4 bg-gray-100/40 ring-1 ring-black/10 rounded-lg space-y-2'>
            <div className='flex items-start justify-between'>
                <div className='flex gap-2'>
                    <div className='w-20 h-20 bg-white rounded-lg shadow2'></div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-blue-600 text-xsm'>LC Company</p>
                    </div>
                </div>
                <div>
                    <i className='bx bx-pencil shadows bg-blue-200/10 p-2 rounded-lg'></i>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
            </div>
        </div>

        <div className='p-4 bg-gray-100/40 ring-1 ring-black/10 rounded-lg space-y-2'>
            <div className='flex items-start justify-between'>
                <div className='flex gap-2'>
                    <div className='w-20 h-20 bg-white rounded-lg shadow2'></div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-blue-600 text-xsm'>LC Company</p>
                    </div>
                </div>
                <div>
                    <i className='bx bx-pencil shadows bg-blue-200/10 p-2 rounded-lg'></i>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
            </div>
        </div>
        <div className='p-4 bg-gray-100/40 ring-1 ring-black/10 rounded-lg space-y-2'>
            <div className='flex items-start justify-between'>
                <div className='flex gap-2'>
                    <div className='w-20 h-20 bg-white rounded-lg shadow2'></div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-blue-600 text-xsm'>LC Company</p>
                    </div>
                </div>
                <div>
                    <i className='bx bx-pencil shadows bg-blue-200/10 p-2 rounded-lg'></i>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
            </div>
        </div>
        <div className='p-4 bg-gray-100/40 ring-1 ring-black/10 rounded-lg space-y-2'>
            <div className='flex items-start justify-between'>
                <div className='flex gap-2'>
                    <div className='w-20 h-20 bg-white rounded-lg shadow2'></div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-blue-600 text-xsm'>LC Company</p>
                    </div>
                </div>
                <div>
                    <i className='bx bx-pencil shadows bg-blue-200/10 p-2 rounded-lg'></i>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
            </div>
        </div>
        <div className='p-4 bg-gray-100/40 ring-1 ring-black/10 rounded-lg space-y-2'>
            <div className='flex items-start justify-between'>
                <div className='flex gap-2'>
                    <div className='w-20 h-20 bg-white rounded-lg shadow2'></div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-xsm'>LC Company</p>
                        <p className='font-semibold text-blue-600 text-xsm'>LC Company</p>
                    </div>
                </div>
                <div>
                    <i className='bx bx-pencil shadows bg-blue-200/10 p-2 rounded-lg'></i>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='font-semibold text-xsm'>Total Products</p>
                    <span className='text-center text-xsm'>2</span>
                </div>
            </div>
        </div>

          </div>
        </div>
            </div>
        </div>
    </>
  )
}

export default Vendor