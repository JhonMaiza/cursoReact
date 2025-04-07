import { collection, getDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firabase/config";

export const loadNotes = async( uid = '') => {
    if( !uid ) throw new Error('El uid del usuario no existe');

    const collecionRef = collection( FirebaseDB, `${ uid}/journal/notes` );
    const docs = await getDocs( collecionRef );
    const notes = [];

    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() }) 
    });
    console.log(docs);
    return notes;
}