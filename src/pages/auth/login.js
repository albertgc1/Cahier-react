import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

import LockOpenIcon from '@material-ui/icons/LockOpen'

const styles = {
    card: {
        width: '100%',
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%'
    },
    actions: {
        width: '100%',
    }
}

const Login = () => {

    const [ email, setEmail ] = useState('albert@gmail.com')
    const [ password, setPassword ] = useState('asdasd')

    const login = () => {
        let data = { email, password }
        console.log(data)
    }

    return (
        <Container maxWidth="xs">

            <div style={styles.card}>

                <Typography variant="h5" style={{marginBottom: 10}}>
                    Bienbenido a Cashier
                </Typography>

                <LockOpenIcon />

                <form style={styles.form}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <TextField type="email" label="Correo electrónico" name="email" fullWidth 
                                onChange={e => setEmail(e.target.value)} value={email} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField type="password" label="Contraseña" name="password" fullWidth 
                                onChange={e => setPassword(e.target.value)} value={password} />
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-end" style={{marginTop: 20}}>
                        <Grid item md={12} xs={4}>
                            <Button variant="contained" color="primary" fullWidth onClick={login} > Entrar </Button>
                        </Grid>
                    </Grid>
                </form>

                <p>¿Aún no tienes cuenta? crea uno <Link to='register'>aquí</Link></p>

                <p style={{marginTop: 0}}>O puedes:</p>

                <div style={styles.actions}>
                    <Button variant="outlined" color="primary" fullWidth style={{marginBottom: 15}}>Iniciar sesión con Facebook</Button>
                    <Button variant="outlined" color="secondary" fullWidth>Iniciar sesión con Google</Button>
                </div>

            </div>

        </Container>
    )
}

export default Login
