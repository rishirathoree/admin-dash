import React from 'react'
import Barchart from '../../Components/Barchart'
import Linechart from '../../Components/Linechart'
import Piechart from '../../Components/Piechart'

const Home = () => {
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
      <div className='flex items-center gap-2 flex-wrap'>
        <label htmlFor="for-email">
          <p  className='font-semibold text-xsm'>Date from</p>
          <input id='email' type="date" className='p-2 ring-1 ring-black/5 rounded focus:outline-none outline-none text-xsm font-lighter lg:w-40 md:w-40 sm:w-20'/>
        </label>

        <label htmlFor="for-email">
          <p  className='font-semibold text-xsm'>Date to</p>
          <input id='email' type="date" className='p-2 ring-1 ring-black/5 rounded focus:outline-none outline-none text-xsm font-lighter lg:w-40 md:w-40 sm:w-20'/>
        </label>

        <button className='px-3 py-2 bg-blue-600 text-sm mt-4 font-semibold rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Search</button>
        <button className='px-3 py-2 bg-gray-200 text-sm mt-4 font-semibold rounded ring-1 ring-black/5 text-black'>Clear</button>

      </div>

      {/* <div className='grid grid-cols-3 gap-4'> */}
      <Barchart />
      {/* <Linechart />
      <Piechart />
      </div> */}

      <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-8'>

        <div className='cards p-8 bg-white rounded-lg lg:col-start-1 lg:col-end-3 md:col-start-1 md:col-end-3 sm:col-start-1 col-end-1 shadow2'>
          <div className='flex gap-2'><p className='font-semibold text-4xl'>26,591.13</p><span className='font-semibold text-slate-400 text-md'>Sar</span></div>
          <p className='font0-semibold text-md text-slate-300'>Total Sales</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg  shadow2'>
          <p className='font-semibold text-4xl'>26</p>
          <p className='font0-semibold text-md text-slate-300'>Total Users</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg  shadow2'>
          <p className='font-semibold text-4xl'>26</p>
          <p className='font0-semibold text-md text-slate-300'>Total Users</p>
        </div>

      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>

        <div className='cards p-8 bg-white rounded-lg  shadow2'>
          <p className='font-semibold text-4xl'>10</p>
          <p className='font0-semibold text-md text-slate-300'>Total Vendor</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg  shadow2'>
          <p className='font-semibold text-4xl'>26</p>
          <p className='font0-semibold text-md text-slate-300'>Total Order Delivered</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg shadow2'>
          <p className='font-semibold text-4xl'>26</p>
          <p className='font0-semibold text-md text-slate-300'>Total Collect Orders</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg shadow2'>
          <p className='font-semibold text-4xl'>26</p>
          <p className='font0-semibold text-md text-slate-300'>Total Not Collect Order</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg shadow2'>
          <p className='font-semibold text-4xl'>26</p>
          <p className='font0-semibold text-md text-slate-300'>Total Not Delivered Order</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg shadow2'>
          <p className='font-semibold text-4xl'>26</p>
          <p className='font0-semibold text-md text-slate-300'>Total Return Order</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg shadow2'>
        <div className='flex gap-2'><p className='font-semibold text-4xl'>26,591.13</p><span className='font-semibold text-slate-400 text-md'>Sar</span></div>

          <p className='font0-semibold text-md text-slate-300'>Total Supplier Due Amount</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg shadow2'>
        <div className='flex gap-2'><p className='font-semibold text-4xl'>26,591.13</p><span className='font-semibold text-slate-400 text-md'>Sar</span></div>

          <p className='font0-semibold text-md text-slate-300'>Total Credit Note</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg shadow2'>
          <p className='font-semibold text-4xl'>26</p>
          <p className='font0-semibold text-md text-slate-300'>Total Late Order Delivered</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg shadow2'>
        <div className='flex gap-2'><p className='font-semibold text-4xl'>26,591.13</p><span className='font-semibold text-slate-400 text-md'>Sar</span></div>

          <p className='font0-semibold text-md text-slate-300'>Inside Riyadh Shipping Charges</p>
        </div>

        <div className='cards p-8 bg-white rounded-lg shadow2'>
        <div className='flex gap-2'><p className='font-semibold text-4xl'>26,591.13</p><span className='font-semibold text-slate-400 text-md'>Sar</span></div>

          <p className='font0-semibold text-md text-slate-300'>Outside Riyadh Shipping Charges</p>
        </div>

      </div>

    </div>
    </>
  )
}

export default Home