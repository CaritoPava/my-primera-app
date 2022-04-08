import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBarFooter } from '../components/nav/NavBarFooter'
import { NavBarHeader } from '../components/nav/NavBarHeader'
import { AddItems } from '../components/notes/AddItems'
import { AddNote } from '../components/notes/AddNote'
import { Note } from '../components/notes/Note'
import { NotesView } from '../components/notes/NotesView'
export const NotesRouter = () => {
  return (
    <div >
      <div >
        <NavBarHeader />
      </div>
      <div >
        <Routes>
          <Route path="/" element={<NotesView />} />
          <Route path="add" element={<AddNote />} />
          <Route path="add/note" element={<Note />} />
          <Route path="add/note/items" element={<AddItems />} />
        </Routes>
      </div>
      <div >
        <NavBarFooter />
      </div>
    </div>
  )
}
