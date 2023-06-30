import React from 'react';

const FinancicalPopup = ({ value, setSeeDueAmountValue }) => {
    console.log(value)

  const toggleComponentInvisible = (event) => {
    if (event.target.classList.contains('overlay')) {
      setSeeDueAmountValue(null);
    }
  };
  return (
    <>
      <div
        className={`w-full fixed z-[100] top-0 right-0 h-screen duration-500 bg-black/20 flex items-center justify-center ${
          value ? ' visible opacity-100' : ' invisible opacity-0'
        } overlay`}
        onClick={toggleComponentInvisible}
      >
        <div className={`p-4 rounded-lg shadow2 duration-500 space-y-8 ${value ? ' visible translate-y-0 opacity-100' : ' invisible translate-y-8 opacity-0'} w-[30rem] bg-white`}>
          <div className="flex items-center justify-between">
            <p className="font-semibold">
              Due Balance: <span className="text-blue-600 it    alic">{value}</span>
            </p>
            <i onClick={()=>setSeeDueAmountValue(null)} className="bx bx-x"></i>
          </div>
          <p className="font-light text-xsm p-3 duration-500 bg-gray-50 rounded w-full ring-1 hover:ring-black/50">
            {value}
          </p>
          <div className="flex items-center gap-8 justify-between w-full">
            <button onClick={()=>setSeeDueAmountValue(null)} className="w-full p-2 bg-gray-200 text-xsm font-medium rounded ring-1 ring-black/5 text-black">
              No Back
            </button>
            <button className="w-full p-2 bg-blue-600 text-xsm font-medium rounded ring-1 ring-black/5 text-white hover:shadow-lg">
              Received
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancicalPopup;
