import React from 'react';

import {
    Grid
} from '@mui/material';

import { Common } from '..';

const ShopProductListComponent = ({ products }) => {
    return (
        <Grid container>
            {
                products.map((product) => {
                    return <Grid
                        item
                        md={4}
                        sm={12}
                        xs={12}
                    >
                        <Common.ProductItem product={product} />
                    </Grid>
                })
            }
        </Grid>
    );
}

export default ShopProductListComponent;