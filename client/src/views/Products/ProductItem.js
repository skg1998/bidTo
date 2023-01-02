import React, { useState, useEffect } from 'react';
import { Button, makeStyles, Grid, Card, CardContent } from '@material-ui/core';
import { generatePath, useHistory } from "react-router-dom";

import BidTimeTag from '../../components/Product/BidTimeTag';
import YourBid from '../../components/Product/YourBid';
import BidStatus from '../../components/Product/BidStatus';

//Redux Store
import { connect, useSelector } from "react-redux";
import { bidAction } from "../../store/actions";

const useStyle = makeStyles((theme) => ({
    item: {
        backgroundColor: 'white',
        borderRadius: '20px',
        margin: '15px'
    },
    itemImage: {
        width: '80%',
        padding: '3%',

    },
    button: {
        fontSize: '25px',
        color: 'green',
        fontWeight: 'bold',
        borderColor: 'green'
    },

}));
const ProductItem = ({ product, bidstatus }) => {
    const { id, image, name, startbid, endbid, price, auth } = product;
    const classes = useStyle();
    const [productId, serProductId] = useState();
    const [remainingTime, setRemainingTime] = useState();
    const [getHighestBid, setHighestBid] = useState();
    const [getYourBid, setYourBid] = useState();
    const [getBidStatusMess, setBidStatusMess] = useState();

    const history = useHistory();

    let timeStatus = useSelector(state => state.bidReducer?.bidStatus?.products[id]?.time ?? "");
    let highestbid = useSelector(state => state.bidReducer?.bidStatus?.products[id]?.highestbid ?? "");
    let yourbid = useSelector(state => state.bidReducer?.bidStatus?.products[id]?.yourbid ?? "");
    let bidStatusMess = useSelector(state => state.bidReducer?.bidStatus?.products[product.id]?.bidstatus ?? " ");
    let winnerId = useSelector(state => state.bidReducer?.bidStatus?.products[product.id]?.winner ?? " ");
    let yourId = useSelector(state => state.user?.data?.data?.id ?? "");

    const handleProceed = (id) => {
        serProductId(id)
        productId && history.push(generatePath("/product/:id", { id }));
    };

    console.log("auth......", auth);

    useEffect(() => {
        setBidStatusMess(bidStatusMess);
        if (bidStatusMess === 'BID END') {
            if (winnerId === yourId) {
                //addToCart(product.id, 1);
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
        <Card className={classes.item}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item lg={6} sm={12} xl={6} xs={12}>
                        <Grid container spacing={3} >
                            <Grid item lg={6} sm={12} xl={6} xs={12}> <div style={{ fontSize: '30px' }}>{name}</div></Grid>
                            <Grid item lg={6} sm={12} xl={6} xs={12}>
                                <Button
                                    disabled={!(auth == undefined || auth == false)}
                                    className={classes.button}
                                    variant="outlined"
                                    onClick={(e) => { handleProceed(id) }}
                                >Start Bid</Button>
                            </Grid>
                            <Grid item lg={12}>
                                <img className={classes.itemImage} src={image} alt=""></img>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} sm={12} xl={6} xs={12}>
                        <Grid container spacing={3}>
                            <Grid item lg={12}>
                                <div style={{ color: 'green' }}> {getBidStatusMess} </div>
                            </Grid>
                            <Grid item lg={12}>
                                <BidTimeTag
                                    dateState={new Date(startbid)}
                                    remainingTime={remainingTime}
                                />
                            </Grid>
                            <Grid item lg={12}>
                                <YourBid
                                    yourBid={getYourBid}
                                    isRegister={false}
                                />
                            </Grid>
                            <Grid item lg={12}>
                                <BidStatus
                                    highestBid={getHighestBid}
                                    startedBid={price}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

const mapStateToProps = state => ({
    auth: state.authReducer.login.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
    bidstatus: (prodId, current, start, end) => dispatch(bidAction.bidStatus(prodId, current, start, end))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);