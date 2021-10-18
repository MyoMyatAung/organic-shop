/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import {
    Container,
    Grid,
} from '@mui/material';

import * as styles from '../../styles/ProfileStyle/ProfileStyle.module.css';

import { Profile } from '../../components';

import { products } from '../../data/products';
import { addressBooks } from '../../data/addressbook';
import { order } from '../../data/order';

export default () => {
    return (
        <Container sx={{ marginY: 4 }}>
            <Grid container spacing={1}>
                <Grid item sm={4}>
                    <Profile.ProfileDataComponent
                        data={
                            {
                                username: 'Villa Myo',
                                email: 'myatmyo299@gmail.com',
                                phonenumber: '09780878870'
                            }
                        }
                        style={styles}
                    />
                </Grid>
                <Grid item sm={8}>
                    <Profile.ProfileAddressBookComponent
                        style={styles}
                        addressBooks={addressBooks}
                    />
                </Grid>
            </Grid>
            <hr />
            <div style={{ margin: '24px 12px' }}>
                <h1>
                    Recent Products
                </h1>
                <Profile.ProfileRecentViewComponent products={products} />
            </div>
            <div style={{ margin: '24px 12px' }}>
                <h1>
                    Recent Orders
                </h1>
                <Profile.ProfileOrderComponent orders={order} />
            </div>
        </Container>
    );
}