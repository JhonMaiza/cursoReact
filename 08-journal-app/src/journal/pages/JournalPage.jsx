import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../view/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { savingNewNote, startNewNote } from "../../store/journal";
import { NoteView } from "../view";

export const JournalPage = () => {
  const { isSaving, active } = useSelector( state => state.journal );

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( savingNewNote() )
    dispatch( startNewNote() );
  }
  return (
    <>
      <JournalLayout>
        {/* <Typography> Ejemplo uno dos tres cuatro cinco seix  Ejemplo uno dos tres cuatro cinco seix  Ejemplo uno dos tres cuatro cinco seix  Ejemplo uno dos tres cuatro cinco seix  Ejemplo uno dos tres cuatro cinco seix</Typography> */}

         { 
          ( !active ) 
            ? <NothingSelectedView />
            : < NoteView />
         }


        <IconButton
          onClick={ onClickNewNote }
          size="large"
          disabled={ isSaving }
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50 
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }}/>
        </IconButton>
      </JournalLayout>
    </>
  )
}