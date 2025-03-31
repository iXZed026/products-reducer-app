import React from 'react';
//components
import GetStarted from '../../components/GetStarted/GetStarted';
import Products from "../../components/Products/Products.jsx"

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <GetStarted />
                <Products />
            </div>
        </div>
    )
}

export default Home