import React from 'react'
import { MenuItem, Typography, Avatar, Select, InputLabel, IconButton, FormControl, FormHelperText, CardContent, CardMedia, CardHeader, Card, withStyles } from '@material-ui/core';
import { DeleteForever } from "@material-ui/icons";

const Styles = theme => ({
    card: {
        maxWidth: '96%',
        margin: 5,
        [theme.breakpoints.up('md')]: {
            margin: '2% 0%',
        },
        [theme.breakpoints.down('md')]: {
            margin: '11% 0%',
            overflow: 'hidden'
        }
    },
    media: { height: 200 },
    avatar: { backgroundColor: 'red' },
})

const ProductCart = ({ price, quantity, title, inventory, img, onRemoveFromCartClicked, onQtySelected, classes }) => {
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={<IconButton
                    onTouchTap={onRemoveFromCartClicked}>
                    <DeleteForever />
                </IconButton>}
                title={
                    <Typography variant="body2" style={{ fontSize: '1.2rem', fontWeight: 500 }}>{title}</Typography>}
                subheader={(new Date()).toLocaleDateString()}
            />
            <CardMedia
                className={classes.media}
                image={img}
            />
            <CardContent className="rightBox">
                <Typography component="p">{`Price: Rp ${price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}`}</Typography>
                <FormControl>
                    <InputLabel>Quantity</InputLabel>
                    <Select
                        value={quantity}
                        onChange={(e, val) => onQtySelected(e.target.value)}
                    >

                        {[...Array(inventory + quantity).keys()].map(num => <MenuItem key={num + 1} value={num + 1}>{num + 1}</MenuItem>)}
                    </Select>
                    <FormHelperText>Choose how many items you want to buy</FormHelperText>
                </FormControl>
            </CardContent>
        </Card>
    )
}


export default withStyles(Styles)(ProductCart)