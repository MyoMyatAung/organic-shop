/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import {
    Container, Grid, MenuItem, Pagination, TextField
} from '@mui/material';

import { categories } from '../../data/categories';
import { products } from '../../data/products';

import * as styles from '../../styles/ShopPageStyle/ShopPageStyle.module.css';

import { Shop } from '../../components';

const sorts = [
    {
        value: 'all',
        label: 'All',
    },
    {
        value: 'popularity',
        label: 'Popularity',
    },
    {
        value: 'price_lth',
        label: 'Price: Lowest to highest',
    },
    {
        value: 'price_htl',
        label: 'Price: Highest to Lowest',
    },
    {
        value: 'newest',
        label: 'Newest',
    },
    {
        value: 'rated',
        label: 'Most Rated',
    },
];

export default () => {

    const [sort, setSort] = React.useState('all')
    const handleChange = (event) => {
        setSort(event.target.value);
    };
    return (
        <div>
            <div className={styles.ShopHeader}>
                <h1>Shop</h1>
            </div>
            <Container>
                <Grid container>
                    <Grid
                        item
                        md={4}
                        sm={12}
                        xs={12}
                    >
                        <h3 className={styles.ShopCategoryTitle}>
                            Categories
                        </h3>
                        <div className={styles.ShopCategoryList}>
                            {
                                categories.map(category => {
                                    return <div key={category.id}>
                                        <p>{category.name}</p>
                                    </div>;
                                })
                            }
                        </div>
                    </Grid>
                    <Grid
                        item
                        md={8}
                        sm={12}
                        xs={12}
                    >
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item md={4}>
                                <TextField
                                    color="info"
                                    select
                                    label="Sorting"
                                    value={sort}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    {
                                        sorts.map(sort => {
                                            return <MenuItem
                                                key={sort.value}
                                                value={sort.value}
                                            >
                                                {sort.label}
                                            </MenuItem>;
                                        })
                                    }
                                </TextField>
                            </Grid>
                            <Grid
                                item
                                md={4}
                            >
                                <Pagination count={3} />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Shop.ShopProductListComponent products={products} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}