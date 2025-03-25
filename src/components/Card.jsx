import React from 'react';
import { useDispatch } from 'react-redux'; 
import { AddItem } from '../redux/cartSlice'; 
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Card = ({ name, image, id, price, type }) => {
  const dispatch = useDispatch(); 

  return (
    <div className='w-[300px] h-[350px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt={name} className='object-cover' />
      </div>
      <div className='text-2xl font-semibold'>{name}</div>
      <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-bold text-green-500'>{price}</div>
        <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'>
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className='w-full p-3 bg-green-500 rounded-lg text-white hover:bg-gray-500 transition-all'
        onClick={() => {
          console.log("Dispatching AddItem with payload:", { id, name, image, price, qty: 1 });
          dispatch(AddItem({ id, name, image, price, qty: 1 }));
          toast("Item Added to Dish");
        }}
      >
        Add to Dish
      </button>
    </div>
  );
};

export default Card;