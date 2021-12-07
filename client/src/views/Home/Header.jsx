import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
    return (
        <div id='main'>
            <Navbar></Navbar>
            <div className="name">
                <h1><span>Bid Any Product</span> with safe and secure</h1>
                <p className="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, quas.</p>
                <Link to="/products" className="cv-btn">Explore BidTo</Link>
            </div>
            
        </div>
    )
}

export default Header
