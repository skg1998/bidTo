import React from 'react';
import {Button, makeStyles } from '@material-ui/core';

import BidTimeTag from './BidTimeTag';
import BidStatus from './BidStatus';

const useStyle = makeStyles((theme)=>({
    root:{

    },
    
   
    item:{
        backgroundColor:'white',
        width:'75%',
        height:'30%',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius:'1.5%',
        padding:'0.1%',
        display:'flex',
        flexDirection:'row',
        margin:'1%'        

    },
    itemImage:{
        height:'100%',
        width:'40%',
        padding:'3%',
        
    },
    itemDetail:{
        height:'100%',
        padding:'0.5%',
        width:'40%',
        borderRight:'1px solid #e7e9eb',
        display:'flex',
    },
    itemStatus:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'60%',
        padding:'3%',
        wordWrap:'break-word',
        alignItems:'space-around'
    },
    bidDetail:{
        height:'100%',
        width:'60%',
        display:'flex',
        flexDirection:'column',
        padding:'0.5%',
        justifyContent:'space-around'
        
    },
   
    button:{
        width:"50%",
        height:'10%',
        color:'green',
        fontWeight:'bold'
    },
   
}));
const ProductItem = ()=>{
    const classes = useStyle();
    return (
        // <div className ={classes.items}>
               <div className={classes.item}>
                <div className={classes.itemDetail}>
                    <img className ={classes.itemImage} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY" alt =""></img>
                    <div className={classes.itemStatus}>
                        <div>productName</div>
                        <div style={{color:'grey'}} >productDiscription</div>
                        <Button className={classes.button} variant="outlined" >Start Bid</Button>
                    </div>
                </div>
                <div className={classes.bidDetail}>
                        <div style={{color:'green'}}>Bidding is live!!!  </div>
                        <BidTimeTag ></BidTimeTag>
                        <BidStatus></BidStatus>
                    {/* </div> */}
                </div>
                </div>              
        // </div>

    );
};

export default ProductItem;