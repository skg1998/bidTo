import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const ForgotPassword = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <div>
                <Button type="submit" variant="contained" color="primary">
                    Send
                </Button>
            </div>
        </form>
    );
};

export default ForgotPassword;