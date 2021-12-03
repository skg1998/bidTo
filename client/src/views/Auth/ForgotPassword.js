import React, { useState } from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

const ForgotPassword = (props) => {
    const { forgotPassword } = props;
    const classes = useStyles();
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        forgotPassword(email);
    };

    return (
        <div className={classes.parent}>
            <Card className={classes.card}>
                <CardContent>
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
                    <div ><Link to={'/login'} style={{ textDecoration: 'underline', textDecorationColor: 'red' }}> Signin </Link></div>
                </CardContent>
            </Card>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    forgotPassword: (email) => dispatch(authAction.forgotPassword(email)),
});

export default connect(null, mapDispatchToProps)(ForgotPassword);