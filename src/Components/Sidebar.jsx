

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
    const sidebar = [
    {
      title: 'Dashboard',
      icon: 'bx-sm bx bxs-dashboard',
      url: '/',
    },
    {
      title: 'User',
      icon: 'bx-sm bx bxs-user-circle',
      url: '/user',
    },
    {
      title: 'Vendor',
      icon: 'bx-sm bx bx-store',
      url: '/vendor',
    },
    {
      title: 'Logistics',
      icon: 'bx-sm bx bxs-truck',
      url: '/logistics',
      subcategories: [
        {
          title: 'Collect Shipment',
          url: '/collect-shipment',
        },
        {
          title: 'Order Delivery',
          url: '/order-delivery',
        },
        {
          title: 'Delivery List',
          url: '/delivery-list',
        },
        {
          title: 'Shipment Drop',
          url: '/shipment-drop',
        },
      ],
    },
    {
      title: 'Product',
      icon: 'bx-sm bx bx-package',
      url: '/product',
      subcategories: [
        {
          title: 'Product',
          url: '/Product',
        },
        {
          title: 'Brand',
          url: '/Brand',
        },
        {
          title: 'Section',
          url: '/Sections',
        },
        {
          title: 'Category',
          url: '/Category',
        },
      ],
    },
    {
      title: 'Orders',
      icon: 'bx-sm bx bx-shopping-bag',
      url: '/orders',
      subcategories:[
        {
          title:'Collect list',
          url:'/Collect-list'
        },
        {
          title:'Order List',
          url:'/Order '
        },
        {
          title:'Return Order',
          url:'/ReturnOrder'
        },
      ]
    },
    {
      title: 'Employees',
      icon: 'bx-sm bx bx-group',
      url: '/employees',
    },
    {
      title: 'Financial Collection',
      icon: 'bx-sm bx bx-money',
      url: '/financial',
    },
    {
      title: 'Settings',
      icon: 'bx-sm bx bx-cog',
      url: '/settings',
      subcategories: [
        {
          title: 'Language',
          url: '/change-language',
        },
        {
          title: 'Security',
          url: '/change-password',
        },
        {
          title: 'Vat & Payout',
          url: '/Vat-Payout',
        },
        {
          title: 'Discount Coupon',
          url: '/Discount-coupons',
        },
        {
          title: 'Promotional Banners',
          url: '/Promotional-banner',
        },
        {
          title: 'Shipping Charges',
          url: '/Shipping-charges',
        },
      ],
    },
  ];
  
  

  const location = useLocation();
  const routeLocation = location.pathname;
  const [dropdown, setDropdown] = useState('');

  const handleDropdown = (category) => {
    setDropdown(category === dropdown ? '' : category);
  };

  return (
    <aside className="lg:w-1/6 md:w-1/4 sm:w-2/4 lg:block md:block sm:hidden shadow2 z-50 duration-500 heightPage overflow-y-auto">
      <ul className=''>
        {sidebar.map((category) => (
          <li className="" key={category.title}>
            {category.subcategories ? (
              <div className="dropdown-toggling">
                <div
                  className={`
                  flex px-4 py-3 border-b border-blue-100/50 items-center  justify-between
                  ${
                    category.subcategories.some((subcategory) =>
                      routeLocation.includes(subcategory.url)
                    )
                      ? 'text-white bg-blue-600 hover:bg-blue-600'
                      : 'text-blue-500 '
                  }
                  `}
                  onClick={() => handleDropdown(category.title)}
                >
                  <div className='flex  items-center gap-2'>
                  <i className={`${category.icon}`}></i>
                  <p className={`duration-500
                  ${category.subcategories.some((subcategory) => routeLocation.includes(subcategory.url)) ? 'text-xsm font-medium' : 'text-xsm font-medium'}
                  `}>{category.title}</p>
                  </div>
                  <i
                    className={`
                    bx ${
                      dropdown === category.title
                        ? 'bx-chevron-up'
                        : 'bx-chevron-down'
                    }
                    `}
                  ></i>
                </div>
                <ul
                  className={`duration-500 
                  ${dropdown === category.title ? 'block' : 'hidden'}
                  `}
                >
                  {category.subcategories.map((subcategory) => (
                    <Link to={subcategory.url} key={subcategory.title}>
                      <li
                        className={`
                          flex border-b border-blue-100/50 items-center gap-2 p-2 pl-12 
                          ${
                            routeLocation === subcategory.url
                              ? 'text-black bg-[#E7E7FF]'
                              : 'text-slate-500'
                          }
                        `}
                      >
                        {/* subcategories icons and p tag */}
                        <i className={`${subcategory.icon}`}></i>
                        <i className='w-[4px] h-[4px] rounded-full bg-blue-600/50'></i>
                        <p className="font-lighter text-blue-600 text-xsm">
                          {subcategory.title}
                        </p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : (
              <Link to={category.url}>
                <div
                onClick={()=>{setDropdown(category)}}
                  className={`flex border-b border-blue-100/50 px-4 py-3 ${
                    routeLocation === category.url
                      ? 'text-white bg-blue-600'
                      : 'text-blue-600'
                  } 
                  
                  items-center justify-between`}
                >
                  <div className='flex  items-center gap-2'>
                  <i className={`${category.icon}`}></i>
                  <p className={`duration-500 ${routeLocation === category.url ? 'text-xsm font-medium' : 'text-xsm font-medium'}`}>{category.title}</p>
                  </div>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
