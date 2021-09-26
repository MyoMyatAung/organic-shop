import React from 'react';

import {
    Grid
} from '@mui/material';

import { Common } from '..';

const FavoriteListComponent = ({ products }) => {
    return (
        <Grid container>
            {
                products.slice(0,8).map((product) => {
                    return <Grid
                        item
                        md={3}
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

export default FavoriteListComponent;