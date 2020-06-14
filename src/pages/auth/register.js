import React from 'react'

import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

import CameraFrontIcon from '@material-ui/icons/CameraFront'

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
    }
}

const Register = () => {

    return (
        <Container maxWidth="xs">

            <div style={styles.card}>

                <Typography variant="h5" style={{marginBottom: 10}}>
                    Formulario de Registro
                </Typography>

                <CameraFrontIcon />

                <form style={styles.form}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <TextField label="Nombres" name="names" fullWidth />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField label="Correo electrónico" name="email" fullWidth />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField label="Contraseña" name="password" fullWidth />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField label="Confirmar Contraseña" name="confirmPassword" fullWidth />
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-end" style={{marginTop: 20}}>
                        <Grid item md={12} xs={4}>
                            <Button variant="contained" color="primary" fullWidth > Registrar </Button>
                        </Grid>
                    </Grid>
                </form>

            </div>

        </Container>
    )
}

export default Register
