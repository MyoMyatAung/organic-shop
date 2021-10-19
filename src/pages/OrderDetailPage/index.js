import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import { Common, OrderDetail } from '../../components';

import { order } from '../../data/order'

export default () => {

     let { id } = useParams();

     const selectedOrder = order.find((o) => o.id === id);

     return (
          <>
               <Common.PageHeaderComponent title="Order Detail" />
               <Container>
                    <OrderDetail.OrderHeaderComponent
                         order_number={selectedOrder.order_number}
                         cost={selectedOrder.cost}
                         date={selectedOrder.date}
                    />
                    <OrderDetail.OrderProductListComponent
                         products={selectedOrder.products}
                    />
               </Container>
          </>
     );
}