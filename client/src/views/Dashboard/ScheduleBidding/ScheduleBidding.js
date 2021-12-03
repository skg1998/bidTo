import React, { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button, CircularProgress } from '@material-ui/core';

import ScheduleForm from './ScheduleForm';
import ScheduleProducts from './ScheduleProducts';

import { productServices, categoryServices } from '../../../store/services';

const ScheduleBidding = () => {
    const [showForm, setShowForm] = useState(false);
    const [products, setProducts] = useState([]);
    const [categories, setCategory] = useState([]);
    const [slots, setSlot] = useState([]);

    const onClick = () => setShowForm(!showForm);

    useEffect(() => {
        //Get My All Products
        const productHandler = () => {
            productServices.getMyAllProducts().then(product => {
                setProducts(product);
            })
        };

        //Get All Category 
        const categoryHandler = () => {
            categoryServices.getAllCategories().then(category => {
                setCategory(category);
            })
        };

        //Get All Slot
        const slotHandler = () => {
            productServices.getSlot().then(slot => {
                setSlot(slot);
            })
        };

        productHandler();
        categoryHandler();
        slotHandler();
    }, []);

    //Delete Product
    const deleteHandler = (id) => {
        console.log(`clicked delete! ${id}`);
        productServices.deleteProduct(id).then(res => {

        }).catch(err => {

        })
    };

    //Update product
    const updateHandler = (data) => {
        console.log(`clicked update! ${data}`)
        productServices.updateProduct(data.id, data).then(res => {

        }).catch(err => {

        })
    };

    //Create product
    const createHandler = (data) => {
        console.log(`clicked update! ${data}`)
        productServices.createProduct(data).then(res => {

        }).catch(err => {

        })
    };

    return (
        <div>
            <div>
                <Button onClick={onClick}>
                    <AddCircleOutlineIcon />
                </Button>
            </div>
            {showForm ?
                <ScheduleForm
                    slots={slots}
                    categories={categories}
                    createHandler={(data) => createHandler(data)}
                /> : null
            }
            <ScheduleProducts
                products={products}
                updateHandler={(data) => updateHandler(data)}
                deleteHandler={(data) => deleteHandler(data)}
            />
        </div>
    );
};

export default ScheduleBidding;