import { makeStyles } from '@material-ui/core';
import { HourglassEmptyTwoTone } from '@material-ui/icons';
import React from 'react';

const useStyle = makeStyles((theme)=>({
    BidStatus:{
        height:'40%',
        width:'100%',
        borderRadius: '5px',
        border:'2px solid grey ',
        // opacity:'0.4',
        // padding:'0.2rem ',
        Color:'#000000',
        display:'flex',
        flexDirection:'row'        ,
        justifyContent:'space-around',
        
        // wordSpacing:'5rem'
    },
    HighBid:{
        display:'flex',
        flexDirection:'column',
        padding:'0.8rem',
        width:'100%',
        height:'100%',
        backgroundColor:'#e0bebe',
        borderRight:'2px solid grey '
    },
    YourBid:{
        display:'flex',
        flexDirection:'column',
        padding:'0.8rem',
        width:'100%',
        height:'100%',
        backgroundColor:'#98e0a3',
        
      
    }
}));
 const BidStatus=()=>{
    const classes = useStyle();
    var date = new Date();
    return (
        <div className={classes.BidStatus}>
           
            <div className={classes.HighBid}>
                <h3>Highest Bid</h3>
                <h2 style={{color:'crimson'}}>Price</h2>
            </div>
            <div className ={classes.YourBid}>
                <h3>Your Bid</h3>
                <h2 style={{color:'crimson'}}>Price</h2>
            </div>
            <div></div>
        </div>
    );
}
export default BidStatus;
