import React from 'react';

import {
    Container,
    Grid,
    Typography
} from '@mui/material';

import * as styles from '../../../styles/ComponentStyle/FooterStyle.module.css';

const FooterComponent = () => {
    return (
        <div className={styles.Root}>
            <div className={styles.FooterTop}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Typography
                                variant="h6"
                                className={styles.FooterItemTitle}
                            >
                                About Us

                            </Typography>
                            <div className={styles.FooterItemList}>
                                <ul>
                                    <li>About Fousi</li>
                                    <li>1 order = 1 planted tree</li>
                                    <li>100% vegan</li>
                                    <li>Without palm oil</li>
                                    <li>Naturally</li>
                                    <li>Ecologically</li>
                                    <li>Corporate social responsibility</li>
                                    <li>Our brands</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography
                                variant="h6"
                                className={styles.FooterItemTitle}
                            >
                                Your Account

                            </Typography>
                            <div className={styles.FooterItemList}>
                                <ul>
                                    <li>Your Orders</li>
                                    <li>Loyality Program</li>
                                    <li>Account setting</li>
                                    <li>Store</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography
                                variant="h6"
                                className={styles.FooterItemTitle}
                            >
                                Payment and Delivery

                            </Typography>
                            <div className={styles.FooterItemList}>
                                <ul>
                                    <li>Free Shipping</li>
                                    <li>Zero waste shipments</li>
                                    <li>Payments</li>
                                    <li>Shipping and returns</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={3}>

                            <Typography
                                variant="h6"
                                className={styles.FooterItemTitle}
                            >
                                Contacts

                            </Typography>
                            <div className={styles.FooterItemList}>
                                <ul>
                                    <li>Contact & Coorperation</li>
                                    <li>Terms of use</li>
                                    <li>Payments</li>
                                    <li>Privacy policy</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={styles.FooterBottom}>
                © 2020 Copyright: MDBootstrap.com
            </div>
        </div>
    );
}

export default FooterComponent;