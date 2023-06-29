import React from 'react'
import Home from './Home.jsx/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Userpage from './User/Userpage'
import Breadcrumbs from '../Components/Breadcrumbs'
import AddUser from './User/AddUser'
import Vendor from './Vendor/Vendor'

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
    </Routes>
<Footer />
    </div>
    
    </>
  ) 
}

export default Page