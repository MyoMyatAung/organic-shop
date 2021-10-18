import React from 'react';

import { Button, Divider, Grid, Typography } from '@mui/material';

const ProfileAddressBookComponent = ({ addressBooks, style }) => {
     return (
          <div className={style.ProfileData}>
               <div
                    style={
                         {
                              display: 'flex'
                         }
                    }
               >
                    <h3>Address Book</h3>
                    <Button
                         color='info'
                         size='small'
                    >
                         Edit
                    </Button>
               </div>
               <Grid container sx={{margin: '8px 0px'}}>
                    {
                         addressBooks.map((addressBook) => {
                              return (
                                   <Grid
                                        item
                                        key={addressBook.id}
                                        md={6}
                                        container
                                        justifyContent='space-around'
                                   >
                                        <Grid item>
                                             <Typography>
                                                  {addressBook.full_name}
                                             </Typography>
                                             <Typography
                                                  variant="body2"
                                                  gutterBottom
                                             >
                                                  {addressBook.address}# {addressBook.region}
                                                  &nbsp; - {addressBook.city} - {addressBook.township}
                                             </Typography>
                                             <Typography
                                                  variant="body2"
                                                  gutterBottom
                                             >
                                                  {addressBook.phonenumber}
                                             </Typography>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                   </Grid>
                              );
                         })
                    }
               </Grid>
          </div>
     );
}

export default ProfileAddressBookComponent;