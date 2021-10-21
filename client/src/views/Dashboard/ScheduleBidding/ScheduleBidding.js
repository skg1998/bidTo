import React, { useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button } from '@material-ui/core';

import ScheduleForm from './ScheduleForm';
import ScheduleProducts from './ScheduleProducts';

//image
import Product1 from '../../../assets/img/product_1.jpg'
import Product3 from '../../../assets/img/product_3.jpg'


const products = [
    {
        id: 1,
        name: 'salmaan khan t-shart',
        desc: 'it is a tshirt of dabandg movie',
        image: Product1,
        price: '$23',
        category: 'Shoes',
        slot: '',
        status: 'Completed'
    },
    {
        id: 2,
        name: 'akshay kumar signed Shoes',
        desc: 'it is a shoes of khiladi movie',
        image: Product3,
        price: '$23',
        category: 'Shoes',
        slot: '',
        status: 'Completed'
    }
]

const categories = [
    { value: "electronices", text: "Electronices" },
    { value: "clothes", text: "Clothes" },
    { value: "sports", text: "Sports" },
];

const slots = [
    { value: "electronices", text: "Electronices" },
    { value: "clothes", text: "Clothes" },
    { value: "sports", text: "Sports" },
];

const ScheduleBidding = () => {
    const [showForm, setShowForm] = useState(false);
    const onClick = () => setShowForm(!showForm);
    const deleteHandler = (id) => { console.log(`clicked delete! ${id}`) };
    const updateHandler = (id) => { console.log(`clicked update! ${id}`) };
    const productHandler = () => { };
    const categoryHandler = () => { };
    const slotHandler = () => { };

    return (
        <div>
            <div>
                <Button onClick={onClick}>
                    <AddCircleOutlineIcon />
                </Button>
            </div>
            {showForm ? <ScheduleForm slots={slots} categories={categories} /> : null}
            <ScheduleProducts products={products} updateHandler={(id) => updateHandler(id)} deleteHandler={(id) => deleteHandler(id)} />
        </div>
    );
};

export default ScheduleBidding;