import React from 'react'

export const NoteEntry = () => {
  return (
    <div className='note__containerEntry'>
      <div className='note__containerEntryTitle'>
        <h2>Nombre de lista</h2>
        <p>0/5</p>
      </div>
      <div>
        <img src="https://www.cocinavital.mx/wp-content/uploads/2016/11/listasuper.jpg" alt="Imagen" />
      </div>
      <div className='note__containerEntryTitleBotton'>
        <span>Lunes - </span>
        <h4>6 - </h4>
        <h4> Abril.</h4>
      </div>
    </div>
  )
}
