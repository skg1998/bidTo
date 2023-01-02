import React, { Component } from 'react';
import { connect } from "react-redux";

import Cart from '../../components/Cart'
import Empty from '../../components/Empty/Empty'

import { cartAction } from "../../store/actions";
import { getTotalItemPrice, getTotalPrice } from '../../store/reducers';
import { getTotalCartItems, getAllCartItems, getQuantity } from "../../store/reducers/cartReducer";

class CartContainer extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
        };
    }

    handleOpenDialog = () => {
        this.setState({ open: !this.state.open });
    };

    handleCheckoutSubmit = () => {
        const { products, checkout } = this.props
        const reduceProductNeeds = products.reduce((all, item) => {
            all.push({
                id: item.id,
                image: item.img,
                price: item.price,
                quantity: item.quantity
            })
            return all
        }, [])
        checkout(reduceProductNeeds)
        return this.setState({ open: !this.state.open })
    }

    render() {
        const { totalItems, cartItems, totalPrice, removeFromCart, changeQty } = this.props
        return (
            <div style={{ padding: '25px', marginTop: '70px' }}>
                {totalItems ?
                    <Cart
                        products={cartItems}
                        total={totalPrice}
                        changeQty={(productId, val) => changeQty(productId, val)}
                        removeFromCart={(productId) => removeFromCart(productId)}
                        chekcoutDialog={this.state.open}
                        handleCheckoutSubmit={this.handleCheckoutSubmit}
                        handleCheckoutDialog={this.handleOpenDialog}
                    /> : <Empty title={"Cart"} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartItems: getAllCartItems(state.products, state.cart),
    totalItems: getTotalCartItems(state.cart),
    getQuantity: (id) => getQuantity(state.cart, id),
    getTotalItemPrice: (id) => getTotalItemPrice(state, id),
    totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(cartAction.removeFromCart(id)),
    checkout: (allProductsId) => dispatch(cartAction.checkout(allProductsId)),
    changeQty: (id) => dispatch(cartAction.changeQty(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);