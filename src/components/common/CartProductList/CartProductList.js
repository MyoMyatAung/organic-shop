import React from 'react';
import CartProductItem from '../CartProductItem/CartProductItem';

const CartProductList = ({ carts }) => {
    return (
        <div>
            {
                carts.products.map((product) => {
                    return <CartProductItem
                        key={product.id}
                        product={product}
                    />;
                })
            }
        </div>
    );
}

export default CartProductList;