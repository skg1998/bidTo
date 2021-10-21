import React from 'react';
import {makeStyles } from '@material-ui/core';
import { AttachMoneyRounded, Info, Public } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  productDetail:{
  height:'100%',
  width:'100%',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  

  },
  container:{
  padding:'3%',
  display: "flex",
  flexWrap: "wrap",
  height:'100%',
  width:'100%',
  flexDirection:'column',
  
  },
  row:{
    display:'flex',
    flexDirection:'row',
    marginTop:'1%',
    width:'60%',
    padding:'1%',
    gap:'5%'
  },

  image:{
    width: "100%",
    height: "100%",
    objectFit: "fit",
}

  
}));

const Product = () => {
   const classes = useStyles();
    const items  = {
        products: [
          {
            "_id": "1",
            "title": "Nike Shoes",
            "location":"INDIA",
            src: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
               ,
        description:"Inspired by the design of the latest Air Jordan game shoe, the Jordan Jumpman 2021 helps up-and-coming players level up their game. The shoe features responsive Zoom Air cushioning in the forefoot. Curved Flightwire cables are stitched into the material for a close, secure fit for competitive play. This PF version is ideal for use on outdoor courts. ",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 23,
            "colors":["red","black","crimson","teal"],
            "count": 1
          }
        ],
        index: 0,
      };
    
    return(
      
      <div className={classes.productDetail}>
        {

          items["products"].map(item =>(
            <div className={classes.container}>
              <div style ={{fontWeight:'bold'}}>  
                {item.title}
              </div>
              <div className={classes.row}>
                <Public></Public>
                <div style={{marginRight:'4%'}}>Location</div>
                <div>{item.location}</div>
              </div>
              <div className={classes.row}>
                <Info></Info>
                <div>Description</div>
                <div >{item.description}</div>
              </div>
              <div className={classes.row}>
                <AttachMoneyRounded></AttachMoneyRounded>
                <div style={{marginRight:'6%'}}>Price</div>
                <div >{item.price}</div>
              </div>
              <div className ={classes.row}>
                <img className ={classes.image} src = {item.src}></img>
              </div>  
           </div>
          ))
        }
     
      </div>
        
      );
}

export default Product;
