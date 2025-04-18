import  { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLoyout } from '../layout/AuthLoyout';
import { useForm } from '../../hook';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [ ( value ) => value.includes( '@' ), 'El correo debe de tenrer un @'],
  password: [ ( value ) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [ ( value ) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [ formSubmited, setFormSubmited ] = useState( false );
  const { status, errorMessage } = useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ]);
  const { 
    formState, displayName, email, password, onInputChange, onResetForm, 
    isFormValid, displayNameValid, emailValid,passwordValid,
  } = useForm( formData, formValidations );
  
  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmited( true );
    if( !isFormValid ) return;
    dispatch( startCreatingUserWithEmailPassword( formState ) );
    // onResetForm();
  };

  return (
    <AuthLoyout title="Crear Cuenta">
      <form onSubmit={ onSubmit } className="animete__animeted animate__fadeIn animete__faster">
        <Grid2 container>
        <Grid2 size={ { sm: 12 }} sx={{ mt: 2 }}>
            <TextField 
              label="Nombre"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmited }
              helperText={ displayNameValid }
            />
          </Grid2>

          <Grid2 size={ { sm: 12 }} sx={{ mt: 2 }}>
            <TextField 
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmited }
              helperText={ emailValid }
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
              error={ !!passwordValid && formSubmited }
              helperText={ passwordValid }
            />
          </Grid2>

          <Grid2 container size={ 12 } spacing={ 2 } sx={ { mb: 2, mt: 1}} >

            <Grid2 
              size={{ xs: 12 }}
              display={ !!errorMessage? '': 'none'}
            >
              <Alert severity="error">
                { errorMessage }
              </Alert>
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
              <Button 
                type='submit'
                variant="contained"
                fullWidth
                disabled={ isCheckingAuthentication }
              >
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