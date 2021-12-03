import React, { useState } from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'All' },
    { value: 'strawberry', label: 'Upcoming' },
    { value: 'vanilla', label: 'Current' },
    { value: 'vanilla', label: 'Completed' }
]

const StatusFilter = (props) => {
    const [state, setState] = useState({ value: [], colors: [] });
    return (
        <Select
            className="multi-select"
            closeMenuOnSelect={false}
            isMulti
            //onChange={val => setState({ value: val })}
            options={options}
            placeholder="Select Status"
            simpleValue
        //value={state.value}
        />
    )
}

export default StatusFilter;