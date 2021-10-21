import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ProductCard from '../../../components/cards/productCard'

const useStyles = makeStyles(theme => ({

}));

const ScheduleProducts = (props) => {
    const { products, updateHandler, deleteHandler } = props
    return (
        <div className="product-container-dashboard">
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                }}
            >
                <Container maxWidth={false}>
                    <Grid
                        container
                        spacing={3}
                    >
                        {products.map((product) => (
                            <Grid
                                item
                                lg={4}
                                sm={6}
                                xl={4}
                                xs={12}
                            >
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    deleteHandler={(product) => deleteHandler(product)}
                                    updateHandler={(product) => updateHandler(product)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default ScheduleProducts;