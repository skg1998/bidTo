import React, { useState, useEffect } from 'react'
import Select from 'react-select'

//redux-store
import { productAction } from '../../store/actions';
import { connect } from 'react-redux';

const StatusFilter = (props) => {
    const { filter } = props;
    const [state, setState] = useState({ value: [] });

    const options = [
        { value: 'ALL', label: 'All' },
        { value: 'UPCOMPING', label: 'Upcoming' },
        { value: 'CURRENT', label: 'Current' },
        { value: 'COMPLETED', label: 'Completed' }
    ];

    useEffect(() => {
        filter('STATUS', state);
    }, [state])

    return (
        <Select
            className="multi-select"
            closeMenuOnSelect={false}
            isMulti
            onChange={val => setState({ value: val })}
            options={options}
            placeholder="Select Status"
            simpleValue
            value={state.value}
        />
    )
}

const mapStateToProps = state => ({
    // null
});

const mapDispatchToProps = (dispatch) => ({
    filter: (filtertype, val) => dispatch(productAction.filterProducts(filtertype, val))
})

export default connect(mapStateToProps, mapDispatchToProps)(StatusFilter);