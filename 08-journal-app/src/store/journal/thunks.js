import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firabase/config";
import { addNewEmptyNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime(),
        };

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`));
        const setDocResp = await setDoc( newDoc, newNote );
        console.log({ newDoc, setDocResp });
        
        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ));
        dispatch( setActiveNote( newNote ));
    }
};

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        if( !uid ) throw new Error('El uid del usuario no existe');
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ));
    }
};

export const startSaveNote = () => {
    return async ( dispatch, getState ) => {        
        dispatch( setSaving() );
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await setDoc( docRef, noteToFireStore, { merge: true });

        dispatch( updateNote( note ) );
    }
};

export const startUploadingFiles = ( files = [] ) => {    
    return async ( dispatch ) => {
        dispatch( setSaving() );
        const fileUploadPromises = [];
        for( const file of files ) {
            fileUploadPromises.push( fileUpload( file )  )
        };

        const photosUrls = await Promise.all( fileUploadPromises );
        console.log( photosUrls );
        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
}