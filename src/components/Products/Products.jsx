import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsServer } from '../../Redux/store/Product';

import Product from './Product/Product';

function Products() {

    const dispatch = useDispatch();
    let reducerProducts = useSelector(state => state.products);
    const [products, setProducts] = useState([])

    useEffect(() => {
        dispatch(getProductsServer("https://api.escuelajs.co/api/v1/products"));
    }, []);


    useEffect(() => {
        if (reducerProducts.length > 0) {
            setProducts(reducerProducts);
        }
    }, [reducerProducts]);

    function filterHandler(e) {

        const newProducts = reducerProducts.filter(product => product.category.name.toUpperCase() === e.target.value);

        if (newProducts.length > 0) {
            setProducts(newProducts);
        } else {
            setProducts(reducerProducts);
        }
    }

    return (
        <div className="products w-[70%] m-auto">
            <div className="products-header bg-[#24292E] p-2 rounded-md mb-3">
                <select className='rounded outline-none' name="" id="" onChange={filterHandler}>
                    <option value="ALL">All</option>
                    <option value="CLOTHES">Clothes</option>
                    <option value="ELECTRONICSS">Electronicss</option>
                    <option value="FURNITURE">Furniture</option>
                    <option value="SHOESSS">Shoes</option>
                    <option value="MISCELLANEOUS">Miscellaneous</option>
                </select>

            </div>
            <div className="products-item flex justify-start gap-3.5 flex-wrap">
                {products.length && (
                    products.map((product, key) => <Product key={key} {...product} />)
                )}
            </div>
        </div >
    )
}

export default Products