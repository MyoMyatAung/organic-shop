import React from 'react';
import { Common } from '..';
import { CART_COLUMNS } from '../../constants/columns/OrderColumns';
import {
     Paper,
     Typography
} from '@mui/material';

const CheckoutCartTableComponent = ({ carts }) => {
     return (
          <>
               <Common.TableComponent
                    columns={CART_COLUMNS}
                    rows={carts.products}
                    isDense={true}
               />
               <Paper
                    elevation={0}
                    variant="outlined"
                    component="div"
                    sx={{
                         padding: 2,
                         marginY: 1,
                    }}
               >
                    <Typography
                         variant="body1"
                    >
                         Home Delivery, Fee: 1290 MMK
                    </Typography>
                    <Typography
                         variant="body2"
                    >
                         Est. Arrival: 22-25 Oct
                    </Typography>
               </Paper>
          </>
     );
}

export default CheckoutCartTableComponent;