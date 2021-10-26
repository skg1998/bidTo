import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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

const BidQuery = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item lg={12} xl={12} sm={12} xm={12}>
                        <h4 className={classes.header}>Any Question ?</h4>
                    </Grid>
                    <Grid item lg={12} xl={12} sm={12} xm={12}>
                        <Link className={classes.heading}>Get in touch with our call center</Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default BidQuery;