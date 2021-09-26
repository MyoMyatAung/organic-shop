import React, { useState } from 'react';
import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Popper,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Paper,
    Divider
} from '@mui/material';

import * as styles from '../../../styles/ComponentStyle/HeaderStyle.module.css';

import {
    AccountCircle,
    ShoppingCart
} from "@mui/icons-material";

import { Link } from 'react-router-dom';

const HeaderComponent = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const toggleProfile = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={styles.AppBar}>
                <Toolbar>
                    <Link to='/'>
                        <div style={{display: 'flex'}}>
                            <Typography
                                variant="h6"
                                className={styles.Logo1}>
                                Fou
                            </Typography>
                            <Typography
                                variant="h6"
                                className={styles.Logo2}>
                                Si
                            </Typography>
                        </div>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >

                        <Link to="/cart" className={styles.LinkItem}>
                            <IconButton size="">
                                <Badge
                                    badgeContent={2}
                                    color="error"
                                >
                                    <ShoppingCart fontSize="" />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Link to="/shop" className={styles.LinkItem}>
                            Shop
                        </Link>
                        <Link to="/contact-us" className={styles.LinkItem}>
                            Contact us
                        </Link>
                        <IconButton
                            size=""
                            aria-describedby={id}
                            onClick={toggleProfile}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Popper anchorEl={anchorEl} open={open} id={id}>
                            <Paper
                                style={{
                                    width: 200,
                                    backgroundColor: '#EFEFEF'
                                }}
                            >
                                <List>
                                    <ListItem disablePadding>
                                        <Link to='/profile'>
                                            <ListItemButton>
                                                <ListItemText primary="Profile" />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                    <Divider />
                                    <ListItem disablePadding>
                                        <Link to="/wish-list">
                                            <ListItemButton>
                                                <ListItemText primary="Wish List" />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Popper>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderComponent;