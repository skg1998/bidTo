import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip, } from '@material-ui/core';
import { Settings, ExitToApp, History, AccountCircle } from '@material-ui/icons';
import { authServices } from '../../../store/services'

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        authServices.getMyProfile().then(data => {
            setUser(data);
        }).catch(err => {
            console.log("user profile", err);
        })
    }, [])

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                        <Avatar sx={{ width: 32, height: 32 }}>{user ? (user.name.charAt(0) + "").toUpperCase() : "S"} </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    {user ? user.name : "Profile"}
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <AccountCircle fontSize="mmedium" />
                    </ListItemIcon>
                    <Link to="/dashboard">My account</Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <History fontSize="mmedium" />
                    </ListItemIcon>
                    <Link to="/orders">Orders</Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ExitToApp fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}