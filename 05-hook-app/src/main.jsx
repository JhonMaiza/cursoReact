import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { HookApp } from './HookApp.jsx'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomForm.jsx'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook.jsx'
import { FocusScreen } from './04-useRef/FocusScreen.jsx'
import { Layout } from './05-useLayoutEffect/Layout.jsx'
import { Memorize } from './06-memos/Memoriza.jsx'
import { MemoHook } from './06-memos/MemoHook.jsx'
import { CallbackHook } from './06-memos/CallbackHook.jsx'
import { Padre } from './07-tarea-memo/Padre.jsx'
import './08-reducer/intro-reducer.js'
import { TodoApp } from './08-reducer/TodoApp.jsx'
import { MainApp } from './09-useContext/MainApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      {/* <HookApp /> */}
      {/* <CounterWithCustomHook /> */}
      {/* <SimpleForm/> */}
      {/* <FormWithCustomHook/> */}
      {/* <MultipleCustomHook/> */}
      {/* <FocusScreen/> */}
      {/* <Layout/> */}
      {/* <Memorize/> */}
      {/* <MemoHook/> */}
      {/* <CallbackHook/> */}
      {/* <Padre/> */}
      {/* <TodoApp/> */}
      <MainApp/>
    {/* </React.StrictMode>, */}
  </BrowserRouter>

)
