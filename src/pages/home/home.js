import React, { useContext, useLayoutEffect } from 'react'
import Index from '../../components/savings/index'

import { Context } from '../../context/Context'

import './styles.css'

const Home = () => {

    const { setTitle } = useContext(Context)

    useLayoutEffect(() => {
        setTitle('')
    })

    return (
        <div className="card">
            <Index />
        </div>
    )
}

export default Home
