import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutline, DeleteOutlined, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid2, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from '../../hook/useForm';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startSaveNote, startUploadingFiles } from '../../store/journal/thunks';
import { startDeletingNote } from '../../store/auth';

export const NoteView = () => {
  const dispath = useDispatch();

  const { active: note, messageSaved, isSaving } = useSelector( state  => state.journal )
  const { 
    body,
    title,
    date,
    formState,
    onInputChange,
    formValidation,
  } = useForm( note );

  const dateString = useMemo( () => {
    const newDate = new Date( date );
    return newDate.toUTCString();
  }, [ date ]);

  const fileInputRef = useRef();
  
  useEffect( () => {
    dispath( setActiveNote( formState ) )
  }, [ formState ]);

  useEffect( () => {
    if( messageSaved.length > 0 ){
      Swal.fire( 'Nota actualizada', messageSaved, 'success');
    }
  }, [ messageSaved ])

  const onSaveNote = () => {
    dispath( startSaveNote() );
  };

  const onFileInputChange = ( { target } ) => {
    if( target.files === 0) return;
    dispath( startUploadingFiles( target.files ));
  };

  const onDelete = () => {
    dispath( startDeletingNote() );
  }

  return (
    <Grid2 
      className="animete__animeted animate__fadeIn animete__faster"
      container direction="row"
      justifyContent="space-between" 
      alignItems='center' sx={{ mb: 1 }}
    >
      <Grid2>
        <Typography fontSize={ 39 } fontWeight="light">{ dateString }</Typography>
      </Grid2>

      <Grid2>

        <input 
          type='file'
          multiple
          ref={ fileInputRef }
          onChange={ onFileInputChange }
          style={{ display: 'none' }}
        />
        <IconButton
          color='primary'
          disabled= { isSaving }
          onClick={ () => fileInputRef.current.click() }
        >
          <UploadOutlined/>
        </IconButton>

        <Button
          onClick={ onSaveNote }
          color='primary'
          sx={{ padding: 2 }}
          disabled={ isSaving }
        >
            <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
            Guardar
        </Button>
      </Grid2>

      <Grid2 container width="100%">
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un texto'
          label='Título'
          sx={{ border: 'none', mb: 1}}
          name='title'
          value={ title }
          onChange={ onInputChange }
        />

        <TextField 
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={ 5 }
          name='body'
          value={ body }
          onChange={ onInputChange }
        />
      </Grid2>
      <Grid2 container justifyContent='end'>
        <Button
          onClick={ onDelete }
          sx={ { mt:2 } }
          color="error"
        >
          <DeleteOutline />
          Borrar
        </Button>
      </Grid2>

      <ImageGallery 
        images={ note.imageUrls}
      />
    </Grid2>
  )
}
