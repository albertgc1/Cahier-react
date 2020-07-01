import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import HomeIcon from '@material-ui/icons/Home'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    background: '#f5f5f5'
  },
});

const FooterNavigation = () => {
  const classes = useStyles()
  const [ value, setValue ] = useState('recents')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <Link to="/">
        <BottomNavigationAction label="Recents" value="recents" icon={<HomeIcon />} />
      </Link>
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} disabled/>
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} disabled/>
      <Link to="profile">
        <BottomNavigationAction label="Folder" value="folder" icon={<AccountBoxIcon />} />
      </Link>
    </BottomNavigation>
  )
}

export default FooterNavigation
