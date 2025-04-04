import React, { useState } from 'react';

import { MdAddBox } from "react-icons/md";
import { CgRemoveR } from "react-icons/cg";
import { FaDeleteLeft } from "react-icons/fa6";

import { useDispatch } from 'react-redux';
import { removeProductCart } from '../../Redux/store/Cart';


function CartItem(props) {

    const [order, setOrder] = useState(1);

    const dispatch = useDispatch();

    function deccreaseHandler() {
        if (order > 1) {
            setOrder(prevOrder => prevOrder - 1)
        }
    }

    function increaseHandler() {
        if (order < 4) {
            setOrder(prevOrder => prevOrder + 1)
        }
    }

    function removeProductItem(){
        dispatch(removeProductCart(props.id))
    }

    return (
        <tr className='select-none'>
            <td className="flex justify-center items-center">
                <img className="w-[100px]" src={props.images} alt="" />
            </td>
            <td>
                <h3>{props.title}</h3>
            </td>
            <td>
                <div className='flex justify-center items-center gap-3'>
                    <CgRemoveR
                        className='text-red-600 text-2xl cursor-pointer'
                        onClick={deccreaseHandler}
                    />
                    <span className="text-lg">{order}</span>
                    <MdAddBox
                        className='text-green-600 text-2xl cursor-pointer'
                        onClick={increaseHandler}
                    />
                </div>
            </td>
            <td>
                ${order * props.price}
            </td>
            <td>
                <div className='flex justify-center items-center'>
                    <FaDeleteLeft className='text-red-600 text-2xl cursor-pointer' onClick={removeProductItem}/>
                </div>
            </td>
        </tr>
    )
}

export default CartItem