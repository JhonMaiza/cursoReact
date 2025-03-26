import  { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLoyout } from '../layout/AuthLoyout';

export const RegisterPage = () => {
  return (
    <AuthLoyout title="Login">
      <form action="">
        <Grid2 container>
        <Grid2 size={ { sm: 12 }} sx={{ mt: 2 }}>
            <TextField 
              label="Nombre"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid2>

          <Grid2 size={ { sm: 12 }} sx={{ mt: 2 }}>
            <TextField 
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid2>

          <Grid2 size={ { sm: 12 }} sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid2>

          <Grid2 container size={ 12 } spacing={ 2 } sx={ { mb: 2, mt: 1}} >
            <Grid2 size={{ xs: 12 }}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid2>

          </Grid2>

          <Grid2 container size={ 12 } direction="row" justifyContent="end" >
            <Typography sx={ {mr: 1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid2>

        </Grid2>
      </form>
    </AuthLoyout>

  )
}