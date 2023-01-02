import React from 'react';
import { Grid, Button, Typography, makeStyles } from '@material-ui/core';
import ProductCart from './ProductCart'
import CheckoutConfirmation from './partial/CheckoutConfirmation'

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: '35px',
        fontWeight: 'bold',
    },
    orderHeader: {
        fontSize: '25px',
        fontWeight: 'bold'
    },
    orderCard: {
        marginTop: '15px',
        border: "3px solid #cccccc",
        background: 'white',
        padding: '20px',
        borderRadius: '10px'
    },
    boxTitle: {
        fontSize: 18,
        color: "#cccccc",
        fontWeight: 'bold'
    }
}))

const Cart = ({ products, total, removeFromCart, changeQty, chekcoutDialog,
    handleCheckoutDialog, handleCheckoutSubmit }) => {
    const classes = useStyles();
    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
        products.map(product =>
            <ProductCart
                img={product.image}
                title={product.name}
                price={product.price}
                key={product.id}
                onQtySelected={(val) => changeQty(product.id, val)}
                onRemoveFromCartClicked={() => removeFromCart(product.id)}
            />
        )
    ) : (
        <Typography variant="title" color="error" className={classes.noItemsTypo}>Please add some products to cart.</Typography>
    )

    return (
        <div className={classes.root}>
            <div className={classes.heading}> Shopping Cart</div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={8}>
                    {/* User Data */}
                    <div className={classes.orderCard}>
                        <div className={classes.boxTitle}>Login User Detail</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                Test User  +806-445-4453
                            </div>
                            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                <Button
                                    variant="raised"
                                >
                                    Change
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Shipping Detail */}
                    <div className={classes.orderCard}>
                        <div className={classes.boxTitle}>Shipping Detail</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                Brady Copar, New Civil Colony, Slat lake city,<br></br>
                                United State, , 2971
                            </div>
                            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                <Button
                                    variant="raised"
                                >
                                    Change
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Payment Detail */}
                    <div className={classes.orderCard}>
                        <div className={classes.boxTitle}>Payment Method</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>

                            </div>
                            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                <Button
                                    style={{ color: 'white', background: 'black' }}
                                    variant="raised"
                                    onClick={handleCheckoutDialog}
                                    disabled={hasProducts ? false : true}
                                >
                                    Checkout
                                </Button>
                                <CheckoutConfirmation
                                    chekcoutDialog={chekcoutDialog}
                                    handleCheckoutSubmit={handleCheckoutSubmit}
                                    handleCheckoutDialog={handleCheckoutDialog}
                                    products={products}
                                    total={total}
                                />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                    <div className={classes.orderCard}>
                        <div className={classes.orderHeader}>Your Order</div>
                        <div>{nodes}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Total</div>
                            <div style={{ fontWeight: 'bold', fontSize: '20px' }}>${total}</div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cart;