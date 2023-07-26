import React, { useEffect, useRef, useState } from 'react'
import tee from '../assets/images/tee.jpg'
import tee2 from '../assets/images/tee2.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart } from '../Store/slices/Cart'
import noitemgif from '../assets/images/noitemgif.gif'


const Cart = () => {
    
    const [cartOpen,setCartOpen] = useState(false)
    const cartListBox = useRef(null)
    const removeByClickingOverlay = (e) => {
        if (cartListBox.current && e.target.classList.contains('overlay')) {
            setCartOpen(p=>!p)
        }
    }
    const products = [
        { id: 1, name: "Crimson Sunrise Polo", color: "Crimson" },
        { id: 2, name: "Golden Glow V-Neck", color: "Golden" },
        { id: 3, name: "Emerald Enchantment Tee", color: "Emerald" },
        { id: 4, name: "Sapphire Skies Hoodie", color: "Sapphire" },
        { id: 5, name: "Amber Aura Tank Top", color: "Amber" },
        { id: 6, name: "Lilac Dream Crewneck", color: "Lilac" },
        { id: 7, name: "Ocean Blue Raglan", color: "Ocean Blue" },
        { id: 8, name: "Ruby Red Ringer Tee", color: "Ruby Red" },
        { id: 9, name: "Silver Mist Henley", color: "Silver Mist" },
        { id: 10, name: "Ivory Whisper Tunic", color: "Ivory" },
        { id: 11, name: "Teal Temptation Crop Top", color: "Teal" },
        { id: 12, name: "Charcoal Chill Pullover", color: "Charcoal" },
      ];
    const cartProduct = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    useEffect(()=>{
        if( cartProduct.length > 0 && cartProduct.length + 1){
            setCartOpen(true)
        }
    },[cartProduct.length])

  return (
    <>
    <div>
        <i onClick={()=>{setCartOpen(p=>!p)}} className='bx bx-cart'></i>
        <div onClick={removeByClickingOverlay} ref={cartListBox} className={`overlay duration-500 w-full fixed top-0 h-screen right-0 bg-black/5 z-50 ${cartOpen ? 'visible opacity-100' : 'invisible opacity-0' }`}>
            <div className={`w-1/4 float-right bg-white duration-500 delay-100 flex items-center justify-center h-full ${cartOpen ? 'translate-x-0 skew-x-0 visible opacity-100' : 'translate-x-full skew-x-12 invisible opacity-0' }`}>
            {cartProduct.length > 0 ? 
            <>
            <div className='bg-white w-full h-full grid grid-cols-2 overflow-y-auto gap-4 p-8'>
            {cartProduct && cartProduct.map((item,index)=>{
                return(
            <div className='space-y-2'>
                <div className='w-20 h-20 overflow-hidden rounded-lg'><img src={index % 2 ? tee : tee2} className='w-full h-full object-cover' alt="" /></div>
                <div className=' items-center space-y-1'>
                    <p className='font-semibold text-gray-700 text-[12px]'>{item.name.slice(0,7)}</p>
                    <button onClick={()=>{dispatch(removeItemFromCart(item.id))}} className='font-semibold bg-gray-100 rounded-sm w-full duration-500 hover:bg-blue-500 hover:text-white text-[10px] text-black/50 px-4 py-2'>Remove</button>
                </div>
            </div>
                )
            })}
        </div>
            </>
            :
            <div className={`flex items-center flex-col justify-center select-none duration-100 ${cartProduct.length > 0 ? 'opacity-0' : 'opacity-100'}`}>
                <img src={noitemgif} className='w-full h-full' alt="" />
                <p className='font-semibold text-gray-400/20 text-xsm'>No Items Added As Such Now!!</p>
            </div>
            }
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart