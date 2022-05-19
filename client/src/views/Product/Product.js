import React, { useState, useEffect, useRef } from 'react';
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
import { connect, useSelector } from "react-redux";
import { getSelectedQuantity } from "../../store/reducers/productReducer";
import { isWishlisted } from "../../store/reducers/wishListReduce";
import { isAddedToCart } from "../../store/reducers/cartReducer";
import { cartAction, wishListAction, productAction, bidAction } from "../../store/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '70px'
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fit",
  },
  infoCard: {
    borderRadius: '20px'
  },
  infoKey: {
    fontWeight: 'bold',
    fontSize: '25px',
    marginBottom: '15px',
    color: '#6f7c65'
  },
  infoValue: {
    fontSize: '25px',
    marginBottom: '15px',
    color: '#6f7c65'
  }
}));

const Product = (props) => {
  const { id } = useParams();

  const {
    getSelectedQuantity,
    isWishlisted,
    isAddedToCart,
    incrementQuantity,
    decrementQuantity,
    addToCart,
    addToWishlist,
    removeFromWishlist,
    getProductById,
    bidstatus,
    getBid
  } = props;

  useEffect(() => {
    getProductById(id);
    //getBid(product.id);
    // get bid process by user by hours
    // get bid type day
  }, []);

  let selectedQuantity = getSelectedQuantity(id);
  let isProdWishlisted = isWishlisted(id);
  let isProdAdded = isAddedToCart(id);

  let product = useSelector(state => state.products.byId?.product?.data ?? {});
  let highestbid = useSelector(state => state.bidReducer?.bidStatus?.products[id]?.highestbid ?? "");
  let yourbid = useSelector(state => state.bidReducer?.bidStatus?.products[id]?.yourbid ?? "");
  let timeStatus = useSelector(state => state.bidReducer?.bidStatus?.products[product.id]?.time ?? "");
  let bidStatusMess = useSelector(state => state.bidReducer?.bidStatus?.products[product.id]?.bidstatus ?? " ");
  let winnerId = 1 //useSelector(state => state.bidReducer?.bidStatus?.products[product.id]?.winner ?? " ");
  let yourId = 1// useSelector(state => state.user?.data?.data?.id ?? "");

  const [remainingTime, setRemainingTime] = useState();
  const [getHighestBid, setHighestBid] = useState();
  const [getYourBid, setYourBid] = useState();
  const classes = useStyles();

  useEffect(() => {
    if (bidStatusMess === 'BID END') {
      if (winnerId === yourId) {
        addToCart(product.id, 1);
      }
    } else {
      const tick = setInterval(() => {
        bidstatus(product.id, new Date(), product.startbid, product.endbid)
        setRemainingTime(timeStatus);
        setHighestBid(highestbid);
        setYourBid(yourbid);
      }, 1000);
      return () => clearInterval(tick);
    }
  }, [bidStatusMess]);

  return (
    <div>
      <Navbar />
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item lg={8} sm={12} xl={8} xs={12}>
            <Grid container spacing={3}>
              <Grid item lg={12}>
                <BidHeader
                  title={product.name}
                  prodId={product.id}
                  isProdWishlisted={isProdWishlisted}
                  removeFromWishlist={(id) => removeFromWishlist(id)}
                  addToWishlist={(id) => addToWishlist(id)}
                />
              </Grid>
              <Grid item lg={12}>
                <BidTimeTag
                  dateState={new Date(product.startbid)}
                  remainingTime={remainingTime}
                />
              </Grid>
              <Grid item lg={12}>
                <Grid item lg={12}>
                  <YourBid
                    yourBid={getYourBid}
                    isRegister={false}
                  />
                </Grid>
                <Grid item lg={12}>
                  <BidStatus
                    highestBid={getHighestBid}
                    startedBid={product.price}
                  />
                </Grid>
                <Grid item lg={12}>
                  <Card className={classes.infoCard}>
                    <CardContent>
                      <Grid item lg={12}>
                        <Grid container spacing={3}>
                          <Grid item lg={4} className={classes.infoKey}><div > <Public /> Location</div></Grid>
                          <Grid item lg={8} className={classes.infoValue}><div>{product.location}</div></Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={12}>
                        <Grid container spacing={3}>
                          <Grid item lg={4} className={classes.infoKey}><div><Info /> Description</div></Grid>
                          <Grid item lg={8} className={classes.infoValue}><div >{product.desc}</div></Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={12}>
                        <Grid container spacing={3}>
                          <Grid item lg={4} className={classes.infoKey}><div > <AttachMoneyRounded /> Price</div></Grid>
                          <Grid item lg={8} className={classes.infoValue}><div >{product.price}</div></Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={12}>
                        <img className={classes.image} src={product.image}></img>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} sm={12} xl={4} xs={12}>
            <Grid container spacing={3}>
              <Grid lg={12}><BidInfo prodId={product.id} /></Grid>
              <Grid lg={12}><LineContainer /></Grid>
              <Grid lg={12}><PieContainer /></Grid>
              <Grid lg={12}><BarContainer /></Grid>
              <Grid lg={12}><BidHistory prodId={product.id} /></Grid>
              <Grid lg={12}><BidQuery /></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
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
  getProductById: (id) => dispatch(productAction.getProductById(id)),
  bidstatus: (prodId, current, start, end) => dispatch(bidAction.bidStatus(prodId, current, start, end)),
  getBid: (data) => dispatch(bidAction.getBid(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
