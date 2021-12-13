import classNames from "classnames";
import React from "react";
import about from "./Image/background.png";
import ok from "./Image/ok.png";
import Navbar from './Navbar';

function About(props) {
  return (
    <div>
      <Navbar></Navbar>
      {/* <div className="Tittle">
        <h2>{props.title} BID TO</h2>
      </div> */}
   
      <div id="about">
      
        <div className="about-image">
          {/* <img src={props.image} alt="" /> */}
          <img src="https://savvyrevenue.com/wp-content/uploads/2021/04/Google_Ads_auction.png"/>   
        </div>
        <div className="about-text">
        <h2>{props.title}About BidTo</h2>
          <p>
            Welcome to ‘BidTo’ one of the best online auction platforms in
            India. <br></br>We provide our stakeholders to make their bid and
            buy products through bid.<br></br>‘BidTo’ narrow down the gap
            between buyer and seller through Bids. We provide global access to
            make bid on products from authorized people.
            <br></br>We are not limited to new products but also ‘BidTo’ gives
            an opportunity to buy an ancient, unique and creative products.
            We exist to enable economic opportunity for individuals, entrepreneurs, businesses and organizations of all sizes.
          </p>
          {/* <button>{props.button}</button> */}
        </div>
      </div>
        <div className="why-choose">
        <h2>{props.title} Why choose us?</h2>
      </div>
      <div id="buy-sell">

        <div className="about-text">
          <h2>Buyers</h2>
          <div style={{ display: "flex", "margin-top":"10px"}}>
            <img style={{ "width" : "5%" , "margin-right":"5px"}} src={ok}/> 
            <p>Access to sellers from around the world</p>
          </div>
          <div style={{ display: "flex", "margin-top":"10px"}}>
            <img style={{ "width" : "5%" , "margin-right":"5px"}} src={ok}/> 
            <p>Certified high quality products</p>
          </div>
          <div style={{ display: "flex", "margin-top":"10px"}}>
            <img style={{ "width" : "5%" , "margin-right":"5px"}} src={ok}/> 
            <p>Seamless Process</p>
          </div>
          <div style={{ display: "flex", "margin-top":"10px"}}>
            <img style={{ "width" : "5%" , "margin-right":"5px"}} src={ok}/> 
            <p>Easy payment</p>
          </div>
         
        
        </div>
        <div className="about-text">
          <h2>Seller</h2>
          <div style={{ display: "flex", "margin-top":"10px"}}>
            <img style={{ "width" : "5%" , "margin-right":"5px"}} src={ok}/> 
            <p>Trusted and Transparent Sales</p>
          </div>
          <div style={{ display: "flex", "margin-top":"10px"}}>
            <img style={{ "width" : "5%" , "margin-right":"5px"}} src={ok}/> 
            <p>Access to Global authorized Buyers</p>
          </div>
          <div style={{ display: "flex", "margin-top":"10px"}}>
            <img style={{ "width" : "5%" , "margin-right":"5px"}} src={ok}/> 
            <p>Public and Private Bidding</p>
          </div>
          <div style={{ display: "flex", "margin-top":"10px"}}>
            <img style={{ "width" : "5%" , "margin-right":"5px"}} src={ok}/> 
            <p>Quick Payment</p>
          </div>
          
         
        </div>
      </div>
    </div>
  );
}

export default About;
