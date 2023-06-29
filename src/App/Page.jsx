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
import Addemployee from './Employee/Addemployee'
import Addemployees from './Employee/Addemployee'

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
    </Routes>
<Footer />
    </div>
    
    </>
  ) 
}

export default Page