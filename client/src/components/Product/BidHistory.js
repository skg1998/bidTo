import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//Redux
import { connect, useSelector } from "react-redux";
import { bidAction } from "../../store/actions";

import socketIOClient from "socket.io-client";
const socket = socketIOClient(process.env.REACT_APP_BASE_URL, { 'transports': ['websocket', 'polling'] });

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '15px',
        borderRadius: '25px',
        background: '#f4ffee',
        textAlign: 'center'
    },
    header: {
        fontSize: '30px',
        color: '#b4e3ac'
    },
    heading: {
        color: '#b4e3ac'
    },
    subh: {
        color: '#76c96e'
    }
}));

const BidHistory = (props) => {
    const { prodId, updateYourCurrentBid } = props;
    const classes = useStyles();

    useEffect(() => {
        socket.on('bid-created', (data) => {
            updateYourCurrentBid(data)
        })

        return () => {
            socket.close();
        };

    }, [updateYourCurrentBid])

    let bidHistory = useSelector(state => state.bidReducer?.bidStatus?.products[prodId]?.bidhistory ?? []);

    return (
        <Card className={classes.root}>
            <Box display="flex" p={1} >
                <Box p={1} flexGrow={1}>
                    <strong className={classes.subh}>Bidding History</strong>
                </Box>
            </Box>
            <CardContent style={{ maxHeight: 300, overflow: 'auto', width: '100%' }}>
                <Grid container spacing={3}>
                    {bidHistory.map((bidder, idx) => (
                        <Grid item lg={12}>
                            <Box display="flex" p={1} bgcolor="background.paper" key={idx}>
                                <Box p={1} bgcolor="grey.300">
                                    {bidder.id}
                                </Box>
                                <Box p={1} flexGrow={1} bgcolor="grey.300">
                                    {bidder.bidername}
                                </Box>
                                <Box p={1} bgcolor="grey.300">
                                    {bidder.amount}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    updateYourCurrentBid: (data) => dispatch(bidAction.updateYourCurrentBid(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(BidHistory);