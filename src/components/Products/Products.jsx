import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsServer } from '../../Redux/store/Product';


import { Link } from 'react-router-dom';

import Product from './Product/Product';

import { ScrollContext } from '../../context/ScrollProvide';

import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Products() {

    const dispatch = useDispatch();
    let reducerProducts = useSelector(state => state.products);
    const [products, setProducts] = useState([])

    const [filters, setFilters] = useState([]);

    const elementRef = useContext(ScrollContext)

    useEffect(() => {
        dispatch(getProductsServer("https://api.escuelajs.co/api/v1/products"));
    }, []);


    useEffect(() => {
        if (reducerProducts.length > 0) {
            setProducts(reducerProducts);
            products.map(product => {   
                setFilters(prevFilter => [...prevFilter, product.category.name])
            })
        }
    }, [reducerProducts]);

    function filterHandler(e) {

        const newProducts = reducerProducts.filter(product => product.category.name === e.target.value);

        if (newProducts.length > 0) {
            setProducts(newProducts);
        } else {
            setProducts([])
        }

        if (e.target.value === "ALL") {
            setProducts(reducerProducts)
        }
    }

    return (
        <div className="products w-[70%] m-auto" ref={elementRef}>
            <div className="products-header bg-[#24292E] p-2 rounded-md mb-3" >
                <select className='rounded outline-none' name="" id="" onChange={filterHandler}>
                    <option value="ALL">All</option>
                    {
                        [...new Set(filters)].map((filter, key) => <option key={key} value={filter}>{filter}</option>)
                    }
                </select>

            </div>
            <div className="products-item flex justify-center sm:justify-start gap-3.5 flex-wrap">
                {!reducerProducts.loading ? (
                    products.length ? (
                        products.map((product, key) => (
                            <Link key={product.id} to={`/product-item/${product.id}`}>
                                <Product  {...product} />
                            </Link>
                        ))
                    ) : (
                        <div className='h-[150px] flex justify-center w-full items-center'>
                            <h2 className='text-2xl'> Products Not Found!</h2>
                        </div>
                    )

                ) : (
                    <div className="w-full flex justify-center items-center h-[150px]">
                        <AiOutlineLoading3Quarters className='text-5xl animate-spin text-purple-900' />
                    </div>
                )}
            </div>
        </div >
    )
}

export default Products