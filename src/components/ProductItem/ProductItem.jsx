import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

function ProductItem() {

    const reducerProducts = useSelector(state => state.products);
    const [product, setProduct] = useState(null)
    const params = useParams();

    useEffect(() => {
        let findProduct = reducerProducts.find(product => product.id === Number(params.id));
        setProduct(findProduct)
    }, [reducerProducts])


    return (
        <>
            {product && (
                <div className='product-item w-[75%] m-auto mt-4'>
                    <div className="product-item-container flex justify-between">
                        <div className="left-side w-[60%]">
                            <h2 className='text-2xl font-semibold mb-3'>General information</h2>
                            <h3 className='py-3 px-2 bg-gray-300 mb-4'>{product.title}</h3>
                            <h5 className='font-medium mb-2'>Description:</h5>
                            <p className='text-gray-900 leading-loose mb-5'>{product.description}</p>
                            <button className='w-[120px] bg-black text-gray-100 py-2 rounded-md hover:transition-all hover:opacity-80'>Add to Cart</button>
                        </div>
                        <div className="right-side w-[30%]">
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