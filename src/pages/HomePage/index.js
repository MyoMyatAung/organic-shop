/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import {
    Container,
} from '@mui/material';

// import Carousel from 'react-material-ui-carousel'

import { categories } from '../../data/categories';
import { products } from '../../data/products';

import * as styles from '../../styles/HomePageStyle/HomePageStyle.module.css';

import { Home } from '../../components/';


export default () => {

    return (
        <div>

            <Container>
                <div className={styles.Home_Categories}>
                    <h1
                        className={styles.Categories_title}
                    >
                        Categories
                    </h1>
                    <Home.HomeCategoriesComponent categories={categories} />
                </div>
                <hr />
                <div style={{ margin: '24px 12px' }}>
                    <h1
                        className={styles.Categories_title}
                    >
                        Bestsellers
                    </h1>
                    <Home.HomeBestSellerComponent products={products} />
                </div>
                <hr />
                <div style={{ margin: '24px 12px' }}>
                    <h1
                        className={styles.Categories_title}
                    >
                        Recent Products
                    </h1>
                    <Home.HomeRecentComponent products={products} />
                </div>

            </Container>
        </div>
    );
}