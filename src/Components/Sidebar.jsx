

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
    const sidebar = [
    {
      title: 'Dashboard',
      icon: 'text-lg bx bxs-dashboard',
      url: '/',
    },
    {
      title: 'User',
      icon: 'text-lg bx bxs-user-circle',
      url: '/user',
    },
    {
      title: 'Vendor',
      icon: 'text-lg bx bx-store',
      url: '/vendor',
    },
    {
      title: 'Logistics',
      icon: 'text-lg bx bxs-truck',
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
        // {
        //   title: 'Shipment Drop',
        //   url: '/shipment-drop',
        // },
      ],
    },
    {
      title: 'Product',
      icon: 'text-lg bx bx-package',
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
        {
          title: 'Product Inventory',
          url: '/productscreen',
        },
      ],
    },
    {
      title: 'Orders',
      icon: 'text-lg bx bx-shopping-bag',
      url: '/orders',
      subcategories:[
        {
          title:'Collect list',
          url:'/Collect-list'
        },
        {
          title:'Order',
          url:'/orders'
        },
        {
          title:'Return Order',
          url:'/ReturnOrder'
        },
      ]
    },
    {
      title: 'Employees',
      icon: 'text-lg bx bx-group',
      url: '/employees',
    },
    {
      title: 'Financial Collection',
      icon: 'text-lg bx bx-money',
      url: '/financial',
    },
    {
      title: 'Settings',
      icon: 'text-lg bx bx-cog',
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
    <aside className="aside-sidebar z-[60] lg:w-1/6 md:w-1/4 sm:w-2/4 lg:block md:block sm:hidden shadow2 duration-500 heightPage overflow-y-auto">
      <ul className=''>
        {sidebar.map((category) => (
          <li className="" key={category.title}>
            {category.subcategories ? (
              <div className="dropdown-toggling">
                <Link to={`${category.subcategories[0].url}`}>
                <div
                  className={`
                  flex px-4 py-3 border-b border-blue-100/50 items-center  justify-between
                  ${
                    category.subcategories.some((subcategory) =>
                      routeLocation.includes(subcategory.url)
                    )
                      ? 'text-white bg-blue-600'
                      : 'text-blue-500 '
                  }
                  `}
                  onClick={() => handleDropdown(category.title)}
                >
                  <div className='flex  items-center gap-2'>
                  <i className={`${category.icon} opacity-80 `}></i>
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
                </Link>
                <ul
                  className={`
                  ${dropdown === category.title ? 'duration-1000 max-h-80 visible' : 'duration-300 invisible max-h-0'} 
                  `}
                  // this max height makes the animation visible only when we use the max h else if you give the height full it wont show growing height animation
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
                  <i className={`opacity-80 ${category.icon}`}></i>
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
