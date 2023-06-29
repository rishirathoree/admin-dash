import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation()
    const sidebar = [
        {
          title: 'Dashboard',
          icon: 'bx bxs-dashboard',
          url: '/',
        },
        {
          title: 'User',
          icon: 'bx bxs-user-circle',
          url: '/user',
        },
        {
          title: 'Vendor',
          icon: 'bx bx-store',
          url: '/vendor',
        },
        {
          title: 'Logistics',
          icon: 'bx bxs-truck',
          url: '/logistics',
        },
        {
          title: 'Product',
          icon: 'bx bx-package',
          url: '/product',
        },
        {
          title: 'Orders',
          icon: 'bx bx-shopping-bag',
          url: '/orders',
        },
        {
          title: 'Employees',
          icon: 'bx bx-group',
          url: '/employees',
        },
        {
          title: 'Financial Collection',
          icon: 'bx bx-money',
          url: '/financial',
        },
        {
          title: 'Settings',
          icon: 'bx bx-cog',
          url: '/settings',
        },
      ];
      
  return (
    <aside className='lg:w-1/6 md:w-1/4 sm:w-2/4 lg:block md:block sm:hidden border-r duration-500'>
        <ul className=''>
            {sidebar.map((item,index)=>{
                return(
            <Link to={`${item.url}`}><li className={`flex gap-2 items-center p-3  border-b ${location.pathname === item.url ? 'bg-blue-500 ' : ''}`}><i className={`${item.icon} text-blue-500 ${location.pathname === item.url ? 'text-white ' : ''}`}></i><p className={`${location.pathname === item.url ? 'text-white ' : ''} font-lighter text-sm text-blue-500`}>{item.title}</p></li></Link>
                )
            })}
        </ul>
    </aside>
  )
}

export default Sidebar