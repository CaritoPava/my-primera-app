import React from 'react'
import { NavBarFooter } from '../nav/NavBarFooter'
import { NavBarHeader } from '../nav/NavBarHeader'
import { NoteEntry } from './NoteEntry'


export const NotesView = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className='notes_main'>

      <div className='notes__notes'>
        {entries.map(value => (
          <NoteEntry key={value} />
        ))}
      </div>
      <img
        className='notes_img'
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/Ruled_paper_note_with_pin.svg" alt="Lista" />

      <p>
        Crea tus listas, con le boton azul !!
      </p>
      <button
        className='btn-primary btn-delete'
      >Listas borradas</button>
      <br />
      <div className='notes_plusNotes'>
        <button
          className='btn-primary btn-plus'
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

    </div>


  )
}
