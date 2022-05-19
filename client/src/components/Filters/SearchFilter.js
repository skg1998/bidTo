import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core'

//redux-store
import { productAction } from '../../store/actions';
import { connect } from 'react-redux';

const SearchFilter = (props) => {
    const { filter } = props;
    const [state, setstate] = useState();

    useEffect(() => {
        filter('SEARCH', state);
    }, [state])

    return (
        <div>
            <TextField
                id="outlined-search"
                variant="outlined"
                label="Product Name"
                type="search"
                onChange={(e) => setstate(e.target.value)}
                value={state}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    // null
});

const mapDispatchToProps = (dispatch) => ({
    filter: (filtertype, val) => dispatch(productAction.filterProducts(filtertype, val))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);