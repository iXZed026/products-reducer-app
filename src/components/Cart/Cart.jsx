import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import CartItem from '../CartItem/CartItem';

import { CiInboxIn } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Cart() {

  const cartProduct = useSelector(state => state.cart);
  const navigate = useNavigate()

  function navigateHandler() {
    navigate("/home")
  }

  return (
    <div className="cart  md:w-[75%] w-full m-auto mt-12">
      <div
        className='border-[1.5px] border-black w-[80px] flex justify-center items-center gap-2 cursor-pointer h-8 rounded-md hover:opacity-60 transition-all'
        onClick={navigateHandler}
      >
        <IoIosArrowRoundBack className='text-2xl' />
        <span className='font-semibold'>Back</span>
      </div>
      <div className="cart-container">
        {cartProduct.length > 0 && cartProduct ? (
          <>
            <div className="cart-headear text-center">
              <h3 className="mb-3 font-bold text-2xl mt-6">My Cart</h3>
            </div>
            <div className="cart-item">
              <table className='w-[100%] text-center border-separate border-spacing-3'>
                <thead className="h-12">
                  <tr>
                    <th className="md:w-[20%]">Image</th>
                    <th className="md:w-[20%]">Title</th>
                    <th className="md:w-[20%]">Order</th>
                    <th className="md:w-[20%]">Price</th>
                    <th className="md:w-[20%]">Actons</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProduct.map((product, key) => (
                    <CartItem key={key} {...product} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-[430px]">
            <div className="flex justifi-center items center gap-3">
              <CiInboxIn className='text-4xl' />
              <h3 className='text-xl'>Your Cart is Empty!</h3>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Cart