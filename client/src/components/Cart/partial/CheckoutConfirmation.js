import React from 'react';
import {
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Slide,
    Typography,
    Dialog
} from '@material-ui/core';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const CheckoutConfirmation = ({ chekcoutDialog, handleCheckoutDialog, handleCheckoutSubmit, products, total }) => (
    <Dialog
        open={chekcoutDialog}
        transition={Transition}
        keepMounted
        onClose={handleCheckoutDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle id="alert-dialog-slide-title">
            Are you sure want to checkout ?
        </DialogTitle>
        <DialogContent id="alert-dialog-slide-description">
            {
                products && products.map(product => (
                    <div key={product.id}>
                        <Typography> <b>Product Name:</b> {product.name}</Typography>
                        <Typography><b>Price:</b> {product.price}</Typography>
                        <br />
                    </div>
                ))
            }
            <Typography variant="body2" style={{ fontWeight: 500, fontSize: '1.2rem' }}>Total: {total}</Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCheckoutDialog} color="primary">
                Cancel
            </Button>
            <Button onClick={handleCheckoutSubmit} color="primary">
                Checkout
            </Button>
        </DialogActions>
    </Dialog>
);

export default CheckoutConfirmation;