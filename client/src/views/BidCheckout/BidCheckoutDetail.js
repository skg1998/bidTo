import { HourglassEmptyTwoTone } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";
import { Button, makeStyles, Card, Paper } from "@material-ui/core";
import React from "react";


const useStyle = makeStyles((theme) => ({
  item: {
    height: "200px",
    padding: "5px",
    transition: "0.3s",
    borderRadius: "5px",
    flexDirection: "row",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    // border: "2px solid",
    display: "flex",
    justifyContent: "cente",
    alignItems: "center",
  },
  itemDetail: {
    height: "100%",
    width: "100%",
    borderRight: "1px solid #e7e9eb",
    display: "flex",
  },
  itemStatus: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "15px",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  bidDetail: {
    height: "100%",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    justifyContent: "space-around",
  },
  bidTime: {
    height: "2rem",
    width: "100%",
    borderRadius: "5px",
    border: "2px solid black ",
    opacity: "0.3",
    padding: "25px auto",
    Color: "#000000",
  },
  button: {
    width: "50%",
    color: "green",
    fontWeight: "bold",
  },
  checkoutDetail: {
    marginLeft: "20px",
    marginRight: "20px",
    // border: "2px solid",
    marginTop: "20px",
  },
  list: {

  },
  listBox: {
    margin: "10px",
  },

  "@Keyframes item": {},
}));
const BidCheckoutDetail = () => {
  const classes = useStyle();
  var date = new Date();
  var data = 189;
  return (
    <div>

      <div className={classes.item}>
        <div className={classes.itemDetail}>
          <img
            style={{ borderRadius: "10rem" }}
            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
            alt=""
          ></img>
          <div className={classes.itemStatus}>
            <h3>Egyptian Pair Shoes</h3>
            <span style={{ color: "grey" }}>Description: 2 pair of Ancuent Show</span>
            <Button className={classes.button} variant="outlined">
              Checkout
            </Button>
          </div>
        </div>
        <div className={classes.bidDetail}>
          <h4 style={{ color: "green" }}>Bid Won on </h4>
          <h5>19/10/2021 </h5>
          <h6>3 PM</h6>
          <h6>Highest Bid: RS 400000</h6>
        </div>


      </div>
      <div className={classes.checkoutDetail} >
        <h2>Listing Details</h2>
        <div className={classes.list}>
          <ul>
            <li className={classes.listBox}>
              <div>
                <img src="https://img.icons8.com/ultraviolet/40/000000/money--v1.png"></img>

                <h4>Initial Amount</h4>
                <p>20,000</p>
              </div>
            </li>
            <li className={classes.listBox}>
              <div>
                <img src="https://img.icons8.com/office/16/000000/worldwide-location--v1.png"></img>

                <h4>Location</h4>
                <p>Los Angeles, USA  </p>
              </div>
            </li>
            <li className={classes.listBox}>
              <div >
                <img src="https://img.icons8.com/ios/50/000000/weight.png" />
                <h4>Weight</h4>
                <p>4kg</p>
              </div>
            </li>
            <li className={classes.listBox}>
              <div >
                <img src="https://img.icons8.com/office/16/000000/details-pane.png" />
                <h4>Other Details</h4>
                <p>A unique glossy waxy layet Leather Sghow specially made in USA </p>
              </div>
            </li>
          </ul>
        </div>

        <ul>

        </ul>

      </div>



    </div>
  );
};
export default BidCheckoutDetail;
