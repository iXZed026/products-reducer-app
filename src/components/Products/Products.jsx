import React from 'react';

import Product from './Product/Product';

function Products() {
    return (
        <div className="products h-screen w-[70%] m-auto">
            <div className="products-header bg-[#24292E] p-2 rounded-md mb-3">
                <select name="" id="">
                    <option value="">Hoodi</option>
                    <option value="">Shoes</option>
                    <option value="">electronic</option>
                </select>
            </div>
            <div className="products-item flex justify-between flex-wrap">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div >
    )
}

export default Products