import React from 'react'
import { Box,Container, Typography, Link } from '@material-ui/core'
import { ProjectList} from './components'
import useStyles from './useStyles'
import { useLocale } from "core/locale"

function Projects (props) {
    const classes = useStyles()
    const {_} = useLocale()

    const projects = [
        {
            name: 'IoT system and devices for smarthouse',
            from: '2020 May',
            to: 'now'
        },
        {
            name: 'CNC - Laser Engraver for Skateboard Manufacturing',
            from: '2019 April',
            to: 'Now'
        },
        {
            name: 'Raw Material Need for Sanding Paper Factory',
            note: 'MPF Holding',
            from: '2017 April',
        },
        {
            name: 'Inner Combustion Engine Simulation',
            note: 'Delphi',
            from: '2013 April',
            to: '2013 May'
        },
        {
            name: 'Road Junction Control System',
            note: 'Delphi',
            from: '2013 March',
            to: '2013 April'
        }
    ]

    return (
            <Box id='projects' className={classes.container}>
                <Container>
                    <Typography variant='h2'>{_('Projects')}</Typography>
                    <ProjectList items={projects}/>
                </Container>
            </Box>
    )
}

export default Projects
