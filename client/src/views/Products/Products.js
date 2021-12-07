import React, { useState, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Navbar from '../Home/Navbar';
import ProductItem from '../Products/ProductItem';
import Filter from '../../components/Filters/Filters';
import Empty from '../../components/Empty/Empty'

//redux store
import { connect, useSelector } from 'react-redux'
import { productAction } from '../../store/actions';

/**
 * @summary productRegister
 * @field isRegister
 */

const useStyle = makeStyles((theme) => ({
    root: {

    }
}));

const Products = (props) => {
    const { getAllProducts } = props;
    const classes = useStyle();

    useEffect(() => {
        getAllProducts();
    }, []);

    const products = useSelector(state => state.products.allproducts?.products?.data ?? []);

    console.log("products", products);
    return (
        <div>
            <Navbar />
            <Grid container spacing={3} style={{ marginTop: '80px', padding: '20px' }}>
                <Grid lg={3} sm={12} xs={12}>
                    <Filter />
                </Grid>
                <Grid lg={9} sm={12}>
                    {products ? products.map((product) => {
                        return (<ProductItem product={product}></ProductItem>);
                    }) : <Empty />}
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(productAction.getAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);