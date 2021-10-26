import React from 'react';
import { useParams } from 'react-router';
import { makeStyles, Container, Grid } from '@material-ui/core';
import { AttachMoneyRounded, Info, Public } from '@material-ui/icons';

import PieContainer from './chartContainers.js/PieContainer'
import LineContainer from './chartContainers.js/LineContainer';
import BarContainer from './chartContainers.js/BarContainer';

import BidInfo from './BidInfo';
import BidHistory from './BidHistory';
import BidQuery from './BidQuery';

const product = {
  "_id": "1",
  "title": "Nike Shoes",
  "location": "INDIA",
  src: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
  ,
  description: "Inspired by the design of the latest Air Jordan game shoe, the Jordan Jumpman 2021 helps up-and-coming players level up their game. The shoe features responsive Zoom Air cushioning in the forefoot. Curved Flightwire cables are stitched into the material for a close, secure fit for competitive play. This PF version is ideal for use on outdoor courts. ",
  "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
  "price": 23,
  "colors": ["red", "black", "crimson", "teal"],
  "count": 1
};

const useStyles = makeStyles((theme) => ({
  root: {

  },
  productDetail: {
    height: '100%',
    width: '100%',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
  },
  container: {
    padding: '3%',
    display: "flex",
    flexWrap: "wrap",
    height: '100%',
    width: '100%',
    flexDirection: 'column',

  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1%',
    width: '60%',
    padding: '1%',
    gap: '5%'
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "fit",
  }


}));

const Product = () => {
  const { id } = useParams();
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item lg={8} sm={12} xl={8} xs={12}>
          <div className={classes.productDetail}>
            <div className={classes.container}>
              <div style={{ fontWeight: 'bold' }}>
                {product.title}
              </div>
              <div className={classes.row}>
                <Public></Public>
                <div style={{ marginRight: '4%' }}>Location</div>
                <div>{product.location}</div>
              </div>
              <div className={classes.row}>
                <Info></Info>
                <div>Description</div>
                <div >{product.description}</div>
              </div>
              <div className={classes.row}>
                <AttachMoneyRounded />
                <div style={{ marginRight: '6%' }}>Price</div>
                <div >{product.price}</div>
              </div>
              <div className={classes.row}>
                <img className={classes.image} src={product.src}></img>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={4} sm={12} xl={4} xs={12}>
          <Grid container spacing={3}>
            {/* bid card */}
            <Grid lg={12}>
              <BidInfo />
            </Grid>

            {/* bidding product chart  */}
            <Grid lg={12}>
              <LineContainer />
            </Grid>

            <Grid lg={12}>
              <PieContainer />
            </Grid>

            {/* bidding history card bar */}
            <Grid lg={12}>
              <BarContainer />
            </Grid>

            {/* bidding history card */}
            <Grid lg={12}>
              <BidHistory />
            </Grid>

            {/* quaries card */}
            <Grid lg={12}>
              <BidQuery />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
