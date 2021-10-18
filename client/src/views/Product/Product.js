import React from 'react';
import {Button, makeStyles } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import { DeleteOutline } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  app:{
  boxSizing:"border-box",
  margin: "0px",
  padding:'0px'
  

  },
  container:{
  margin:"0px 50px",
  display: "flex",
  // justifyContent:"space-between",
  flexWrap: "wrap",
  height:'100vh',
  padding: "50px 16px 16px 16px",
  boxShadow: "0 0 5px #ccc",
  
  },
  productImage:{
    width: "700px", 
    minWidth: "290px",
    overflow:"hidden",
    margin: "15px auto",
    
    
  },
  box:{
    maxWidth: "500px",
    minWidth: "290px",
    margin: '15px auto',
    
  },
  image:{
    width: "100%",
    height: "100%",
    maxHeight: "400px",
    display: "block",
    objectFit: "cover",
    // boxShadow: "0 0 5px #ccc"
  },
  row:{
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: "15px"
  },
  h1:{
    textTransform:'uppercase',
    letterSpacing:'2px'
  },
  span:{
    color:"#e03154",
    fontSize:"2rem"
  },
  p:{
    lineHeight: '1.5',
  margin: "15px 0"
  },
  button:{
    width:"100%",
    margin:'15px auto',
    height:'70px',
    backgroundColor:"crimson",
    fontWeight:'bold'
  
  }
  
}));

const Product = () => {
   const classes = useStyles();
    const items  = {
        products: [
          {
            "_id": "1",
            "title": "Nike Shoes",
            "src": [
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY",
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4fa18151-fffd-4c92-ad2c-2fb37c21e48d/jordan-jumpman-2021-pf-basketball-shoe-X3gQBM.png",
            
              ],
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
      
      <div className={classes.app}>
        {
          items["products"].map(item =>(
            <div className={classes.container} key={item._id}>
              <div className={classes.productImage}>
                <img src={item.src[0]} className={classes.image} alt="" />
                <Button className={classes.button} variant="contained" >Start Bid</Button>
              </div>
        
              <div className={classes.box}>
                <div className={classes.row}>
                  <h1 className={classes.h1} >{item.title}</h1>
                  <span className={classes.span}>${item.price}</span>
                </div>
        
                <p className={classes.p}>{item.description}</p>
                <p className={classes.p}>{item.content}</p>
        
        
              </div>
            </div>
          ))
        }
      </div>
        
      );
}

export default Product;

