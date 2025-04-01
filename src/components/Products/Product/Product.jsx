import React from 'react'

function Product({ title, price, images, category }) {
    return (
        <div className="product cursor-pointer w-[200px] mb-10">
            <img
                className=' w-[200px] h-[200px]'
                src={images}
                alt="img not found"
            />
            <span id="price">${price}</span><br />
            <span id="description">{title}</span><br />
            <span id="category">{category.name}</span>
        </div>
    )
}

export default Product