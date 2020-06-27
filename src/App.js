import React from 'react'

import Context from './context/Context';
import Router from './pages/router';

const App = () => {

  return (
    <Context.Provider>
      <Router />
    </Context.Provider>
  )
}

export default App
