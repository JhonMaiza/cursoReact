import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firabase/config";
import { login, logout } from "../store/auth";
import { onAuthStateChanged } from "firebase/auth";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispath = useDispatch();
  
    useEffect( () => {
      onAuthStateChanged( FirebaseAuth, async ( user ) =>{
        if( !user ) return dispath( logout() );
        const { displayName, email, uid, photoURL } = user;
        dispath( login({ displayName, email, uid, photoURL }));
        dispath( startLoadingNotes());
      } );
    }, []);

    return status
}