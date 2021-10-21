import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
    '@global': {
        '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
        },

        html: {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            height: '100%',
            width: '100%'
        },
        body: {
            backgroundColor: '#eef5f9'
        },
        a: {
            textDecoration: 'none'
        },
        '#root': {
            height: '100%',
            width: '100%'
        },
        '.dropzone': {
            textAlign: 'center',
            padding: '20px',
            border: '3px dashed #eeeeee',
            backgroundColor: '#fafafa',
            color: '#bdbdbd',

            marginBottom: '20px',
        },
        '.accept': {
            borderColor: '#107c10 !important'
        },
        '.reject': {
            borderColor: '#d83b01 !important'
        }
    }
}));

const GlobalStyles = () => {
    useStyles();
    return null;
};

export default GlobalStyles;