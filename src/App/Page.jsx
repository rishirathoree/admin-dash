import React from 'react'
import Home from './Home.jsx/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Userpage from './User/Userpage'
import Breadcrumbs from '../Components/Breadcrumbs'
import AddUser from './User/AddUser'
import Vendor from './Vendor/Vendor'
import Addvendor from './Vendor/Addvendor'
import FinancialCollection from './FinancialCollection.jsx/FinancialCollection'
import ChangeLanguage from './Setting/ChangeLanguage/ChangeLanguage'
import Security from './Setting/Security/Security'
import VatPayout from './Setting/VatPayout/VatPayout'
import DiscountCoupon from './Setting/DiscountCoupon/DiscountCoupon'
import AddDiscountCoupons from './Setting/DiscountCoupon/AddDiscountCoupons'  
import PromotionBanner from './Setting/Promotional Banners/PromotionBanner'
import AddPromotionBanners from './Setting/Promotional Banners/AddPromotionBanners'
import ShippingCharges from './Setting/ShippingCharges/ShippingCharges'
import Product from './Product/Product/Product'
import Addproduct from './Product/Product/AddProduct'
import Brand from './Product/Brand/Brand'
import AddBrand from './Product/Brand/AddBrand'
import Section from './Product/Section/Section'
import AddSection from './Product/Section/AddSection'
import AddCategory from './Product/Category/AddCategory'
import Category from './Product/Category/Category'
// import Employees from './Employee/Employees.jsx'
// import AddEmployee from './Employee/AddEmployee.jsx'

const Page = () => {
    return (
        <>
    <div className='relative lg:w-5/6 md:w-full sm:w-full h-full heightPage overflow-y-auto bg-[#F5F8FA]'>
    <Breadcrumbs />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Userpage />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/addvendor" element={<Addvendor />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addemployees" element={<AddEmployee />} />
        <Route path="/financial" element={<FinancialCollection />} />
        <Route path="/change-language" element={<ChangeLanguage />} />
        <Route path="/change-password" element={<Security />} />
        <Route path="/Vat-Payout" element={<VatPayout/>} />
        <Route path="/Discount-coupons" element={<DiscountCoupon/>} />
        <Route path="/Add-Discount-coupons" element={<AddDiscountCoupons/>} />
        <Route path="/Promotional-banner" element={<PromotionBanner/>} />
        <Route path="/Add-Promotional-banner" element={<AddPromotionBanners/>} />
        <Route path="/Shipping-charges" element={<ShippingCharges/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/add-Product" element={<Addproduct/>} />
        <Route path="/Brand" element={<Brand/>} />
        <Route path="/AddBrand" element={<AddBrand/>} />
        <Route path="/Sections" element={<Section/>} />
        <Route path="/AddSection" element={<AddSection/>} />
        <Route path="/addCategory" element={<AddCategory/>} />
        <Route path="/Category" element={<Category/>} />
    </Routes>
<Footer />
    </div>
    
    </>
  ) 
}

export default Page


const Employees = () => {
    const dummyArray = Array(2).fill(1)
  return (
    <>
    <div className='px-8 w-full pb-12 space-y-8'>
        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-4'>
            <div className='bg-white lg:w-1/4 md:w-full sm:w-full rounded-lg shadow2 p-8'>
                <div className='grid grid-cols-1 space-y-4'>
                    <p className='font-semibold text-lg'>Filter</p>

                    <label htmlFor="Employee Id" className='w-full'>
                    <p className='font-semibold text-xsm'>Employee Id</p>
                    <input type="text" placeholder='User Id' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Email" className='w-full'>
                    <p className='font-semibold text-xsm'>Email</p>
                    <input type="text" placeholder='Email' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Mobile Number" className='w-full'>
                    <p className='font-semibold text-xsm'>Mobile Number</p>
                    <input type="text" placeholder='Mobile Number' className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded' />
                    </label>

                    <label htmlFor="Credit Available" className='w-full'>
                    <p className='font-semibold text-xsm'>Select Designation</p>
                    <select className='w-full text-xsm font-light text-slate-500 focus:outline-none outline-none ring-1 ring-black/5 p-3 rounded'><option value="hey">Select Designation</option></select>
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
                    <th className="px-6 py-4 w-full">Name</th>
                    <th className="px-6 py-4">Number</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Designation</th>
                    <th className="px-6 py-4">Order Created</th>
                    <th className="px-6 py-4">Order Amnt</th>
                    <th className="px-6 py-4">City</th>
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
                    <td className="px-6 py-4 cursor-pointer">CALYCID01</td>
                    <td className="px-6 py-4 cursor-pointer"><p>Test User Store</p></td>
                    <td className="px-6 py-4 cursor-pointer">8962274421</td>
                    <td className="px-6 py-4 cursor-pointer first-letter:capitalize">rishi@gmail.com</td>
                    <td className="px-6 py-4 cursor-pointer first-letter:capitalize">marketer</td>
                    <td className="px-6 py-4 cursor-pointer">8962274421</td>
                    <td className="px-6 py-4 cursor-pointer">0</td>
                    <td className="px-6 py-4 first-letter:capitalize">riyadh</td>
                    <td className="flex items-center px-6 py-8 space-x-3 text-center">
                      <div className="flex gap-4 items-center ">
                        <i className="bx cursor-pointer bx-sm bx-pencil"></i>
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


const AddEmployee = () => {
    return (
      <div className='px-8 w-full pb-12 space-y-8'>
          <div className='bg-white shadow2 w-full space-y-4 rounded-lg p-8'>
          <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
  
  {/* Name Inpit */}
  <label htmlFor="name" className='w-full space-y-2'>
  <p className='font-medium text-xsm'>Name</p>
  <input type="text" placeholder='User Name' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
  </label>   
  
  {/* for email */}
  <label htmlFor="Email" className='w-full space-y-2'>
  <p className='font-medium text-xsm'>Email</p>
  <input type="text" placeholder='Email Address' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
  </label>  
  
  {/* for mobile no. */}
  <label htmlFor="Class" className='w-full space-y-2'>
  <p className='font-medium text-xsm'>Mobile Number</p>
  <input type="text" placeholder='Mobile Number' className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
  </label> 
  
  {/* for city */}
  <label htmlFor="City" className='w-full space-y-2'>
  <p className='font-medium text-xsm'>City</p>
  <input type="text" placeholder='Enter City' value='admininfo@gmail.com' className='ring-1 valid:bg-blue-50 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
  </label> 
  
  {/* for Employees */}
  <label htmlFor="City" className='w-full space-y-2'>
  <p className='font-medium text-xsm'>Select Employees</p>
  <select type="text" placeholder='Select Employees'  className='ring-1 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' ><option value="select Employees">Select Employees</option></select>
  </label> 
  
  {/* for Password */}
  <label htmlFor="City" className='w-full space-y-2'>
  <p className='font-medium text-xsm'>Password</p>
  <input type="text" placeholder='Password' value='*****' className='ring-1 valid:bg-blue-50 ring-black/5 rounded p-3 w-full font-lighter outline-none focus:outline-none focus:ring-1 focus:ring-black/70 duration-500 text-xsm' />
  </label> 
  
  </div>
  
  
  
  {/* form end here */}
  
  <button className='px-3 py-2 flex justify-end items-end bg-blue-500 hover:text-white text-sm mt-4 font-semibold rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Save</button>
  
      </div>
          
  
      </div>
    )
  }
  