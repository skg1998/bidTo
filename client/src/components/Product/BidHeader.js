import { Button, Grid, makeStyles } from '@material-ui/core';
import { FavoriteBorderOutlined, Favorite } from '@material-ui/icons';
import React from 'react';

const useStyle = makeStyles((theme) => ({
    title: {
        fontSize: '40px',
        fontWeight: 'bold'
    },
    bidid: {
        fontSize: '20px'
    },
    watchButton: {
        borderRadius: "25px",
        color: "#dddeda",
        float: 'right',
        background: 'white'
    }
}));
const BidHeader = (props) => {
    const { title, prodId, isProdWishlisted, addToWishlist, removeFromWishlist } = props;
    const classes = useStyle();
    return (
        <div className={classes.bidTime}>
            <Grid container spacing={3}>
                <Grid item lg={12}><h2 className={classes.title}> {title}</h2></Grid>
                <Grid item lg={6} sm={12} xl={6} xs={12}><div className={classes.bidid}>{prodId}</div></Grid>
                <Grid item lg={6} sm={12} xl={6} xs={12}>
                    <Button
                        variant="outlined"
                        className={classes.watchButton}
                        onClick={() => {
                            isProdWishlisted
                                ? removeFromWishlist(prodId)
                                : addToWishlist(prodId);
                        }}
                    >
                        {isProdWishlisted ? <> <Favorite />Watch </> : <><FavoriteBorderOutlined /> Watch</>}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default BidHeader;
