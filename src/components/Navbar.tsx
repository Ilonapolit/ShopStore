import React from 'react';
import { AiOutlineUser } from 'react-icons/ai'; 
import { FaShoppingCart } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <div className='pt-4 bg-white top-0 sticky'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold cursor-pointer'>ShopStore</h1>
          <div>
            <AiOutlineUser size={24} /> 
            <FaShoppingCart size={24} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




