import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {

    const [ auth, setAuth ] = useState(false)
    const [ title, setTitle ] = useState('')

    const value = {
        auth,
        setAuth: () => { setAuth(true) },
        title,
        setTitle: (title) => { setTitle(title) }
    }

    return(
        <Context.Provider value={value}>
            { children }
        </Context.Provider>
    )

}

export default {
    Provider,
    Consumer: Context.Consumer
}
