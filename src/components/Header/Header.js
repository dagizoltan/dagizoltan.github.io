import React from 'react'
import { Box, Button, Container, Grid, GridList, GridListTile, IconButton, List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, Typography, Link } from '@material-ui/core'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';



import useStyles from './useStyles'

const profile = {
    name: 'Zoltán Dági',
    role: 'Software Developer',
    city: 'Budapest',
    contactDetails: {
        linkedin: 'https://www.linkedin.com/in/zolt%C3%A1n-d%C3%A1gi-38a42711a/',
        email: 'dagizoltan@gmail.com',
        phone: '+36705847568'
    }
}

const stack = [
        { name: 'React' },
        { name: 'Redux' },
        { name: 'Material-ui' },
        { name: 'Bootstrap' },
        { name: 'Sass' },
        { name: 'Node.js'},
        { name: 'Deno'},
        { name: 'Symfony (PHP)'},
        { name: 'MongoDB'},
        { name: 'MySQL'}
]

const stackKeys = Object.keys(stack)

function Header (props) {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.container}>
                <Container>
                    <Grid
                        container
                        direction='row'
                        justify='space-between'
                        alignItems='flex-start'
                    >
                        <Grid item>
                            <Box className={classes.titleContainer}>
                            <Typography variant='h1' fontWeight='bold'>{profile.name}</Typography>
                            <Typography variant='h2' >{profile.role}</Typography>
                            </Box>
                        </Grid>
                            <List disablePadding>
                                <ListItem>
                                    <ListItemIcon>
                                        <MailIcon style={{ color: '#ffffff'}}/>
                                    </ListItemIcon>
                                    <Link style={{ color: '#ffffff'}} href={`mailto:${profile.contactDetails.email}`}>{profile.contactDetails.email}</Link>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>  
                                        <PhoneIcon style={{ color: '#ffffff'}}/>
                                    </ListItemIcon>
                                    <Link style={{ color: '#ffffff'}} href={`tel:${profile.contactDetails.phone}`}>{profile.contactDetails.phone}</Link>
                                </ListItem>
                            </List>
                    </Grid>
                    <Grid
                        container
                        direction='row'
                        justify='space-between'
                        alignItems='flex-start'
                        >
                        {stack.map(props => <Grid item><Box p={1} color='primary.light'>{props.name}</Box></Grid>)}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Header
