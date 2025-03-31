import React from 'react'

function Product() {
    return (
        <div className="product cursor-pointer">
            <img
                className='w-[200px]'
                src="../../images/ZANVnHE.jpeg"
                alt="img not found"
            />
            <span id="price">$3.99</span><br />
            <span id="description">Majestic Mountain Graphic</span><br />
            <span id="category">T-shit</span>
        </div>
    )
}

export default Product