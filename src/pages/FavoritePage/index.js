/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import * as styles from '../../styles/FavoritePageStyle/FavoritePageStyle.module.css';

import {
    Container
} from '@mui/material';

import { Common, Favorite } from '../../components'

import { products } from '../../data/products';

export default () => {
    return (
        <>
            <Common.PageHeaderComponent title="Favorite Products" />
            <Container>
                <Favorite.FavoriteListComponent products={products} />
            </Container>
        </>
    );
}