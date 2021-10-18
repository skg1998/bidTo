import React from 'react';
import {Button, makeStyles } from '@material-ui/core';
import Navbar from '../HomeComponet/Navbar';
import ProductItem from '../Products/ProductItem'


const useStyle = makeStyles((theme)=>({
    root:{

    },
    status:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        height:'20%',
        width:'80%',
        margin:'80px auto 30px',
        padding:'50px'
    },
    items:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'100%',
        height:'80%',
       
    },
}));
const Products = ()=>{
    const classes = useStyle();
    const ProductArray = ["","","",""];
    return (
        <div>
            <Navbar></Navbar>
            <div className={classes.status}>
                <p>Showing</p>
                <p>All</p>
                <p>Upcoming</p>
                <p>Over</p>
            </div>
            <div className={classes.items}>
            {ProductArray.map(()=>{
                 return (<ProductItem></ProductItem>);
            })}    
            </div>
            
           
        </div>
    );
}

export default Products;