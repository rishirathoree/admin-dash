import React from 'react'
import tee from '../../../assets/images/tee.jpg'
import tee2 from '../../../assets/images/tee2.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeItemFromCart } from '../../../Store/slices/Cart'
const Productscreen = () => {
    const dispatch = useDispatch()
    const cartProduct = useSelector(state=>state.cart)
    console.log(cartProduct)
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
      
  return (
    <>
    <div className='px-8 w-full pb-12 min-h-screen space-y-8'>
        <div className='bg-white w-full h-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 p-12'>
            {products.map((item,index)=>{
                return(
            <div className='space-y-2'>
                <div className='w-60 h-60 overflow-hidden rounded-lg'><img src={index % 2 ? tee : tee2} className='w-full h-full object-cover' alt="" /></div>
                <div className=' items-center space-y-1 justify-between'>
                    <p className='font-semibold text-gray-700 text-[12px]'>{item.name}</p>
                    <button onClick={()=>{dispatch(addToCart(item))}} className={`font-semibold bg-gray-100 rounded-sm w-full text-[10px] ${cartProduct.some(items=>items.name === item.name) ? 'hidden' : 'block'} text-black/50 px-4 py-2`}>{cartProduct.some(items => items.name === item.name) ? 'Remove' : 'Add to cart' } </button>
                    <button onClick={()=>{dispatch(removeItemFromCart(item.id))}} className={`font-semibold bg-gray-100 rounded-sm w-full text-[10px] text-black/50 px-4 py-2 ${cartProduct.some(items=>items.name === item.name) ? 'block' : 'hidden'}`}>Remove </button>
                </div>
            </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Productscreen