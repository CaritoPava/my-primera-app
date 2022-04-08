import React from 'react'

export const AddNote = () => {
  return (
    <div >
      <form className='note__modalCreateNote-cont'>
        <input
          type="text"
          placeholder='Nombre Lista'
          name='nombreLista'
          className='auth__input'
          autoComplete='off'
        />
        <div className='note__modalCreateNote-buttons'>
          <button
            type='submit'
            className='btn-primary'
          >
            Atras
          </button>
          <button
            type='submit'
            className='btn-primary'
          >
            Crear
          </button>
        </div>


      </form>
    </div>
  )
}
