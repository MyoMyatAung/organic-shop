import { Button, Typography } from '@mui/material';
import React from 'react';

import {
     Email as EmailIcon,
     Phone as PhoneIcon,
} from '@mui/icons-material';

const ProfileDataComponent = ({ data, style }) => {
     return (
          <div className={style.ProfileData}>
               <div
                    style={
                         {
                              display: 'flex'
                         }
                    }
               >
                    <h3>Personal Profile</h3>
                    <Button
                         color='info'
                         size='small'
                    >
                         Edit
                    </Button>
               </div>
               <Typography>
                    {data.username}
               </Typography>
               <div
                    style={{
                         display: 'flex',
                         margin: '12px 0px'
                    }}
               >
                    <EmailIcon
                         fontSize="small"
                         sx={{
                              color: '#999',
                              marginRight: 1,
                         }}
                    />
                    <Typography>
                         {data.email}
                    </Typography>
               </div>

               <div
                    style={{
                         display: 'flex',
                         margin: '12px 0px'
                    }}
               >
                    <PhoneIcon
                         fontSize="small"
                         sx={{
                              color: '#999',
                              marginRight: 1,
                         }}
                    />
                    <Typography>
                         {data.phonenumber}
                    </Typography>
               </div>

          </div>
     );
}

export default ProfileDataComponent;