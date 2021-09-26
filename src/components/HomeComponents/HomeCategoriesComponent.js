import React from 'react';

import {
    Grid,
} from '@mui/material';

import HomeCategoryItemComponent from './HomeCategoryItemComponent';

const HomeCategoriesComponent = ({ categories }) => {
    return (
        <>
            <Grid container>
                {
                    categories.map((category) => {
                        return <Grid
                            key={category.id}
                            item
                            md={4}
                            sm={12}
                            xs={12}
                        >
                            <HomeCategoryItemComponent category={category} />
                        </Grid>;
                    })
                }
            </Grid>
        </>
    );
}

export default HomeCategoriesComponent;