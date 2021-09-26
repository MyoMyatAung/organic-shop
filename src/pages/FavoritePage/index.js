/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import * as styles from '../../styles/FavoritePageStyle/FavoritePageStyle.module.css';

import {
    Container
} from '@mui/material';

import { Favorite } from '../../components'

import { products } from '../../data/products';

export default () => {
    return (
        <>
            <div className={styles.FavoriteHeader}>
                <h1>Favorite</h1>
            </div>
            <Container>
                <Favorite.FavoriteListComponent products={products} />
            </Container>
        </>
    );
}