import React from 'react'
import Saving from './saving'

import Button from '@material-ui/core/Button'

import AddIcon from '@material-ui/icons/Add'
import TimelineIcon from '@material-ui/icons/Timeline'
import AddBoxIcon from '@material-ui/icons/AddBox'

const styles = {
    container: {
      width: '96%',
      minWidth: 275,
      maxWidth: 450,
      margin: '0 auto',
      marginBottom: 10,
      border: '1px solid #aba0a0',
      textAlign: 'center',
      borderRadius: 10
    },
    actions: {
        width: '94%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        marginBottom: '9px'
    },
    h2:{
        marginTop: 0
    }
}

const Index = () => {

    return (
    <>
        <div style={styles.container}>
            <h2 style={styles.h2}>Total 2500 $</h2>
            <div style={styles.actions}>
                <Button size="small" variant="outlined" color="primary" startIcon={<AddIcon />}>Nueva Caja</Button>
                <Button size="small" variant="outlined" color="secondary" startIcon={<TimelineIcon />}>Graficar</Button>
                <Button size="small" variant="outlined" color="primary" startIcon={<AddBoxIcon />}>Reg. Ingreso</Button>
            </div>
        </div>
        {
            [0,1,2,3].map(i => (
                <Saving key={i} />
            ))
        }
    </>
    )
}

export default Index
