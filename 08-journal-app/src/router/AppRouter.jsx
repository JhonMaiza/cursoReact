import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hook/useCheckAuth';

export const AppRouter = () => {

  const status = useCheckAuth();
  if( status === 'checking' ) {
    return <CheckingAuth />
  };

  return (
    <Routes>
      {
        ( status === 'authenticated' )
          ? <Route path="/*" element={ <JournalRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      <Route path='/*' element={ <Navigate to="/auth/login"/>}/>

      {/* Login y registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}
      {/*  JournalAPP */}
        {/* <Route path="/*" element={ <JournalRoutes /> } /> */}
    </Routes>
  )
}
