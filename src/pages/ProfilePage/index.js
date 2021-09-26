/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import {
    Container,
    Grid,
    Typography
} from '@mui/material';

import {
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationCity as LocationCityIcon,
} from '@mui/icons-material';

import * as styles from '../../styles/ProfileStyle/ProfileStyle.module.css';

import { Profile } from '../../components';

import { products } from '../../data/products';

export default () => {
    return (
        <Container sx={{ marginY: 4 }}>
            <Grid container>
                <Grid
                    item
                    md={6}
                    sx={{ textAlign: 'center' }}
                >
                    <img
                        src='https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282__480.png'
                        alt="profile"
                        width={250}
                        height={300}
                        className={styles.ProfileImage}
                    />
                </Grid>
                <Grid item md={6}>
                    <div className={styles.ProfileNameHeader}>
                        <Typography
                            variant="h3"
                        >
                            Villa Myo
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ color: 'gray' }}
                        >
                            NO (H/7), May Kha Housing, LayDaungKan St.
                        </Typography>
                    </div>
                    <div className={styles.ProfileData}>
                        <EmailIcon fontSize='small' />
                        <Typography
                            variant="subtitle1"
                            sx={{ color: 'gray', paddingX: 1 }}
                        >
                            myatmyo299@gmail.com
                        </Typography>
                    </div>
                    <div className={styles.ProfileData}>
                        <PhoneIcon fontSize='small' />
                        <Typography
                            variant="subtitle1"
                            sx={{ color: 'gray', paddingX: 1 }}
                        >
                            +959-780878870
                        </Typography>
                    </div>
                    <div className={styles.ProfileData}>
                        <LocationCityIcon fontSize='small' />
                        <Typography
                            variant="subtitle1"
                            sx={{ color: 'gray', paddingX: 1 }}
                        >
                            Yangon, Myanmar
                        </Typography>
                    </div>
                </Grid>

            </Grid>
            <hr />
            <div style={{ margin: '24px 12px' }}>
                <h1
                    className={styles.RecentProduct}
                >
                    Recent Products
                </h1>
                <Profile.ProfileRecentViewComponent products={products} />
            </div>
        </Container>
    );
}