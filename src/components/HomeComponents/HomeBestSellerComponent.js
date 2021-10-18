import React from 'react';

import {
    Grid
} from '@mui/material';

import { Common } from '../';

const HomeBestSellerComponent = ({ products }) => {
    return (
        <Grid container>
            {
                products.slice(0, 4).map((product) => {
                    return <Grid
                        item
                        md={3}
                        sm={12}
                        xs={12}
                        key={product.id}
                    >
                        <Common.ProductItem product={product} />
                    </Grid>
                })
            }
        </Grid>
    );
}

export default HomeBestSellerComponent;