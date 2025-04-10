import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid2, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid2 
      className="animete__animeted animate__fadeIn animete__faster"
      container direction="row"
      justifyContent="space-between" 
      alignItems='center' sx={{ mb: 1 }}
    >
      <Grid2>
        <Typography fontSize={ 39 } fontWeight="light">28 de agosto, 2023</Typography>
      </Grid2>

      <Grid2>
        <Button color='primary' sx={{ padding: 2 }}>
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
        />

        <TextField 
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={ 5 }
        />
      </Grid2>

      <ImageGallery />
    </Grid2>
  )
}
