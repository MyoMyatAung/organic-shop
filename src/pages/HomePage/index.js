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
    // const items = [
    //     {
    //         name: 'Organic vegetables and delivery straight to your door',
    //         image_url: "https://cdn.pixabay.com/photo/2017/10/02/21/56/garlic-2810491__340.jpg"
    //     },
    //     {
    //         name: 'Simple and healthy recipes from seasonal products',
    //         image_url: "https://cdn.pixabay.com/photo/2015/10/12/14/53/apples-983942__340.jpg"
    //     },
    //     {
    //         name: 'Organic vegetables and delivery straight to your door',
    //         image_url: "https://cdn.pixabay.com/photo/2021/04/09/22/03/strawberries-6165597__340.jpg"
    //     }
    // ];
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