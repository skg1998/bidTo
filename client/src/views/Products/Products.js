import React from 'react';
import { makeStyles } from '@material-ui/core';
import Navbar from '../HomeComponet/Navbar';
import ProductItem from '../Products/ProductItem'

const products = [
    {
        id: 1,
        name: "Product Name",
        desc: "full product description",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
    },
    {
        id: 1,
        name: "Product Name",
        desc: "full product description",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
    },
    {
        id: 1,
        name: "Product Name",
        desc: "full product description",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
    },
    {
        id: 1,
        name: "Product Name",
        desc: "full product description",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
    }
];

const useStyle = makeStyles((theme) => ({
    root: {

    },
    status: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        width: '80%',
        margin: '80px auto 30px'
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '80%',

    },
}));
const Products = () => {
    const classes = useStyle();
    return (
        <div>
            <Navbar />
            <div className={classes.status}>
                <p>Showing</p>
                <p>All</p>
                <p>Upcoming</p>
                <p>Over</p>
            </div>
            <div className={classes.items}>
                {products.map((product) => {
                    return (<ProductItem product={product}></ProductItem>);
                })}
            </div>
        </div>
    );
}

export default Products;