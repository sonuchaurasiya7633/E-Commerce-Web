import React, { useEffect, useContext } from 'react';
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Nav = () => {
  const { input, setInput, cate, setCate,showCart,setShowCart } = useContext(dataContext);

  useEffect(() => {
  
    let newlist = food_items.filter((item) => item.food_name.toLowerCase().includes(input.toLowerCase()));
    setCate(newlist);
    console.log('Filtered List:', newlist); 
  }, [input]);
  let Items = useSelector(state => state.cart )
  console.log(Items)

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-2xl'>
        <MdFastfood className='w-[30px] h-[30px] text-green-600' />
      </div>
      <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]' onSubmit={(e) => e.preventDefault()}>
        <IoSearch className='w-[30px] h-[30px] text-green-600' />
        <input
          type="text"
          placeholder='Search Items...'
          className='w-[100%] outline-none text-[16px] md:text-[20px]'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-2xl relative cursor-pointer' onClick={() =>{
      setShowCart(true)

      }}>
        <span className='absolute top-0 right-2 text-green-600 font-bold text-[18px]'>{Items.length}</span>
        <LuShoppingBag className='w-[30px] h-[30px] text-green-600' />
      </div>
    </div>
  );
};

export default Nav;