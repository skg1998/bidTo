import React, { useState, useEffect } from 'react'
import Select from 'react-select'

//redux-store
import { productAction } from '../../store/actions';
import { useSelector, connect } from 'react-redux';

const CategoryFilter = (props) => {
    const { category, filter } = props;
    const [state, setState] = useState({ value: [] });

    useEffect(() => {
        category();
    }, []);

    const fetchcategory = useSelector(state => state.products.Category?.category?.data.data ?? []);
    const option = fetchcategory && fetchcategory.map(cate => {
        return { value: cate.id, label: cate.name };
    });

    //const option = []

    useEffect(() => {
        filter('CATEGORY', state);
    }, [state])

    return (
        <Select
            className="multi-select"
            closeMenuOnSelect={false}
            isMulti
            onChange={
                (val) => {
                    setState({ value: val });
                }
            }
            options={option}
            placeholder="Select Category"
            simpleValue
            value={state.value}
        />
    )
}

const mapStateToProps = state => ({
    // null
});

const mapDispatchToProps = (dispatch) => ({
    filter: (filtertype, val) => dispatch(productAction.filterProducts(filtertype, val)),
    category: () => dispatch(productAction.getAllCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);