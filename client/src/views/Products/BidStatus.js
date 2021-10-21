import { makeStyles } from '@material-ui/core';
import { HourglassEmptyTwoTone } from '@material-ui/icons';
import React from 'react';

const useStyle = makeStyles((theme)=>({
    BidStatus:{
        height:'60%',
        width:'100%',
        margin:'0.5%',
        border:'2px solid grey ',
        Color:'#000000',
        display:'flex',
        flexDirection:'row',
        wordWrap:'break-word',
        color:'#324425',
    },
    HighBid:{
        display:'flex',
        flexDirection:'column',
      
        width:'53%',
        height:'100%',
        backgroundColor:'#fff3eb',
        borderRight:'1px solid grey ',
        padding:'3%',
    },
    YourBid:{
        display:'flex',
        flexDirection:'column',
        padding:'3%',
        width:'47%',
        height:'100%',
        backgroundColor:'#f4ffee',
    }
}));
 const BidStatus=()=>{
    const classes = useStyle();
    var date = new Date();
    return (
        <div className={classes.BidStatus}>
           
            <div className={classes.HighBid}>
                <div>Highest Bid</div>
                <div style={{color:'#b16b45'}}>Price</div>
            </div>
            <div className ={classes.YourBid}>
                <div>Your Bid</div>
                <div style={{color:'#60c059'}}>Price</div>
            </div>
            <div></div>
        </div>
    );
}
export default BidStatus;
