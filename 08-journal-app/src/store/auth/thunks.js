import { deleteDoc, doc } from "firebase/firestore/lite";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firabase/providers"
import { cleatNotesLogout, deleteNoteById } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice"
import { FirebaseDB } from "../../firabase/config";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )

    }
};

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await signInWithGoogle();
        if( !result.ok ) return dispatch( logout( result.errorMessage ) );
        dispatch( login( result ) )
    }
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if( !result.ok ) return dispatch( logout( result.errorMessage ));
        dispatch( login( result ));
    }
};


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await loginWithEmailPassword( { email, password } );
        if( !result.ok ) return dispatch( logout( { errorMessage: result.errorMessage }));        
        dispatch( login( result ) )
    } 
};

export const startLogout = () => {
    return async ( dispatch ) => {
        await logoutFirebase();
        dispatch( cleatNotesLogout() )
        dispatch( logout() );
    }
};

export const startDeletingNote = () => {
    return async ( dispatch, getState ) =>{
        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        console.log({ uid, note });
        
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc( docRef );
        dispatch( deleteNoteById( note.id ));
    }
};