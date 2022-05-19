import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ProductCard from '../../../components/cards/productCard'

//redux store
import { connect, useSelector } from 'react-redux'
import { productAction } from '../../../store/actions'

const ScheduleProducts = (props) => {
    const { getMyAllProducts, deleteHandler, updateHandler } = props
    const products = useSelector(state => state.products.myProd?.myallProduct?.data ?? []);

    useEffect(() => {
        getMyAllProducts();
    }, [])

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
                        {products && products.map((product) => (
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

const mapStateToProps = (state) => ({
    // null
})

const mapDispatchToProps = (dispatch) => ({
    getMyAllProducts: () => dispatch(productAction.getMyAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleProducts);