import React from 'react'
import { Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    card: {
        backgroundColor: '#fff',
        marginBottom: '30px',
        border: 0,
        transition: 'all .3s ease',
        letterSpacing: '.5px',
        borderRadius: '8px',
        boxShadow: '1px 5px 24px 0 rgba(68,102,242,.05)',
    },
    cardHeader: {
        borderBottom: 'none',
        padding: '24px',
        borderBottom: '1px solid #f6f7fb',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },
    cardBody: {
        padding: '30px',
        backgroundColor: 'transparent',
    },
    btnPrimary: {
        backgroundColor: '#4466f2!important',
        borderColor: '#4466f2!important',
        color: 'white'
    }
}));

const EmptyCart = (props) => {
    const { title } = props;
    const classes = useStyle();

    return (
        <div>
            <div className={classes.card}>
                <div className={classes.cardHeader}>
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{title}</div>
                </div>
                <div className={classes.cardBody}>
                    <div style={{ textAlign: 'center' }}>
                        <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" style={{ display: 'block', margin: 'auto', marginRight: '3', marginBottom: '4' }} />
                        <div style={{ fontSize: '25px', fontWeight: 'bold' }}>Your {title} is Empty</div>
                        <div style={{ fontSize: '25px', marginBottom: '20px' }}>Add something to make me happy </div>
                        <Button variant="contained" className={classes.btnPrimary} href="#contained-buttons">
                            Continue Shopping
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart;