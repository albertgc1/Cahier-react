import React, { useContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Context } from '../context/Context'

import Header from '../components/shared/header'
import FooterNavigation from '../components/shared/footerNav'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import Home from '../pages/home/home'
import Detail from '../components/savings/detail'
import AuxHeader from '../components/shared/auxHeader'

const Router = () => {

    const { title } = useContext(Context)

    return (
        <BrowserRouter>
            { title ?
                <AuxHeader title={ title } />
              : <Header />
            }
        
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
        
            <Route path="/" exact component={ Home } />
            <Route path="/saving/:id" component={ Detail } />
            
            { !title &&
                <><div style={{ height: 50 }}></div>
                <FooterNavigation /></>
            }

        </BrowserRouter>
    )
}

export default Router
