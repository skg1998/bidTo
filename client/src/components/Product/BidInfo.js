import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//redux-store
import { connect, useSelector } from "react-redux";
import { bidAction } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '15px',
        borderRadius: '25px',
        background: '#f4ffee',
        textAlign: 'center'
    },
    header: {
        fontSize: '40px',
        color: '#b4e3ac'
    },
    heading: {
        color: '#b4e3ac'
    },
    subh: {
        color: '#76c96e'
    },
    button: {
        background: '#2caa25',
        color: 'white',
        borderRadius: '25px',
        width: '80%',
        padding: '12px 20px',
        '&:hover': {
            color: '#2caa25',
            border: '1px solid #2caa25'
        }
    }
}));

const BidInfo = (props) => {
    const { creatBid, prodId } = props;
    const classes = useStyles();
    const [bid, setBid] = useState();
    let bidStatusMess = useSelector(state => state.bidReducer?.bidStatus?.products[prodId]?.bidstatus ?? " ");
    let highestbid = useSelector(state => state.bidReducer?.bidStatus?.products[prodId]?.highestbid ?? "");
    let yourbid = useSelector(state => state.bidReducer?.bidStatus?.products[prodId]?.yourbid ?? "");
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            prodId: prodId,
            bidAmount: bid
        }
        creatBid(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item lg={12} xl={12} sm={12} xm={12}>
                            <h4 className={classes.header}>Bidding is <b className={classes.subh}> live! </b></h4>
                        </Grid>
                        <Grid item lg={12} xl={12} sm={12} xm={12}>
                            <p className={classes.heading}>
                                Enter ceiling price <b className={classes.subh}> {highestbid} </b>
                            </p>
                            <TextField
                                id="outlined-basic"
                                label="Enter Bid"
                                variant="outlined"
                                value={bid}
                                onChange={e => setBid(e.target.value)}
                            />
                        </Grid>
                        <Grid item lg={12} xl={12} sm={12} xm={12}>
                            <Button
                                disabled={bidStatusMess === 'BID END' || bidStatusMess === "BID NOT STARTED YET"}
                                type="submit"
                                className={classes.button}
                            > Place your Bid </Button>
                        </Grid>
                        <Grid item lg={12} xl={12} sm={12} xm={12}>
                            <p className={classes.heading}>your highest bid is <b className={classes.subh}> {yourbid} </b></p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    )
}

const mapStateToProps = (state) => ({
    //null
});

const mapDispatchToProps = (dispatch) => ({
    creatBid: (data) => dispatch(bidAction.creatBid(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(BidInfo);