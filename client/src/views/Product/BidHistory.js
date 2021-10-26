import React from 'react';
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const bidders = [
    { id: '0', bidername: 'topi', amount: '234' },
    { id: '1', bidername: 'topi', amount: '234' },
    { id: '2', bidername: 'topi', amount: '234' },
    { id: '3', bidername: 'topi', amount: '234' },
    { id: '4', bidername: 'topi', amount: '234' },
    { id: '5', bidername: 'topi', amount: '234' },
    { id: '6', bidername: 'topi', amount: '234' },
    { id: '7', bidername: 'topi', amount: '234' },
    { id: '8', bidername: 'topi', amount: '234' },
    { id: '9', bidername: 'topi', amount: '234' },
    { id: '10', bidername: 'topi', amount: '234' }
]

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
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Box display="flex" p={1} >
                <Box p={1} flexGrow={1}>
                    <strong className={classes.subh}>Bidding History</strong>
                </Box>
            </Box>
            <CardContent style={{ maxHeight: 300, overflow: 'auto', width: '100%' }}>
                <Grid container spacing={3}>
                    {bidders.map((bidder, idx) => (
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

export default BidHistory;