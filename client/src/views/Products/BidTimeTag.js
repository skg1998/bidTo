import { makeStyles } from '@material-ui/core';
import { HourglassEmptyTwoTone } from '@material-ui/icons';
import React from 'react';

const useStyle = makeStyles((theme)=>({
    bidTime:{
        height:'20%',
        width:'100%',
        borderRadius: '5px',
        border:'2px solid black ',
        opacity:'0.3',
        padding:'0.2rem ',
        Color:'#000000',
        display:'grid',
        gridAutoFlow:'column',
        gridColumnGap:'2px'
        // justifyContent:'space-around',
        
        // wordSpacing:'5rem'
    },
}));
 const BidTimeTag=()=>{
    const classes = useStyle();
    var date = new Date();
    return (
        <div className={classes.bidTime}>
            <>
            <HourglassEmptyTwoTone></HourglassEmptyTwoTone>
            <p>{"Remaining Time"}</p>
            </>
            
            <p>26:30:30</p>
        </div>
    );
}
export default BidTimeTag;
