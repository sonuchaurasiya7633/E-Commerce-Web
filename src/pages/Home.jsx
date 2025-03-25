import { useContext, useEffect } from 'react';
import React from 'react';
import Nav from '../components/Nav';
import categories from '../Catogory';
import Card from '../components/Card';
import { food_items } from '../food';
import { dataContext } from '../context/UserContext';
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Home = () => {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  useEffect(() => {
    setCate(food_items);
  }, [setCate]);

  function filter(category) {
    if (category === 'All') {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category === category);
      setCate(newList);
    }
  }

  let Items = useSelector((state) => state.cart);

  let subtotal = Items.reduce((total, item) => total + item.qty * item.price, 0);
  let deliveryFee = 20;
  let taxes = subtotal * 0.5 / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />

      {!input ? (
        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
          {categories.map((item) => {
            return (
              <div
                key={item.id}
                className='w-[110px] h-[120px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className='w-full flex flex-wrap justify-center items-center gap-5 px-5 pt-8 pb-8'>
        {cate.length > 1 ? cate.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              id={item.id}
              price={item.price}
              type={item.food_type}
            />
          );
        }) : <div className='text-3xl text-gray-600 font-semibold'>No Dish Found 🤷‍♀️</div>}
      </div>

      {/* Cart Section */}
      <div
        className={`w-full md:w-[40vw] h-[98vh] md:h-[100%] lg:h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-transform duration-700 flex flex-col items-center overflow-y-scroll ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-green-500 text-[20px] font-semibold'>Order items</span>
          <RxCross2
            className='w-[30px] h-[30px] text-green-500 text-[20px] font-bold cursor-pointer hover:text-gray-600'
            onClick={() => {
              console.log("Closing cart");
              setShowCart(false);
            }}
          />
        </header>
        {Items.length > 0 ? (
          <>
            <div className='w-full mt-9 flex flex-col gap-8'>
              {Items.map((item) => (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>
            <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
                <span className='text-green-600 font-semibold text-lg'>Rs {subtotal}/-</span>
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
                <span className='text-green-600 font-semibold text-lg'>Rs {deliveryFee}/-</span>
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                <span className='text-green-600 font-semibold text-lg'>Rs {taxes}/-</span>
              </div>
            </div>
            <div className='w-full flex justify-between items-center p-9'>
              <span className='text-2xl text-gray-600 font-semibold'>Total</span>
              <span className='text-green-600 font-semibold text-2xl'>Rs {total}/-</span>
            </div>
            <button
              className='w-[80%] p-3 bg-green-500 rounded-lg text-white hover:bg-gray-500 transition-all'
              onClick={() => {
                toast("Order Placed Successfully");
              }}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className='text-center text-2xl text-green-600 font-semibold pt-5'>
            Empty Cart
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;