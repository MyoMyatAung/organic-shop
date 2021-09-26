import React from 'react';

import {
    Grid,
    Divider,
    Typography,
    Button,
    ButtonGroup
} from '@mui/material';

import {
    Add as AddIcon,
    Remove as RemoveIcon,
    Delete as DeleteIcon,
    Favorite as FavoriteIcon
} from '@mui/icons-material';

import * as styles from '../../../styles/ComponentStyle/CartComponentStyle.module.css';

const CartProductItem = ({ product }) => {
    return (
        <div key={product.id}>
            <Divider />
            <Grid container sx={{ padding: 1 }}>
                <Grid item md={3}>
                    <img
                        src={product.image_url}
                        alt={product.name}
                        width="100%"
                        height={150}
                        className={styles.CartProductImage}
                    />
                </Grid>
                <Grid
                    item
                    md={9}
                    sx={{ paddingLeft: 1 }}
                >
                    <Grid container>
                        <Grid item md={8}>
                            <Typography
                                variant="h6"
                            >
                                {product.name}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{ color: 'gray' }}
                            >
                                {product.category}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{ color: 'gray' }}
                            >
                                {product.type}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{ color: 'gray' }}
                            >
                                {product.country}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <ButtonGroup
                                variant="outlined"
                                aria-label="outlined button group"
                                color="info"
                            >
                                <Button><RemoveIcon /></Button>
                                <Button disabled>{product.quantity}</Button>
                                <Button><AddIcon /></Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={8}>
                            <Button
                                color="info"
                                startIcon={<DeleteIcon />}
                                size="small"
                            >
                                Remove Item
                            </Button>
                            <Button
                                color="error"
                                startIcon={<FavoriteIcon />}
                                size="small"
                            >
                                Move to Favorite
                            </Button>
                        </Grid>
                        <Grid item md={4}>
                            <Typography
                                variant="subtitle1"
                            >
                                ${product.price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default CartProductItem;