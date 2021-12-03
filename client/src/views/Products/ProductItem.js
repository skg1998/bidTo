import React, { useState, useEffect } from 'react';
import { Button, makeStyles, Grid, Card, CardContent } from '@material-ui/core';
import { generatePath, useHistory } from "react-router-dom";

import BidTimeTag from '../../components/Product/BidTimeTag';
import YourBid from '../../components/Product/YourBid';
import BidStatus from '../../components/Product/BidStatus';

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
const ProductItem = ({ product }) => {
    const { id, image, name } = product;
    const classes = useStyle();
    const [productId, serProductId] = useState();
    const [remainingTime, setRemainingTime] = useState();
    const history = useHistory();

    const handleProceed = (id) => {
        serProductId(id)
        productId && history.push(generatePath("/product/:id", { id }));
    };

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
            //     addTocart(data);
            // }
        }
    }

    return (
        <Card className={classes.item}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item lg={6} sm={12} xl={6} xs={12}>
                        <Grid container spacing={3} >
                            <Grid item lg={6} sm={12} xl={6} xs={12}> <div style={{ fontSize: '30px' }}>{name}</div></Grid>
                            <Grid item lg={6} sm={12} xl={6} xs={12}>
                                <Button
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
                                <div style={{ color: 'green' }}>Bidding is live!!!  </div>
                            </Grid>
                            <Grid item lg={12}>
                                <BidTimeTag
                                    dateState={new Date('2021-11-26T18:35:25.235Z')}
                                    remainingTime={remainingTime}
                                />
                            </Grid>
                            <Grid item lg={12}>
                                <YourBid
                                    yourBid={"yourBid"}
                                    isRegister={false}
                                />
                            </Grid>
                            <Grid item lg={12}>
                                <BidStatus
                                    highestBid={"highestBid"}
                                    startedBid={"startedBid"}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProductItem;