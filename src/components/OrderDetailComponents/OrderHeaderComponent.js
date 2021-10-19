import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const OrderHeaderComponent = (
     {
          order_number,
          date,
          cost
     }
) => {
     return (
          <>
               <Paper
                    elevation={0}
                    sx={{
                         padding: 1
                    }}
               >
                    <Grid
                         container
                         justifyContent="space-between"
                         alignItems="center"
                    >
                         <Grid item>
                              <Typography
                                   variant='body2'
                              >
                                   {order_number}
                              </Typography>
                              <Typography
                                   variant='body2'
                                   sx={{
                                        color: 'gray'
                                   }}
                              >
                                   Placed on: {date}
                              </Typography>
                         </Grid>

                         <Grid item>
                              <Typography>
                                   Total: {cost}
                              </Typography>
                         </Grid>
                    </Grid>
               </Paper>
          </>
     );
}

export default OrderHeaderComponent;