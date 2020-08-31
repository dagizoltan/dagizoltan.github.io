import React, {useState} from 'react'

import { Box,Card, CardActionArea, CardContent, CardMedia, Paper, GridList, GridListTile } from '@material-ui/core'

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './useStyles'

function Gallery (props) {
    const {
        items
    } = props

    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = useState(items[0])

    const handleOpen = (item) => {
      setSelected(item)
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSelect = (item) => {
        setSelected(item)
    }

    if (!items) return null
    console.log(selected)
    return (
        <Box className={classes.container}>
            <GridList cellHeight={80} className={classes.gridList} cols={items.length}>
                {items.map((item) => (
                <GridListTile key={item.img} cols={item.cols || 1} onClick={() => handleOpen(item)}>
                    <CardActionArea>
                    <CardMedia component='img' src={item.img} alt={item.title} />
                    </CardActionArea>
                </GridListTile>
                ))}
            </GridList>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Card className={classes.card}>
                        <Box maxHeight='500px' className={classes.imageContainer}>
                            <CardMedia component='img' src={selected.img} />
                        </Box>
                        <GridList cols={items.length} cellHeight={50} className={classes.imagePicker}>
                            {items.map((item) => (
                                <GridListTile key={item.img} onClick={() => handleSelect(item)}>
                                    <CardActionArea>
                                        <CardMedia component='img' src={item.img}  alt={item.title}  />
                                    </CardActionArea>
                                </GridListTile>
                            ))}
                        </GridList>
                    </Card>
                </Fade>
            </Modal>
        </Box>
    )
}

export default Gallery
