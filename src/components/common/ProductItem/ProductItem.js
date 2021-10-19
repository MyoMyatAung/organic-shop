import React from 'react';

import {
    Button,
} from '@mui/material';

import {
    AddShoppingCart as AddShoppingCartIcon,
    FavoriteBorder as FavoriteBorderIcon,
    Info as InfoIcon
} from '@mui/icons-material';

import { Link } from 'react-router-dom';

import * as styles from '../../../styles/ComponentStyle/ProductItemStyle.module.css';

const ProductItem = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div
                className={styles.ProductWrapper}
            >
                <img
                    className={styles.ProductImage}
                    src={product.image_url}
                    alt={product.name}
                    height={150}
                    width="100%"
                />
            </div>
            <h3
                className={styles.ProductTitle}
            >
                {product.name}
            </h3>
            <h4
                className={styles.ProductSubTitle}
            >
                {product.category} [ ${product.price} ]
            </h4>
            <hr className={styles.ProductDivider} />
            <div className={styles.ProductAction}>
                <Button
                    variant="contained"
                    color="info"
                    className={styles.ProductActionButton}
                    sx={{marginX: 1}}
                    size="small"
                >
                    <AddShoppingCartIcon />
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={styles.ProductActionButton}
                    sx={{marginX: 1}}
                    size="small"
                >
                    <InfoIcon /> Detail
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    className={styles.ProductActionButton}
                    sx={{marginX: 1}}
                    size="small"
                >
                    <FavoriteBorderIcon />
                </Button>
            </div>
        </Link>
    );
}

export default ProductItem;