import React from 'react'

import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: 10
  },
  toolbar:{
      display: 'flex',
      alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
}))

const AuxHeader = ({ title }) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Link to='/' className={classes.link}>
                            <ArrowBackIcon />
                        </Link>
                    </IconButton>
                    <Typography variant="h6" >
                        { title }
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AuxHeader
