import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
    // active: {
    //     id: 'ABC123',
    //     title: '',
    //     body: '',
    //     date: 123456,
    //     imageUrls: [],
    // }
  },
  reducers: {
    addNewEmptyNote: ( state, action ) => {
      state.notes.push( action.payload );
      state.isSaving = false;
    },
    setActiveNote: ( state, action ) => {
      state.active = action.payload;
      state.messageSaved = '';
    },
    savingNewNote: ( state ) => {
      state.isSaving = true;
    },
    setNotes: ( state, action ) => {
      state.notes = action.payload;
    },
    setSaving: ( state, action ) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: ( state, action ) => {
      state.isSaving = false;
      console.log(action.payload.title);
      
      state.notes = state.notes.map( note => ( note.id === action.payload.id )
        ? action.payload
        : note
      );

      state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
    },
    setPhotosToActiveNote: ( state, action ) => {
      state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
      state.isSaving = false;
    },
    cleatNotesLogout:( state) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: ( state, action ) => {
      state.active = null
      state.notes = state.notes.filter( note => ( note.id !== action.payload ) );
    }
  }
});


// Action creators are generated for each case reducer function
export const { 
  addNewEmptyNote,
  cleatNotesLogout,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} = journalSlice.actions;