import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

const ScheduleBidding = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [picture, setPicture] = useState('');
    const [category, setCategory] = useState('');
    const [bidding, setBidding] = useState([new Date(), new Date()]);

    function handleUpload(event) {
        setPicture(event.target.files[0]);
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, desc, price, picture, category, bidding, picture);
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="Title"
                variant="filled"
                required
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <TextField
                label="Description"
                variant="filled"
                required
                value={desc}
                onChange={e => setDesc(e.target.value)}
            />
            <TextField
                label="price"
                variant="filled"
                type="number"
                required
                value={price}
                onChange={e => setPrice(e.target.value)}
            />
            <TextField
                variant="filled"
                type="file"
                required
                onChange={handleUpload}
            />
            <DateTimeRangePicker onChange={setBidding} value={bidding} />
            <TextField
                label="Category"
                variant="filled"
                type="text"
                required
                value={category}
                onChange={e => setCategory(e.target.value)}
            />
            <div>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default ScheduleBidding;