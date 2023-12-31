import React, { useEffect, useRef, useState } from 'react';
import calylogo from '../assets/images/calylogo.png'
import Cart from './Cart';
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    const handleResizeRemoveClassFromBody = () => {
      if (window.innerWidth > 300 && document.body.classList.contains('Sidebar-collapse')) {
        document.body.classList.remove('Sidebar-collapse');
      }
    };

    window.addEventListener('resize', handleResizeRemoveClassFromBody);

    return () => {
      window.removeEventListener('resize', handleResizeRemoveClassFromBody);
    };
  }, []);

  return (
    <div className='w-full p-4 ring-1 ring-black/5 shadow2 z-[100] justify-between flex items-center'>
      <div className='flex items-center gap-1'>
        <i onClick={() => { document.body.classList.toggle('Sidebar-collapse'); }} className='lg:hidden md:hidden sm:block bx bx-menu bx-sm'></i>
        {/* <p className='font-extrabold text-lg'>Caly</p> */}
        <img src={calylogo} alt="" />
      </div>
      <div className='flex items-center gap-4'>
      <Cart />
        {/* <Notifications/> */}
        <div className='profile relative'>
          <div onClick={() => setShowDropdown(!showDropdown)} className='flex cursor-pointer items-center gap-2'>
            <i className='bx bx-user p-2 rounded-full bg-teal-50'></i>
            <p className='font-medium text-xsm'>Admin@gmail.com</p>
            <i className='bx bx-chevron-down'></i>
          </div>
          <div
            ref={dropdown}
            className={`absolute top-10 right-0 bg-white shadows rounded-lg duration-200 ${
              showDropdown ? 'translate-y-0 translate-x-0 opacity-100 visible' : 'translate-x-4 -translate-y-4 opacity-0 invisible'
            }`}
          >
            <ul>
              <li className='flex items-center gap-2 p-2 border-b border-dashed'>
                <i className='bx text-slate-500 bx-lock-open-alt'></i>
                <p className='font-lighter text-slate-500 text-sm'>Change Password</p>
              </li>
              <li className='flex items-center gap-2 p-2 border-b last:border-b-0 border-dashed'>
                <i className='bx text-slate-500 bx-lock-open-alt'></i>
                <p className='font-lighter text-slate-500 text-sm'>Change Password</p>
              </li>
              <li className='flex items-center gap-2 p-2 border-b border-dashed'>
                <i className='bx text-slate-500 bx-pencil'></i>
                <p className='font-lighter text-slate-500 text-sm'>Edit Profile</p>
              </li>
              <li className='flex items-center gap-2 p-2 border-b border-dashed'>
                <i className='bx text-slate-500 bx-log-out scale-x-[-1]'></i>
                <p className='font-lighter text-slate-500 text-sm'>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
