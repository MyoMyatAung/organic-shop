/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import {
    Container,
    Grid,
    Typography,
    TextField,
    Button
} from '@mui/material';

import {
    Send as SendIcon
} from '@mui/icons-material';

import * as styles from '../../styles/ContactUsStyle/ContactUsStyle.module.css';

export default () => {
    return (
        <>
            <div className={styles.ContactUsHeader}>
                <h1>Contact Us</h1>
            </div>
            <Container>
                <Grid container>
                    <Grid
                        md={4}
                        sm={12}
                        xs={12}
                        item
                    >
                        <Typography
                            variant="h4"
                            component="div"
                        >
                            Office
                        </Typography>
                        <hr />
                        <div className={styles.ContactUsAddress}>
                            <Typography
                                variant="h6"
                                component="div"
                            >
                                Address:
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                            >
                                May Kha (h/7)
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                            >
                                Thingangyun Township
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                            >
                                Yangon
                            </Typography>
                        </div>
                        <hr />
                        <div className={styles.ContactUsAddress}>
                            <Typography
                                variant="h6"
                                component="div"
                            >
                                Address:
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                            >
                                Phone: 09780878870
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                            >
                                E-mail: myatmyo299@gmail.com
                            </Typography>
                        </div>
                    </Grid>
                    <Grid
                        md={8}
                        sm={12}
                        xs={12}
                        style={{
                            padding: '0px 24px'
                        }}
                        item
                        container
                        justifyContent='center'
                    >
                        <TextField
                            color="info"
                            id="outlined-basic"
                            label="Your name"
                            variant="outlined"
                            fullWidth
                            className={styles.ContactTextField}
                        />
                        <TextField
                            color="info"
                            id="outlined-basic"
                            label="Your email"
                            variant="outlined"
                            fullWidth
                            className={styles.ContactTextField}
                        />
                        <TextField
                            color="info"
                            id="outlined-basic"
                            label="Your Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            className={styles.ContactTextField}
                        />
                        <Button
                            variant='contained'
                            endIcon={<SendIcon />}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}