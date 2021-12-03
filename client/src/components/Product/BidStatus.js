import { Grid, makeStyles, Card, CardContent, Button } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles((theme) => ({
    BidStatus: {
        borderRadius: '20px',
        color: '#b3b4ad',
        fontSize: '20px',
        margin: '10px',
        marginBottom: '20px'
    },
    startedBid: {
        backgroundColor: '#f8faf7',
        color: '#6f7c65',
    },
    highestbid: {
        backgroundColor: '#fff3eb',
        color: '#b4714c'
    }
}));
const BidStatus = (props) => {
    const { highestBid, startedBid } = props;
    const classes = useStyle();
    return (
        <Grid container spacing={3}>
            <Grid lg={6} sm={12} xl={6} xs={12}>
                <Card className={classes.BidStatus}>
                    <CardContent>
                        <div className={classes.startedBid}>
                            <div>Started Bid</div>
                            <div style={{ fontSize: '30px', fontWeight: 'bold' }}>{startedBid}</div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid lg={6} sm={12} xl={6} xs={12}>
                <Card className={classes.BidStatus}>
                    <CardContent>
                        <div className={classes.highestbid}>
                            <div>Highest Bid</div>
                            <div style={{ fontSize: '30px', fontWeight: 'bold' }}>{highestBid}</div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
export default BidStatus;
