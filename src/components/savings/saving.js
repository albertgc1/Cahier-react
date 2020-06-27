import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
//import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TimelineIcon from '@material-ui/icons/Timeline';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      width: '96%',
      minWidth: 275,
      maxWidth: 450,
      margin: '0 auto',
      marginBottom: 10
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    actions:{
      display: 'flex',
      justifyContent: 'space-between'
    },
    data: {
      display: 'flex',
      alignItems: 'center'
    },
    pctg:{
      color: '#aeaeae',
      fontSize: 15
    }
  });

const Saving = () => {

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.header}>
          <Typography variant="h4" component="h2">
            280 $
          </Typography>
          <IconButton color="secondary" aria-label="Graficar">
            <TimelineIcon />
          </IconButton>
        </div>
        <Typography variant="h5" component="h2">
          Inversiones <span className={classes.pctg}>10%</span>
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly. This saving in only to inveert
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <span className={classes.data}>
          <ArrowDownwardIcon /> 56 $
        </span>
        <Button size="small" color="primary">
          <Link to={`saving/${1235}`} >Ver Detalles</Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default Saving
