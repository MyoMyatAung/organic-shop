/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import * as styles from '../../styles/CartStyle/CartStyle.module.css';

import { carts } from '../../data/carts';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Divider,
    Button,
    TextField
} from '@mui/material';

import { CartProductList } from '../../components/common';
import { Link } from 'react-router-dom';
import { Common } from '../../components';

export default () => {
    return (
        <>
            <Common.PageHeaderComponent title='Shopping Cart' />
            <Container sx={{ marginY: 6 }}>
                <Grid container spacing={1}>
                    <Grid item md={8}>
                        <Paper
                            sx={{
                                padding: 1
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    marginY: 2
                                }}
                            >
                                Cart ({carts.products.length} items)
                            </Typography>
                            <CartProductList carts={carts} />
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Paper sx={{ padding: 2 }}>
                            <Typography
                                variant="h6"
                                sx={{ marginBottom: 2 }}
                            >
                                The total amount of
                            </Typography>
                            <div className={styles.CartCheckoutText}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ color: 'gray' }}
                                >
                                    Temporary amount
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ color: 'gray' }}
                                >
                                    $73
                                </Typography>
                            </div>
                            <div className={styles.CartCheckoutText}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ color: 'gray' }}
                                >
                                    Shipping
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ color: 'gray' }}
                                >
                                    $20
                                </Typography>
                            </div>
                            <Divider sx={{ marginY: 2 }} />
                            <div className={styles.CartCheckoutText}>
                                <Typography
                                    variant="subtitle1"
                                >
                                    The final total
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                >
                                    $93
                                </Typography>
                            </div>
                            <Link to="/checkout">
                                <Button
                                    color='info'
                                    variant='contained'
                                    fullWidth
                                    sx={{ marginY: 2 }}
                                >
                                    Go to checkout
                                </Button>
                            </Link>
                        </Paper>
                        <Paper sx={{ marginY: 2, padding: 2 }}>
                            <Typography
                                variant="subtitle1"

                            >
                                Add additional discount (Optional)
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                label="Coupon"
                                variant="outlined"
                                color="info"
                                fullWidth
                                margin='dense'
                                size='small'
                            />
                            <Button
                                color='warning'
                                variant='contained'
                                fullWidth
                                sx={{ marginY: 1 }}
                            >
                                Apply Coupon
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}