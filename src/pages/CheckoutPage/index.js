import React from 'react';

import * as styles from '../../styles/CheckoutStyle/CheckoutStyle.module.css';

import { carts } from '../../data/carts';
import { addressBooks } from '../../data/addressbook';
import { Checkout, Common } from '../../components';

import {
     Container,
     Grid,
} from '@mui/material';

export default () => {
     return (
          <>
               <Common.PageHeaderComponent title="Order Checkout" />
               <Container>
                    <Grid
                         container
                         spacing={2}
                    >
                         <Grid
                              item
                              md={8}
                         >
                              <Checkout.CheckoutCartTableComponent carts={carts} />
                         </Grid>
                         <Grid
                              item
                              md={4}
                         >
                              <Checkout.CheckoutPlaceOrderComponent addressBook={addressBooks[0]} />
                         </Grid>
                    </Grid>
               </Container>
          </>
     );
}