import React from 'react'
import { AddItems } from './AddItems'

export const Note = () => {
  return (
    <div className='notes_main mt-10rem'>
      <AddItems />
      <img
        className='notes_img'
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/Ruled_paper_note_with_pin.svg" alt="Lista" />

      <p className='mt-8rem'>
        Agrega items, con le boton azul !!
      </p>
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
