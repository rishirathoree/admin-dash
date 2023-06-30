import React from 'react'
import Home from './Home.jsx/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Userpage from './User/Userpage'
import Breadcrumbs from '../Components/Breadcrumbs'
import AddUser from './User/AddUser'
import Vendor from './Vendor/Vendor'
import Addvendor from './Vendor/Addvendor'
import Employees from './Employee/Enployees'
import Addemployees from './Employee/Addemployee'
import FinancialCollection from './FinancialCollection.jsx/FinancialCollection'
import ChangeLanguage from './Setting/ChangeLanguage/ChangeLanguage'
import Security from './Setting/Security/Security'
import VatPayout from './Setting/VatPayout/VatPayout'
import DiscountCoupon from './Setting/DiscountCoupon/DiscountCoupon'
import AddDiscountCoupons from './Setting/DiscountCoupon/AddDiscountCoupons'  
import PromotionBanner from './Setting/Promotional Banners/PromotionBanner'
import AddPromotionBanners from './Setting/Promotional Banners/AddPromotionBanners'
import ShippingCharges from './Setting/ShippingCharges/ShippingCharges'

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
        <Route path="/addemployees" element={<Addemployees />} />
        <Route path="/financial" element={<FinancialCollection />} />
        <Route path="/change-language" element={<ChangeLanguage />} />
        <Route path="/change-password" element={<Security />} />
        <Route path="/Vat-Payout" element={<VatPayout/>} />
        <Route path="/Discount-coupons" element={<DiscountCoupon/>} />
        <Route path="/Add-Discount-coupons" element={<AddDiscountCoupons/>} />
        <Route path="/Promotional-banner" element={<PromotionBanner/>} />
        <Route path="/Add-Promotional-banner" element={<AddPromotionBanners/>} />
        <Route path="/Shipping-charges" element={<ShippingCharges/>} />
    </Routes>
<Footer />
    </div>
    
    </>
  ) 
}

export default Page