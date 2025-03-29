import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLoyout } from '../layout/AuthLoyout';
import { useForm } from '../../hook';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector( state => state.auth )

  const { email, password, onInputChange, onResetForm, formState } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

  const onSubmit = ( event ) => {
    event.preventDefault();
    if( email.trim() === 0 && password.trim() === 0) return;
    dispatch( startLoginWithEmailPassword( { email, password } ) );
    // onResetForm();
  };

  const onGoogleSignIn = () => { 
    console.log('on google sing in');
    dispatch( startGoogleSignIn() );
    
  };

  return (
    <AuthLoyout title="Login">
      <form onSubmit={ onSubmit }>
        <Grid2 container>
          <Grid2 size={ { sm: 12 }} sx={{ mt: 2 }}>
            <TextField 
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
            />
          </Grid2>

          <Grid2 size={ { sm: 12 }} sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
            />
          </Grid2>

          <Grid2 size="100%" display={ !!errorMessage? '': 'none'} sx={{mt:1}}>
              <Alert 
                severity="error"
              >
                { errorMessage }
              </Alert>
            </Grid2>
          
          <Grid2 container size={ 12 } spacing={ 2 } sx={ { mb: 2, mt: 1}} >


            <Grid2 size={{ xs: 12, sm: 6, md: 6  }}>
              <Button 
                type="submit"
                variant="contained"
                fullWidth
                disabled={ isAuthenticating }
              >
                Login
              </Button>
            </Grid2>
            
            <Grid2 size={{ xs: 12, sm: 6, md: 6  }}>
              <Button 
                variant="contained" 
                fullWidth
                onClick={ onGoogleSignIn }
                disabled={ isAuthenticating }
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container size={ 12 } direction="row" justifyContent="end" >
            <Link component={ RouterLink } color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid2>

        </Grid2>
      </form>
    </AuthLoyout>

  )
}