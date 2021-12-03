import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { makeStyles, Container, Grid, Card, CardContent } from '@material-ui/core';
import { AttachMoneyRounded, Info, Public } from '@material-ui/icons';

//Component
import Navbar from '../Home/Navbar';
import PieContainer from './chartContainers.js/PieContainer'
import LineContainer from './chartContainers.js/LineContainer';
import BarContainer from './chartContainers.js/BarContainer';
import BidHeader from '../../components/Product/BidHeader';
import BidInfo from '../../components/Product/BidInfo';
import BidHistory from '../../components/Product/BidHistory';
import BidQuery from '../../components/Product/BidQuery';
import BidStatus from '../../components/Product/BidStatus';
import BidTimeTag from '../../components/Product/BidTimeTag';
import YourBid from '../../components/Product/YourBid';

//Redux Store
import { connect } from "react-redux";
import { getProduct, getSelectedQuantity } from "../../store/reducers/productReducer";
import { isWishlisted } from "../../store/reducers/wishListReduce";
import { isAddedToCart } from "../../store/reducers/cartReducer";
import { cartAction, wishListAction, productAction } from "../../store/actions";

/**
 * @summary bid api
 * @field your bid  
 * @field highest bid  
 */

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '70px'
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fit",
  }
}));

const Product = (props) => {
  const prodId = parseInt(props.match.params.prodId);
  const {
    getProduct,
    getSelectedQuantity,
    isWishlisted,
    isAddedToCart,
    incrementQuantity,
    decrementQuantity,
    addToCart,
    addToWishlist,
    removeFromWishlist,
  } = props;

  let product = getProduct(prodId);
  let selectedQuantity = getSelectedQuantity(prodId);
  let isProdWishlisted = isWishlisted(prodId);
  let isProdAdded = isAddedToCart(prodId);

  const [products, setProduct] = useState();
  const [cart, setToCart] = useState();
  const [winner, setWinner] = useState();
  const [remainingTime, setRemainingTime] = useState();

  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {

    // create bid 
    // get bid process by user by hours
    // get bid type day
    // get bid current history
    // query 
  }, []);

  useEffect(() => {
    const tick = setInterval(() =>
      setRemainingTime(scheduler(new Date(), '2021-11-29T18:35:25.235Z', '2021-11-30T18:35:25.235Z')), 10000)
    return () => clearInterval(tick);
  });

  //calculate total time remaining
  const scheduler = (current, start, end) => {
    if (new Date(current) <= new Date(start)) {
      //calculate total time remaining before bidding start
      let d = (new Date(start)) - (new Date());
      let weekdays = Math.floor(d / 1000 / 60 / 60 / 24 / 7);
      let days = Math.floor(d / 1000 / 60 / 60 / 24 - weekdays * 7);
      let hours = Math.floor(d / 1000 / 60 / 60 - weekdays * 7 * 24 - days * 24);
      let minutes = Math.floor(d / 1000 / 60 - weekdays * 7 * 24 * 60 - days * 24 * 60 - hours * 60);
      let seconds = Math.floor(d / 1000 - weekdays * 7 * 24 * 60 * 60 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);

      let t = `${days} d ${hours} h ${minutes} m ${seconds} s`;
      return t;
    } else if (new Date(start) <= new Date(end)) {
      //calculate total time remaining after bidding start and before and time
      let d = (new Date(end)) - (new Date(start));
      let weekdays = Math.floor(d / 1000 / 60 / 60 / 24 / 7);
      let days = Math.floor(d / 1000 / 60 / 60 / 24 - weekdays * 7);
      let hours = Math.floor(d / 1000 / 60 / 60 - weekdays * 7 * 24 - days * 24);
      let minutes = Math.floor(d / 1000 / 60 - weekdays * 7 * 24 * 60 - days * 24 * 60 - hours * 60);
      let seconds = Math.floor(d / 1000 - weekdays * 7 * 24 * 60 * 60 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);

      let t = `${days} d ${hours} h ${minutes} m ${seconds} s`;
      return t;
    } else {
      // what to do after bidding time end
      // stop timeing (0:0:0)
      // duration complete (message from backend)
      // bid annucement  (topper announcement -> top bidder id -> if(top_bidder_id == your_id) return id, amount)
      // add to cart

      //won
      //getwinnerid
      //match winnerid
      // if(top_bidder_id == your_id){
      //     setWinner(data);
      //     const data = {product_id, your_id, price, date};
      //      addToCart(prodId, 1);
      // }
    }
  }

  return (
    <div>
      <Navbar />
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item lg={8} sm={12} xl={8} xs={12}>
            <Grid container spacing={3}>
              <Grid item lg={12}>
                <BidHeader
                  title={product.title}
                  bidId={prodId}
                  isProdWishlisted={isProdWishlisted}
                  removeFromWishlist={(prodId) => removeFromWishlist(prodId)}
                  addToWishlist={(prodId) => addToWishlist(prodId)}
                />
              </Grid>
              <Grid item lg={12}>
                <BidTimeTag
                  dateState={new Date(product.startdate)}
                  remainingTime={remainingTime}
                />
              </Grid>
              <Grid item lg={12}>
                <Grid item lg={12}>
                  <YourBid
                    yourBid={"yourBid"}
                    isRegister={false}
                  />
                </Grid>
                <Grid item lg={12}>
                  <BidStatus
                    highestBid={"highestBid"}
                    startedBid={product.price}
                  />
                </Grid>
                <Grid item lg={12}>
                  <Card>
                    <CardContent>
                      <Grid item lg={12}>
                        <Public></Public>
                        <div style={{ marginRight: '4%' }}>Location</div>
                        <div>{product.location}</div>
                      </Grid>
                      <Grid item lg={12}>
                        <Info></Info>
                        <div>Description</div>
                        <div >{product.description}</div>
                      </Grid>
                      <Grid item lg={12}>
                        <AttachMoneyRounded />
                        <div style={{ marginRight: '6%' }}>Price</div>
                        <div >{product.price}</div>
                      </Grid>
                      <Grid item lg={12}>
                        <img className={classes.image} src={product.src}></img>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} sm={12} xl={4} xs={12}>
            <Grid container spacing={3}>
              <Grid lg={12}><BidInfo /></Grid>
              <Grid lg={12}><LineContainer /></Grid>
              <Grid lg={12}><PieContainer /></Grid>
              <Grid lg={12}><BarContainer /></Grid>
              <Grid lg={12}><BidHistory bidders={null} /></Grid>
              <Grid lg={12}><BidQuery /></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  getProduct: (id) => getProduct(state.products, id),
  getSelectedQuantity: (id) => getSelectedQuantity(state.products, id),
  isWishlisted: (id) => isWishlisted(state.wishlist, id),
  isAddedToCart: (id) => isAddedToCart(state.cart, id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id, quantity) => dispatch(cartAction.addToCart(id, quantity)),
  incrementQuantity: (id) => dispatch(productAction.incrementQuantity(id)),
  decrementQuantity: (id) => dispatch(productAction.decrementQuantity(id)),
  addToWishlist: (id) => dispatch(wishListAction.addToWishlist(id)),
  removeFromWishlist: (id) => dispatch(wishListAction.removeFromWishlist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
