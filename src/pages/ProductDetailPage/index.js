/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import {
    Container,
    Grid,
    Button,
    Typography,
    ButtonGroup
} from '@mui/material';

import {
    AddShoppingCart as AddShoppingCartIcon,
    Star as StarIcon,
    StarBorder as StarBorderIcon,
    Add as AddIcon,
    Remove as RemoveIcon
} from '@mui/icons-material';

import { products } from '../../data/products';

import { useParams } from 'react-router-dom';

import * as styles from '../../styles/ProductDetailStyle/ProductDetailStyle.module.css';

import { Common, ProductDetail } from '../../components'

export default () => {

    const { id } = useParams();

    const product = products.find((prod) => prod.id === id);

    return (
        <>
            <Common.PageHeaderComponent title="Product Detail" />
            <Container>
                <Grid container>
                    <Grid item md={4}>
                        <img
                            src={product.image_url}
                            alt={product.name}
                            width='100%'
                            height={500}
                            className={styles.ProductDetailImage}
                        />
                    </Grid>
                    <Grid style={{ paddingLeft: 24 }} item md={7}>
                        <Typography
                            variant="h6"
                            component='div'
                        >
                            {product.name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            component='div'
                            sx={{
                                marginY: 2,
                                color: 'gray'
                            }}
                        >
                            {product.category}
                        </Typography>
                        <div
                            style={{
                                display: 'flex',
                                margin: '18px 0px',
                            }}
                        >
                            {
                                Array.from(Array(5), (e, i) => {
                                    return <Star
                                        starId={i + 1}
                                        key={`star_${i}`}
                                        isMarked={product.rating >= i + 1}
                                    />
                                })
                            }
                        </div>
                        <Typography
                            variant="subtitle1"
                            component='div'
                        >
                            ${product.price}
                        </Typography>
                        <Typography
                            variant="body1"
                            component='div'
                            sx={{
                                marginY: 2,
                                color: '#555',
                                textAlign: 'justify'
                            }}
                        >
                            {product.description}
                        </Typography>
                        <div>
                            <Grid container>
                                <Grid item md={4}>
                                    <Typography
                                        variant="subtitle1"
                                        component='div'
                                        sx={{
                                            marginY: 2,
                                        }}
                                    >
                                        Country
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        component='div'
                                        sx={{
                                            marginY: 2,
                                        }}
                                    >
                                        Province
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        component='div'
                                        sx={{
                                            marginY: 2,
                                        }}
                                    >
                                        Type
                                    </Typography>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography
                                        variant="subtitle1"
                                        component='div'
                                        sx={{
                                            marginY: 2,
                                            color: '#888'
                                        }}
                                    >
                                        {product.country}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        component='div'
                                        sx={{
                                            marginY: 2,
                                            color: '#888'
                                        }}
                                    >
                                        {product.province}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        component='div'
                                        sx={{
                                            marginY: 2,
                                            color: '#888'
                                        }}
                                    >
                                        {product.type}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <hr />
                        <Typography
                            variant="subtitle1"
                            component='div'
                            sx={{
                                marginY: 2,
                                color: '#888'
                            }}
                        >
                            Quantity
                        </Typography>
                        <ButtonGroup
                            variant="outlined"
                            aria-label="outlined button group"
                            color="info"
                        >
                            <Button><RemoveIcon /></Button>
                            <Button disabled>0</Button>
                            <Button><AddIcon /></Button>
                        </ButtonGroup>
                        <div className={styles.ProductDetailAction}>
                            <Button
                                color="warning"
                                variant="contained"
                                sx={{
                                    marginRight: 1
                                }}
                            >
                                Buy now
                            </Button>
                            <Button
                                variant="contained"
                                color="info"
                                startIcon={<AddShoppingCartIcon />}
                                sx={{
                                    marginRight: 1
                                }}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <hr />
                <div style={{ margin: '24px 12px' }}>
                    <h1
                        className={styles.Categories_title}
                    >
                        Related Products
                    </h1>
                    <ProductDetail.ProductDetailRelatedProductComponent products={products} />
                </div>
            </Container>
        </>
    );
}

const Star = ({ isMarked, starId }) => {
    return isMarked ?
        <StarIcon
            color="info"
            fontSize="small"
        />
        :
        <StarBorderIcon
            color="info"
            fontSize="small"
        />;
}