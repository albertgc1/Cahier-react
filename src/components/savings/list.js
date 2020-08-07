import React, { useState } from 'react'

import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
    list: {
        display: 'grid',
        gridTemplate: '58px / 1fr 8fr 1fr',
        marginBottom: 10,
        borderBottom: '1px solid #878383'
    },
    actions: {
        display: 'flex'
    },
    amount: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 8
    }
}

const ListSavings = () => {

    const [ open, setOpen ] = useState(false)

    const show = () => {
       setOpen(true)
    }

    const close = () => {
        setOpen(false)
     }

    return (
        <>
        <div style={styles.list}>
            <div style={styles.amount}>
                30$
            </div>
            <div style={styles.item}>
                Inversion en facebook ads para hotmar pub aff.
            </div>
            <div style={styles.actions}>
                <IconButton onClick={show}>
                    <VisibilityIcon />
                </IconButton>
                <IconButton>
                    <DeleteForeverIcon />
                </IconButton>
            </div>
        </div>
        <Dialog open={open} onClose={close} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={close} color="primary" autoFocus>
                Aceptar
            </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default ListSavings
