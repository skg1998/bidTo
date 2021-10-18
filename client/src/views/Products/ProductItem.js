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
        height:'17rem',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius:'5px',
        // padding:'5px',
        display:'flex',
        flexDirection:'row',
        margin:'5px'        

    },
    itemDetail:{
        height:'100%',
        width:'40%',
        borderRight:'1px solid #e7e9eb',
        display:'flex',
    },
    itemStatus:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%',
        padding:'15px',
        
        justifyContent:'space-around'
    },
    bidDetail:{
        height:'100%',
        width:'60%',
        display:'flex',
        flexDirection:'column',
        padding:'15px',
        justifyContent:'space-around'
        
    },
    bidTime:{
        height:'2rem',
        width:'100%',
        borderRadius: '5px',
        border:'2px solid black ',
        opacity:'0.3',
        padding:'25px auto',
        Color:'#000000' 
    },
    button:{
        width:"50%",
        color:'green',
        fontWeight:'bold'
    },
    '@Keyframes item':{

    }
}));
const ProductItem = ()=>{
    const classes = useStyle();
    return (
        // <div className ={classes.items}>
               <div className={classes.item}>
                <div className={classes.itemDetail}>
                    <img style={{borderRadius:'10rem'}} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY" alt =""></img>
                    <div className={classes.itemStatus}>
                        <h3>productName</h3>
                        <h4 style={{color:'grey'}} >productDiscription</h4>
                        <Button className={classes.button} variant="outlined" >Start Bid</Button>
                    </div>
                </div>
                <div className={classes.bidDetail}>
                        <h4 style={{color:'green'}}>Bidding is live!!!  </h4>
                        <BidTimeTag ></BidTimeTag>
                        <BidStatus></BidStatus>
                    {/* </div> */}
                </div>
                </div>              
        // </div>

    );
};

export default ProductItem;