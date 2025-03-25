import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveItem, IncrementQty, DecrementQty } from '../redux/cartSlice'; 
import { IoTrashBin } from "react-icons/io5";

const Card2 = ({ name, image, id, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
      <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
          <img src={image} alt="" className='object-cover' />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-3'>
          <div className='text-lg text-gray-600 font-semibold'>{name}</div>
           <div className='w-[90px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-600 text-xl'>
            {/* Decrement Button */}
            <button
              className='w-[30%] h-full bg-white flex justify-center items-center text-green-600 hover:bg-gray-200'
              onClick={() => {
                console.log("Dispatching DecrementQty for id:", id);
                dispatch(DecrementQty(id)); // Dispatch DecrementQty with the item's id
              }}
            >
              -
            </button>
            {/* Quantity Display */}
            <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-600'>{qty}</span>
            {/* Increment Button */}
            <button
              className='w-[30%] h-full bg-white flex justify-center items-center text-green-600 hover:bg-gray-200'
              onClick={() => {
                console.log("Dispatching IncrementQty for id:", id);
                dispatch(IncrementQty(id)); // Dispatch IncrementQty with the item's id
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-xl font-semibold text-green-600'>Rs {price}</span>
        <IoTrashBin
          className='w-[30px] h-[30px] text-red-600 cursor-pointer'
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  );
};

export default Card2;