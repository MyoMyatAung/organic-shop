import React from 'react';

import {
     Paper,
     Typography,
     Button,
     Grid,
     Divider
} from '@mui/material';

import {
     Room as RoomIcon,
     Article as ArticleIcon,
     LocalPhone as LocalPhoneIcon,
     Email as EmailIcon
} from '@mui/icons-material';

const CheckoutPlaceOrderComponent = ({ addressBook }) => {
     return (
          <Paper
               elevation={0}
               variant="outlined"
               component="div"
               sx={{ padding: 1 }}
          >
               <Typography
                    variant="h6"
                    sx={{ marginBottom: 2 }}
               >
                    Shipping and Billing
               </Typography>
               <div
                    style={{ marginTop: 12 }}
               >

               </div>
               <Grid
                    container
                    alignItems='flex-start'
               >
                    <Grid item md={1}>
                         <RoomIcon
                              fontSize="small"
                              color='info'
                         />
                    </Grid>
                    <Grid item md={9}>
                         <Typography>
                              {addressBook.full_name}
                         </Typography>
                         <Typography
                              variant="caption"
                              gutterBottom
                         >
                              {addressBook.address}# {addressBook.region}
                              &nbsp; - {addressBook.city} - {addressBook.township}
                         </Typography>
                         <Typography
                              variant="caption"
                              gutterBottom
                         >
                              {addressBook.phonenumber}
                         </Typography>
                    </Grid>
                    <Grid item md={2}>
                         <Button
                              size="small"
                              color='info'
                         >
                              Edit
                         </Button>
                    </Grid>
               </Grid>
               <Grid
                    container
                    alignItems='flex-start'
                    sx={{ marginY: 1 }}
               >
                    <Grid item md={1}>
                         <ArticleIcon
                              fontSize="small"
                              color='info'
                         />
                    </Grid>
                    <Grid item md={9}>
                         <Typography
                              variant="body2"
                         >
                              Bill to the same address
                         </Typography>
                    </Grid>
                    <Grid item md={2}>
                         <Button
                              size="small"
                              color='info'
                         >
                              Edit
                         </Button>
                    </Grid>
               </Grid>
               <Grid
                    container
                    alignItems='flex-start'
                    sx={{ marginY: 1 }}
               >
                    <Grid item md={1}>
                         <LocalPhoneIcon
                              fontSize="small"
                              color='info'
                         />
                    </Grid>
                    <Grid item md={9}>
                         <Typography
                              variant="body2"
                         >
                              +959-780878870
                         </Typography>
                    </Grid>
                    <Grid item md={2}>
                         <Button
                              size="small"
                              color='info'
                         >
                              Edit
                         </Button>
                    </Grid>
               </Grid>
               <Grid
                    container
                    alignItems='flex-start'
                    sx={{ marginY: 1 }}
               >
                    <Grid item md={1}>
                         <EmailIcon
                              fontSize="small"
                              color='info'
                         />
                    </Grid>
                    <Grid item md={9}>
                         <Typography
                              variant="body2"
                         >
                              myatmyo299@gmail.com
                         </Typography>
                    </Grid>
                    <Grid item md={2}>
                         <Button
                              size="small"
                              color='info'
                         >
                              Edit
                         </Button>
                    </Grid>
               </Grid>
               <div
                    style={{ margin: '12px 0px' }}
               >
                    <Typography
                         variant="h6"
                         sx={{ marginBottom: 2 }}
                    >
                         Order Summary
                    </Typography>
                    <div
                         style={{
                              display: 'flex',
                              justifyContent: 'space-between'
                         }}
                    >
                         <Typography
                              variant="subtitle1"
                              sx={{ color: 'gray' }}
                         >
                              Temporary amount
                         </Typography>
                         <Typography
                              variant="subtitle1"
                              sx={{ color: 'gray' }}
                         >
                              $73
                         </Typography>
                    </div>
                    <div
                         style={{
                              display: 'flex',
                              justifyContent: 'space-between'
                         }}
                    >
                         <Typography
                              variant="subtitle1"
                              sx={{ color: 'gray' }}
                         >
                              Shipping
                         </Typography>
                         <Typography
                              variant="subtitle1"
                              sx={{ color: 'gray' }}
                         >
                              $20
                         </Typography>
                    </div>
                    <Divider sx={{ marginY: 2 }} />
                    <div
                         style={{
                              display: 'flex',
                              justifyContent: 'space-between'
                         }}
                    >
                         <Typography
                              variant="subtitle1"
                         >
                              Total
                         </Typography>
                         <Typography
                              variant="subtitle1"
                              color='orange'
                         >
                              $93
                         </Typography>
                    </div>
               </div>
               <Button
                    variant="contained"
                    color="info"
                    fullWidth
               >
                    Place Order
               </Button>
          </Paper>
     );
}

export default CheckoutPlaceOrderComponent;