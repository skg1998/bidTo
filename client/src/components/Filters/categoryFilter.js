import React, { useState } from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const CategoryFilter = (props) => {
    const [state, setState] = useState({ value: [], colors: [] });
    return (
        <Select
            className="multi-select"
            closeMenuOnSelect={false}
            isMulti
            //onChange={val => setState({ value: val })}
            options={options}
            placeholder="Select Category"
            simpleValue
        //value={state.value}
        />
    )
}

export default CategoryFilter;