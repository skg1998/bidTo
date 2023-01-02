import React from 'react';
import WishListContainer from '../../container/WishList/wishListContainer';
import Navbar from '../Home/Navbar';

const WishList = (props) => {
    return (
        <>
            <Navbar />
            <WishListContainer />
        </>
    )
}

export default WishList;