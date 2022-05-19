import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Dropzone from "react-dropzone";

//redux store
import { connect, useSelector } from 'react-redux';
import { productAction } from '../../../store/actions';

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
    const { getAllCategories, createProducts } = props;
    const classes = useStyles();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [fileNames, setFileNames] = useState([]);
    const [category, setCategory] = useState('');
    const [startBidding, setStartBidding] = useState(new Date());
    const [endBidding, setEndBidding] = useState(new Date());

    const handleSubmit = e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", name);
        formData.append("desc", desc);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("startBidding", startBidding);
        formData.append("endBidding", endBidding);
        formData.append("image", fileNames[0]);
        createProducts(formData);
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    const fetchcategory = useSelector(state => state.products.Category?.category?.data.data ?? []);
    const categories = fetchcategory && fetchcategory.map(cate => {
        return { key: cate.id, value: cate.name };
    });

    const handleDrop = acceptedFiles => setFileNames(acceptedFiles.map(file => file));

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
                                    placeholder="Location"
                                    variant="outlined"
                                    value={location}
                                    onChange={e => setLocation(e.target.value)}
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
                            <Grid item lg={12} sm={12} xl={12} xs={12}>
                                <TextField
                                    select
                                    label="Category"
                                    variant="outlined"
                                    required
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                >
                                    {categories.map((category) => (
                                        <MenuItem value={category.key}>
                                            {category.value}
                                        </MenuItem>
                                    ))
                                    }
                                </TextField>
                            </Grid>
                            <Grid item lg={12} sm={12} xl={12} xs={12} style={{ width: "87%", height: '69%', margin: "2%" }}>
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
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={12} xl={12}>
                            <TextField
                                variant="outlined"
                                required
                                id="datetime-local"
                                label="Start Bidding"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                value={startBidding}
                                onChange={e => setStartBidding(e.target.value)}
                            />
                        </Grid>
                        <Grid item lg={6} md={12} xl={12}>
                            <TextField
                                variant="outlined"
                                required
                                id="datetime-local"
                                label="End Bidding"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                value={endBidding}
                                onChange={e => setEndBidding(e.target.value)}
                            />
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

const mapStateToProps = state => ({
    //null
});

const mapDispatchToProps = (dispatch) => ({
    getAllCategories: () => dispatch(productAction.getAllCategories()),
    createProducts: (data) => dispatch(productAction.createProducts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);