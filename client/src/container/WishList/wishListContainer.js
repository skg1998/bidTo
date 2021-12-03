import React, { Component } from 'react';
import { connect } from "react-redux";
import WishList from '../../components/WishList/WishList';
import Empty from '../../components/Empty/Empty'
import { wishListAction } from "../../store/actions";
import { getAllWishlists } from "../../store/reducers/wishListReduce";

class WishListContainer extends Component {
    render() {
        const { wishlistItems, removeFromWishlist } = this.props
        return (
            <div>
                {wishlistItems.length > 0 ?
                    <WishList
                        products={wishlistItems}
                        removeFromWishlist={(productId) => removeFromWishlist(productId)}
                    /> : <Empty />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    wishlistItems: getAllWishlists(state.products, state.wishlist)
})

const mapDispatchToProps = (dispatch) => ({
    removeFromWishlist: (id) => dispatch(wishListAction.removeFromWishlist(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer)