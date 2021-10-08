import React from 'react'
import Navbar from './Navbar'
function Header() {
    return (
        <div id='main'>
            <Navbar></Navbar>
            <div className="name">
                <h1><span>Bid Any Product</span> with safe and secure</h1>
                <p className="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, quas.</p>
                <a href="#" className="cv-btn">Explore BidTo</a>
            </div>
            
        </div>
    )
}

export default Header
