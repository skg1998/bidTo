import React from 'react';
import {
    Box,
    Container,
    Grid,
    Paper
} from '@material-ui/core';

import AccountProfile from '../Profile/AccountProfile';
import AccountProfileDetails from '../Profile/AccountProfileDetail';
import ColumnGroupingTable from './Table';
import SelfTable from './SelfTable';
import ProductChart from './ProductChart';
import SelfChart from './SelfChart'


const Profile = () => {
    return (
        <>
            
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                }}
                style={{ margin: '15px' }}
            >
                <Container maxWidth="lg" xs={12} lg={12} md={12}>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <AccountProfile />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xs={12}
                        >
                            <AccountProfileDetails/>
                        </Grid>
                    </Grid>
                </Container>

                <Container style={{marginTop:"3%"}}>
                    <Grid container spacing={3} style={{height:"20%"}}>
                        
                        <Grid item lg={6} md={6} xs={12} style={{height:"100%"}}>
                           <Paper>
                              <ProductChart/>
                           </Paper>
                        </Grid>
                       
                        <Grid item lg={6} md={6} xs={12}  >
                            <Paper>
                              <ProductChart/>
                           </Paper>
                        </Grid>
                    </Grid>

                   
                </Container>

                <Container style={{marginTop:"3%"}}>
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} xs={12}>
                           <ColumnGroupingTable/>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                           <SelfTable/>
                        </Grid>
                    </Grid>

                   
                </Container>
               
            </Box>
            
                
            
        </>
    )
}

export default Profile;