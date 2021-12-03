import { Grid, makeStyles, Card, CardContent, Button } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles((theme) => ({
    currentBidStatus: {
        borderRadius: '20px',
        color: '#66c360',
        fontSize: '20px',
        background: '#f4ffee',
        margin: '10px',
        marginBottom: '20px'
    },
    yourBid: {},
    BidStatus: {
        borderRadius: '20px',
        color: '#b3b4ad',
        fontSize: '20px',
        margin: '10px',
        marginBottom: '20px'
    }
}));
const YourBid = (props) => {
    const { yourBid, isRegister } = props;
    const classes = useStyle();
    return (
        <Grid container spacing={3}>
            <Grid lg={12}>
                {isRegister ?
                    <Card className={classes.currentBidStatus}>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item lg={6} sm={12} xl={6} xs={12}>
                                    <div className={classes.yourBid}>
                                        <div>Your Bid</div>
                                        <div style={{ color: 'red', fontSize: '15px' }}>You've been outBid </div>
                                    </div>
                                </Grid>
                                <Grid item lg={6} sm={12} xl={6} xs={12}>
                                    <div className={classes.yourBid}>
                                        <div style={{ fontSize: '30px', fontWeight: 'bold', float: 'right' }}>
                                            {yourBid}
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card> :
                    <Card className={classes.currentBidStatus}>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item lg={6} sm={12} xl={6} xs={12}>
                                    <div className={classes.yourBid}>
                                        <div>Your Bid</div>
                                        <div style={{ color: 'red', fontSize: '15px' }}>You've been outBid </div>
                                    </div>
                                </Grid>
                                <Grid item lg={6} sm={12} xl={6} xs={12}>
                                    <div className={classes.yourBid}>
                                        <div style={{ fontSize: '30px', fontWeight: 'bold', float: 'right' }}>
                                            <Button variant="outlined" style={{ color: 'red', borderColor: 'red' }}> Register </Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                }
            </Grid>
        </Grid>
    );
}
export default YourBid;
