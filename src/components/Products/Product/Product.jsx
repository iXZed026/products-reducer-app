import React from 'react'

function Product({ title, price, images, category }) {
    return (
        <div className="product cursor-pointer sm:w-[200px] mb-10 w-[80%] m-auto">
            <img
                className='w-[100%] sm:w-[200px] sm:h-[200px]'
                src={images}
                alt="img not found"
            />
            <div id="price">${price}</div><br />
            <div id="description">{title}</div><br />
            <div id="category">{category.name}</div>
        </div>
    )
}

export default Product