import React from 'react';

import { TextField } from '@material-ui/core'

const SearchFilter = (props) => {
    return (
        <div>
            <TextField
                id="outlined-search"
                variant="outlined"
                label="Product Name"
                type="search"
            />
        </div>
    )
}

export default SearchFilter;