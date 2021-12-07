import React ,{useState} from 'react';
import { Link } from 'react-router-dom'
import logo from './Image/logo.png';
import {ListItemIcon, Divider, Badge} from '@material-ui/core';
import {NotificationImportant, ShoppingBasket, Favorite} from '@material-ui/icons';
import AccountMenu from './Navbar/AccountManu';

import { connect } from "react-redux";
import { getTotalCartItems } from "../../store/reducers/cartReducer";
import { getTotalWishlistItems } from "../../store/reducers/wishListReduce";

function Navbar(props) {
    const { totalCartItems, totalWishlistItems, auth, loading } = props;
    const [nav,setnav]=useState(false);
    const changeBackground=()=>{
         if(window.scrollY>=50){
             setnav(true);
         }else{
             setnav(false);
         }
    }

    window.addEventListener("scroll",changeBackground);
    return (
        <nav className={nav?"nav active":"nav"}>
           <a href="#" className="logo">
               <img src={logo} alt="" />
           </a>
           <input type="checkbox" className='menu-btn' id="menu-btn" />
           <label className='menu-icon' for='menu-btn'>
               <span className="nav-icon"></span>
           </label>
           <ul className='menu'>
               <li><Link to="/" className="active">Home</Link></li>
               <li><Link to="/products">Top Bid</Link></li>
                <li><Link to="/about">About us</Link></li>
                <Divider orientation="vertical" flexItem />
                {auth?
                <>
                    <li>
                    <ListItemIcon>
                        <Link to="/wishlist">
                            <Badge badgeContent={totalWishlistItems} color="primary">
                                <Favorite fontSize="large" />
                            </Badge>
                        </Link>
                    </ListItemIcon>
                </li>
                <li>
                    <ListItemIcon>
                        <Link to="/cart">
                            <Badge badgeContent={totalCartItems} color="primary">
                                <ShoppingBasket fontSize="large" />
                            </Badge>
                        </Link>
                    </ListItemIcon>
                </li>
                <li>
                    <ListItemIcon>
                        <Link to="/notification"><NotificationImportant fontSize="large" /></Link>
                    </ListItemIcon>
                </li>
                </>:null
                }
               {auth ? 
               <> 
                <li> <AccountMenu/> </li>
               </> : 
               <>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </>
                }
           </ul>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    totalCartItems: getTotalCartItems(state.cart),
    totalWishlistItems: getTotalWishlistItems(state.wishlist),
    auth: state.authReducer.login.isLogin,
    loading: state.authReducer.login.loading
}); 

export default connect(mapStateToProps)(Navbar);
