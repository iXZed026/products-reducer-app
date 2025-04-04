import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../Redux/store/Cart';

import { AiOutlineLoading3Quarters } from "react-icons/ai";

function ProductItem() {

    const reducerProducts = useSelector(state => state.products);
    const [product, setProduct] = useState(null)
    const params = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();


    useEffect(() => {
        let findProduct = reducerProducts.find(product => product.id === Number(params.id));
        setProduct(findProduct)
    }, [reducerProducts]);


    function addToCartHandler(e) {
        dispatch(addToCart(product))
        navigate("/home")
    }

    return (
        <>
            {product && (
                <div className='product-item w-[70%] m-auto mt-4'>
                    <div className="md:flex-row product-item-container flex justify-between flex-col-reverse">
                        <div className="left-side md:w-[60%] w-[100%] pb-10">
                            <h2 className='text-2xl font-semibold mb-10'>General information</h2>
                            <h3 className='py-3 px-2 bg-gray-300 mb-8'>{product.title}</h3>
                            <h5 className='font-medium mb-8'>Description:</h5>
                            <p className='text-gray-900 leading-loose mb-8'>{product.description}</p>
                            <button onClick={addToCartHandler} className='w-[120px] bg-green-700 text-gray-100 py-2 rounded-md hover:transition-all hover:opacity-80'>Add to Cart</button>
                        </div>
                        <div className="right-side md:w-[35%] w-[80%] m-auto mb-10">
                            <img
                                className='w-full'
                                src={product.images}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductItem