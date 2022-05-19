import React, { useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button } from '@material-ui/core';

import ScheduleForm from './ScheduleForm';
import ScheduleProducts from './ScheduleProducts';

import { connect, useSelector } from 'react-redux'
import { productAction } from '../../../store/actions'

const ScheduleBidding = (props) => {
    const { updateProduct, deleteProduct } = props;
    const [showForm, setShowForm] = useState(false);
    const onClick = () => setShowForm(!showForm);

    return (
        <div>
            <div>
                <Button onClick={onClick}>
                    <AddCircleOutlineIcon />
                </Button>
            </div>
            {showForm ? <ScheduleForm /> : null}
            <ScheduleProducts
                deleteHandler={(product) => deleteProduct(product.id)}
                updateHandler={(product) => updateProduct(product)}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    // null
})

const mapDispatchToProps = (dispatch) => ({
    updateProduct: (product) => dispatch(productAction.updateProduct(product)),
    deleteProduct: (product) => dispatch(productAction.deleteProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleBidding);