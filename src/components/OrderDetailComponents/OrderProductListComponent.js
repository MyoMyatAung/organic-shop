import React from 'react';
import OrderProductItemComponent from './OrderProductItemComponent';

const OrderProductListComponent = ({ products }) => {
     return (
          <>
               {
                    products.map((product, index) => {
                         return <OrderProductItemComponent
                              product={product}
                              index={index + 1}
                         />
                    })
               }
          </>
     );
}

export default OrderProductListComponent;