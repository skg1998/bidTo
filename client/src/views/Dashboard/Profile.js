import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    makeStyles
} from '@material-ui/core';

import AccountProfile from '../Profile/AccountProfile';
import AccountProfileDetails from '../Profile/AccountProfileDetail';
import DataTables from '../../components/Table/Table';
import Line from '../../components/charts/line/line';

//total sell vs your sell
//your amount vs gross amount

//Orders 
//your sell history

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    },
    header: {
        fontSize: '25px',
    },
    heading: {

    },
    subh: {

    }
}));

const Profile = () => {
    const classes = useStyles();
    const [color, setColor] = useState('#bb33ff');
    const [toggle, setToggle] = useState(true);
    const [Status, setStatus] = React.useState();

    const styles = {
        backgroundColor: color,
        color: 'white',
        padding: '8px',
        borderRadius: '25px',
        margin: 'auto'
    }

    const checkStatus = (status) => {
        if (status === "Not processed") {
            setColor('#bb33ff');
        } else if (status == "Processing") {
            setColor('#00ace6')
        } else if (status == "Shipped") {
            setColor('#ff8000')
        } else if (status === 'Delivered') {
            setColor('#2eb82e');
        } else if (status === "Cancelled") {
            setColor('#e60000')
        }
        return status;
    }

    const columns = ["OrderId", "productId", "Price", "Created_At", "customer_Id", {
        name: "status",
        label: "Status",
        options: {
            customBodyRender: (value, tableMeta, updateValue) => (
                <div>
                    {toggle ?
                        <div style={styles} onDoubleClick={() => { setToggle(false) }} >{checkStatus(value)}</div> :
                        <input
                            type="text"
                            value={Status}
                            onChange={(event) => {
                                setStatus(Status)
                            }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === 'Escape') {
                                    setToggle(true)
                                    event.preventDefault()
                                    event.stopPropagation()
                                }
                            }}
                        />
                    }
                </div>
            )
        }
    }];

    const data = [
        ["user1", "product1", "4500", "12-04-2020", "Joe James", "Not processed"],
        ["user1", "product1", "4500", "12-04-2020", "Joe James", "Processing"],
        ["user1", "product1", "4500", "12-04-2020", "Joe James", "Shipped"],
        ["user1", "product1", "4500", "12-04-2020", "Joe James", "Delivered"],
        ["user1", "product1", "4500", "12-04-2020", "Joe James", "Cancelled"]
    ];

    const options = {
        filterType: 'checkbox',
    };

    const chartdata = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }
        ]
    };

    return (
        <>

            <Box
                sx={{
                    backgroundColor: 'background.default',
                    py: 3
                }}
                style={{ margin: '15px' }}
            >
                <Container xs={12} lg={12} md={12}>
                    <Grid container spacing={3} style={{ marginBottom: '25px' }} >
                        <Grid item lg={4} md={6} xs={12} >
                            <AccountProfile />
                        </Grid>
                        <Grid item lg={8} md={6} xs={12} >
                            <AccountProfileDetails />
                        </Grid>
                    </Grid>

                    {/*********** All Charts ****************/}
                    <Grid container spacing={3} style={{ marginBottom: '25px' }}>
                        <Grid item lg={6} md={6} xs={12} >
                            <Card className={classes.root}>
                                <CardContent>
                                    <Grid container spacing={3}>
                                        <Grid item lg={12} xl={12} sm={12} xm={12}>
                                            <h4 className={classes.header}>Gross Sell VS Your Sell (Item) </h4>
                                        </Grid>
                                        <Grid item lg={12} xl={12} sm={12} xm={12}>
                                            <Line data={chartdata} />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item lg={6} md={6} xs={12}  >
                            <Card className={classes.root}>
                                <CardContent>
                                    <Grid container spacing={3}>
                                        <Grid item lg={12} xl={12} sm={12} xm={12}>
                                            <h4 className={classes.header}>Gross Sell VS Your Sell (Amount)</h4>
                                        </Grid>
                                        <Grid item lg={12} xl={12} sm={12} xm={12}>
                                            <Line data={chartdata} />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/*********** All Tables ****************/}
                    <Grid container spacing={3}>
                        <Grid item lg={12} md={12} xs={12}>
                            <DataTables
                                title={"Recent Orders"}
                                data={data}
                                columns={columns}
                                options={options}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Profile;