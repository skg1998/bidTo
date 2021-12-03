import React, { useState, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Navbar from '../Home/Navbar';
import ProductItem from '../Products/ProductItem';
import Filter from '../../components/Filters/Filters';
import Empty from '../../components/Empty/Empty'
//redux store
import { connect } from 'react-redux'
import { getAllProducts } from '../../store/reducers/productReducer';


/**
 * @summary productApi
 * @field id
 * @field name
 * @field desc
 * @field image
 * @field location
 * @field price
 * @field startdate
 * @field enddate
 */

/**
 * @summary productRegister
 * @field isRegister
 */

const useStyle = makeStyles((theme) => ({
    root: {

    }
}));

const Products = (props) => {
    const { products } = props;
    const classes = useStyle();

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
    products: getAllProducts(state.products)
})

export default connect(mapStateToProps)(Products);