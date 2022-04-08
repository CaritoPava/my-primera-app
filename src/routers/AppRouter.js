import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AddNote } from '../components/notes/AddNote'
import { AuthRouter } from './AuthRouter'
import { NotesRouter } from './NotesRouter'



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/*" element={<NotesRouter />} />

        {/* <Route path="*" element={<Navigate to='/auth/login' replace />} */}
        {/* /> */}
      </Routes>
    </BrowserRouter>
  )
}
