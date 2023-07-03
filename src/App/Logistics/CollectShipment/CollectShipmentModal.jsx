import React from 'react';

const CollectShipmentModal = ({ driver, setSelectDriver }) => {

  const toggleModalInvisible = (e) => {
    if (e.target.classList.contains('modal')) {
      setSelectDriver(null);
    }
  };

  return (
    <>
      <div
        onClick={toggleModalInvisible}
        className={`modal fixed z-[100] right-0 w-full h-screen bg-black/20 top-0 flex items-center duration-200 justify-center ${
          driver ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className={`${driver ? 'translate-y-0 scale-100' : 'translate-y-8 scale-75'} duration-200 p-4 bg-white shadows rounded-lg`}>
          <div className='flex items-center mb-6 justify-between'>
            <p className='font-medium text-xsm'>Assigned Driver</p>
            <i onClick={()=>{setSelectDriver(null)}} className='bx hover:bg-slate-100 bx-x rounded-full bg-slate-300 p-1'></i>
          </div>
          <label htmlFor='assign-driver'>
            <p className='font-light text-xsm mb-2'>Driver List</p>
            <select
              type='text'
              className='lg:w-80 md:w-80 sm:w-80 font-light text-sm focus:outline-none outline-none focus:ring-1 focus:ring-black/5 p-2 rounded'
            >
              <option value='Select Driver'>Select Driver</option>
            </select>
          </label>
        </div>
      </div>
    </>
  );
};

export default CollectShipmentModal;
