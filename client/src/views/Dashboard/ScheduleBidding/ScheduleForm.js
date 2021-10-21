import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Dropzone from "react-dropzone";

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

const ScheduleForm = (props) => {
    const { slots, categories } = props;
    const classes = useStyles();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [fileNames, setFileNames] = useState([]);
    const [category, setCategory] = useState('');
    const [bidding, setBidding] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, desc, price, category, bidding, fileNames);
    };

    const handleDrop = acceptedFiles => setFileNames(acceptedFiles.map(file => file.name));

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <Card >
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={12} xl={12}>
                            <Grid item lg={12} sm={12} xl={12} xs={12}>
                                <TextField
                                    placeholder="Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item lg={12} sm={12} xl={12} xs={12}>
                                <TextField
                                    placeholder="Desc"
                                    variant="outlined"
                                    value={desc}
                                    onChange={e => setDesc(e.target.value)}
                                />
                            </Grid>
                            <Grid item lg={12} sm={12} xl={12} xs={12}>
                                <TextField
                                    placeholder="Price"
                                    variant="outlined"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid item lg={6} md={12} xl={12}>
                            <Dropzone
                                onDrop={handleDrop}
                                accept="image/*"
                                minSize={1024}
                                maxSize={3072000}
                            >
                                {({
                                    getRootProps,
                                    getInputProps,
                                    isDragActive,
                                    isDragAccept,
                                    isDragReject
                                }) => {
                                    const additionalClass = isDragAccept
                                        ? "accept"
                                        : isDragReject
                                            ? "reject"
                                            : "";

                                    return (
                                        <div
                                            style={{ height: "100%" }}
                                            {...getRootProps({
                                                className: `dropzone ${additionalClass}`
                                            })}
                                        >
                                            <input {...getInputProps()} />
                                            <span>{isDragActive ? "📂" : "📁"}</span>
                                            <p>Drag'n'drop images, or click to select files</p>
                                        </div>
                                    );
                                }}
                            </Dropzone>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={12} xl={12}>
                            <TextField
                                select
                                label="Schedule"
                                variant="outlined"
                                required
                                value={bidding}
                                onChange={e => setBidding(e.target.value)}
                            >
                                {slots.map((category) => (
                                    <MenuItem key={category.value} value={category.value}>
                                        {category.text}
                                    </MenuItem>
                                ))
                                }
                            </TextField>
                        </Grid>
                        <Grid item lg={6} md={12} xl={12}>
                            <TextField
                                select
                                label="Category"
                                variant="outlined"
                                required
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category.value} value={category.value}>
                                        {category.text}
                                    </MenuItem>
                                ))
                                }
                            </TextField>
                        </Grid>
                    </Grid>
                    <div>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </div>

                </CardContent>
            </Card>
        </form>
    );
};

export default ScheduleForm;