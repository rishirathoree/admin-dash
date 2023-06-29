import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
    const location = useLocation()
    const routingArray = location.pathname.split('/')
    console.log(routingArray)

    return (
        <div className='px-8 py-4 w-full flex items-center justify-between'>
            <div>
            <p className='font-semibold text-md text-black uppercase'>{routingArray[routingArray.length - 1]}</p>
            <div className='flex items-center'>
                <p className='font-lighter text-xsm text-slate-400'>Home</p>
                {routingArray.map((routeName, index) => (
                    <React.Fragment key={index}>
                        {index === routingArray.length - 1 ? (
                            <span className='font-lighter text-xsm ml-1  capitalize text-slate-400'>{routeName}</span>
                        ) : (
                            <Link to={`${routeName}`}>
                                <p className='font-lighter text-xsm ml-1 capitalize text-slate-400'>{routeName}</p>
                            </Link>
                        )}
                    </React.Fragment>
                ))}
            </div>
            </div>
            {location.pathname === '/user' && <Link to="/adduser"><button className='px-3 py-2 bg-blue-500 hover:text-white text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Add User</button></Link>}
            {location.pathname === '/adduser' && <Link to="/user"><button className='px-3 py-2 bg-blue-500 hover:text-white text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Go to User List</button></Link>}
            {location.pathname === '/vendor' && <Link to="/addvendor"><button className='px-3 py-2 bg-blue-500 hover:text-white text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Add New Vendor</button></Link>}
            {location.pathname === '/addvendor' && <Link to="/vendor"><button className='px-3 py-2 bg-blue-500 hover:text-white text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Go to Vendor</button></Link>}
            {location.pathname === '/employees' && <Link to="/addemployees"><button className='px-3 py-2 bg-blue-500 hover:text-white text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Add Employees</button></Link>}
            {location.pathname === '/addemployees' && <Link to="/employees"><button className='px-3 py-2 bg-blue-500 hover:text-white text-sm mt-4 font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg'>Go to Employees</button></Link>}
        </div>
    )
}

export default Breadcrumbs
