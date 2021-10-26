import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { generatePath, useHistory } from "react-router-dom";

import BidTimeTag from './BidTimeTag';
import BidStatus from './BidStatus';

const useStyle = makeStyles((theme) => ({
    root: {

    },
    item: {
        backgroundColor: 'white',
        width: '75%',
        height: '30%',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius: '1.5%',
        padding: '0.1%',
        display: 'flex',
        flexDirection: 'row',
        margin: '1%'

    },
    itemImage: {
        height: '100%',
        width: '40%',
        padding: '3%',

    },
    itemDetail: {
        height: '100%',
        padding: '0.5%',
        width: '40%',
        borderRight: '1px solid #e7e9eb',
        display: 'flex',
    },
    itemStatus: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '60%',
        padding: '3%',
        wordWrap: 'break-word',
        alignItems: 'space-around'
    },
    bidDetail: {
        height: '100%',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5%',
        justifyContent: 'space-around'
    },

    button: {
        width: "50%",
        height: '10%',
        color: 'green',
        fontWeight: 'bold'
    },

}));
const ProductItem = ({ product }) => {
    const { id, image, name, desc } = product;
    const classes = useStyle();
    const [productId, serProductId] = useState();
    const history = useHistory();

    const handleProceed = (id) => {
        serProductId(id)
        productId && history.push(generatePath("/product/:id", { id }));
    };

    return (
        <div className={classes.item}>
            <div className={classes.itemDetail}>
                <img className={classes.itemImage} src={image} alt=""></img>
                <div className={classes.itemStatus}>
                    <div>{name}</div>
                    <div style={{ color: 'grey' }} >{desc}</div>
                    <Button
                        className={classes.button}
                        variant="outlined"
                        onClick={(e) => { handleProceed(id) }}
                    >Start Bid</Button>
                </div>
            </div>
            <div className={classes.bidDetail}>
                <div style={{ color: 'green' }}>Bidding is live!!!  </div>
                <BidTimeTag />
                <BidStatus />
            </div>
        </div>
    );
};

export default ProductItem;