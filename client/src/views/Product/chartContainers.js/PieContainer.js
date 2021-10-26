import React from 'react';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Pie from '../../../components/charts/pie/pie'

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

const PieContainer = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item lg={12} xl={12} sm={12} xm={12}>
                        <h4 className={classes.header}>Bidder Types</h4>
                    </Grid>
                    <Grid item lg={12} xl={12} sm={12} xm={12}>
                        <Pie />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PieContainer;