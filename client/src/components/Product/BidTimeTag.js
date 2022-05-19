import React from 'react';
import { Grid, makeStyles, Card, CardContent } from '@material-ui/core';
import { HourglassEmptyTwoTone } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
    title: {
        fontSize: "20px"
    },
    bidTime: {
        borderRadius: '20px',
        border: '1px solid #dcdcd8 ',
        color: '#b3b4ad'
    },
    datetime: {
        fontSize: '20px'
    },
    remainingTime: {
        float: 'right',
        fontWeight: 'bold',
        fontSize: "20px"
    }
}));

const BidTimeTag = (props) => {
    const { dateState, remainingTime } = props;
    const classes = useStyle();

    return (
        <Card className={classes.bidTime}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item lg={12}>
                        <div className={classes.title}>
                            <div> <HourglassEmptyTwoTone /><span style={{ color: 'red' }}>{remainingTime}</span> </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={12} xl={6} xs={12}>
                        <div className={classes.datetime}>
                            {dateState && dateState.toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={12} xl={6} xs={12}>
                        <div className={classes.remainingTime}>
                            {dateState && dateState.toLocaleString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default BidTimeTag;
