import React from 'react';

const Navbar = () => {

  return (
    <div className='w-full p-4 ring-1 ring-black/5 shadow2 z-[100] justify-between flex items-center'>
      <p className='font-extrabold text-lg'>Caly</p>
      <div className='flex items-center gap-4'>
        <i className='bx cursor-pointer text-slate-400 bx-bell'></i>
        <div className='profile'>
          <div className='flex items-center gap-2'>
            <i className='bx bx-user p-2 rounded-full bg-teal-50'></i>
            <p className='font-medium text-xsm'>Admin@gmail.com</p>
            <i className='bx bx-chevron-down'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
