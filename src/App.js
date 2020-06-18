import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home/home'
import Login from './pages/auth/login'
import Header from './components/shared/header'
import Register from './pages/auth/register'
import FooterNavigation from './components/shared/footerNav'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/" exact component={Home} />
      
      <p>Cargando...</p>
      <FooterNavigation />
    </BrowserRouter>
  )
}

export default App
