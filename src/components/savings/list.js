import React from 'react'

import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VisibilityIcon from '@material-ui/icons/Visibility';

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

    return (
        <div style={styles.list}>
            <div style={styles.amount}>
                30$
            </div>
            <div style={styles.item}>
                Inversion en facebook ads para hotmar pub aff.
            </div>
            <div style={styles.actions}>
                <IconButton>
                    <VisibilityIcon />
                </IconButton>
                <IconButton>
                    <DeleteForeverIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ListSavings
