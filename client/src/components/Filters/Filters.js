import { Card, CardContent, CardHeader, Divider } from '@material-ui/core';
import React from 'react';

import SearchFilter from './SearchFilter';
import CategoryFilter from './categoryFilter';
import StatusFilter from './StatusFilter';
import PriceFilter from './priceFilter';

const Filter = (props) => {
    return (
        <div style={{ position: 'fixed' }}>
            <Card style={{ margin: '15px', borderRadius: '15px' }}>
                <CardContent>
                    <h1 style={{ fontFamily: 'bold', fontSize: '30px' }}>Filter</h1>
                    <Divider />
                    <div style={{ margin: '15px' }}> <SearchFilter /> </div>
                    <Divider />
                    <div style={{ margin: '15px' }}> <CategoryFilter /> </div>
                    <div style={{ margin: '15px' }}> <StatusFilter /> </div>
                    <div style={{ margin: '15px' }}> <PriceFilter /> </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Filter;