import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import {
     WorkOutline as WorkOutlineIcon
} from '@mui/icons-material';

const OrderProductItemComponent = ({ product, index }) => {
     return <Paper
          elevation={0}
          sx={{
               padding: 1,
               marginY: 1
          }}
     >
          <Grid container>
               <Grid item>
                    <WorkOutlineIcon />
               </Grid>
               <Grid item>
                    <Typography>Package {index}</Typography>
               </Grid>
          </Grid>
          <hr />
          <Grid
               container
               justifyContent="space-between"
               sx={{ marginY: 2 }}
          >
               <Grid item xs={12} md={3}>
                    <img src={product.image_url} width={100} alt={product.name} />
               </Grid>
               <Grid item xs={4} md={3}>
                    <Typography>
                         {product.name}
                    </Typography>
                    <Typography
                         variant="body2"
                         sx={{ color: 'gray' }}
                    >
                         {product.category} | {product.type}
                    </Typography>
               </Grid>
               <Grid item xs={4} md={3}>
                    <Typography>
                         MMK-{product.price}
                    </Typography>
               </Grid>
               <Grid item xs={4} md={3}>
                    <Typography>
                         Qty: {product.quantity}
                    </Typography>
               </Grid>
          </Grid>
     </Paper>
}

export default OrderProductItemComponent;