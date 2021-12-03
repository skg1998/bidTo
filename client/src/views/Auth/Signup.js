import React, { useState } from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

//Redux
import { connect } from "react-redux";
import { authAction } from '../../store/actions';

const useStyles = makeStyles(theme => ({
    parent: {
        position: 'relative'
    },
    card: {
        margin: '0px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%, -50%)',
        textAlign: 'center'
    },
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

const Signup = (props) => {
    const { register } = props;
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        register(userName, email, password);
    };

    return (
        <div className={classes.parent}>
            <Card className={classes.card}>
                <CardContent>
                    <form className={classes.root} onSubmit={handleSubmit}>
                        <TextField
                            label="User Name"
                            variant="filled"
                            required
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            variant="filled"
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            variant="filled"
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div>
                            <Button type="submit" variant="contained" color="primary">
                                Signup
                            </Button>
                        </div>
                    </form>
                    <div>Already Signup ? <Link to={'/login'} style={{ textDecoration: 'underline', textDecorationColor: 'red' }}> Signin </Link></div>
                </CardContent>
            </Card>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    register: (username, email, password) => dispatch(authAction.register(username, email, password)),
});

export default connect(null, mapDispatchToProps)(Signup);