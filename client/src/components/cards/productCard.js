import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

const productCard = (props) => {
    const { product, deleteHandler, updateHandler } = props;

    return (
        <Card
            style={{ borderRadius: '20px', height: '100%' }}
        >
            <div className="image-container" style={{ height: '210px', width: '100px !important' }}>
                <img src={product.image} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item lg={12}><div>{product.name}</div></Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Button onClick={(product) => updateHandler(product)} variant="outlined" color="secondary">Update</Button>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Button onClick={(product) => deleteHandler(product)} variant="outlined" color="error">Delete</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default productCard;