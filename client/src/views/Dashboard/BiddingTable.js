import React from 'react';
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    makeStyles
} from '@material-ui/core';
import DataTables from '../../components/Table/Table';

const BiddingTable = () => {
    const columns = ["userId", "username", "email", "gender", "Address", "Created_At"];

    const data = [
        ["user1", "user1", "user1@email.com", "male", "Joe James", "12-04-2020"],
        ["user1", "user1", "user1@email.com", "male", "Joe James", "12-04-2020"],
        ["user1", "user1", "user1@email.com", "male", "Joe James", "12-04-2020"],
        ["user1", "user1", "user1@email.com", "male", "Joe James", "12-04-2020"],
        ["user1", "user1", "user1@email.com", "male", "Joe James", "12-04-2020"]
    ];

    const options = {
        filterType: 'checkbox',
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
                    {/*********** All Tables ****************/}
                    <Grid container spacing={3}>
                        <Grid item lg={12} md={12} xs={12}>
                            <DataTables
                                title={"All Users"}
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

export default BiddingTable;