import React, { useEffect, useReducer, useState } from 'react'
import { ListingReducer } from '../../reducers/ListingReducer'
import { useForm } from '../../hooks/useForm'


const init = () => {
  return JSON.parse(localStorage.getItem('listing')) || []
}

export const AddItems = () => {
  const items = ["Azucar", "Leche", "Arroz", "Huevos", "Aceite", "Sal"]
  const [listing, dispatch] = useReducer(ListingReducer, [], init)
  const [{ name }, handleInputChange, reset] = useForm({
    name: '',
  })
  useEffect(() => {
    localStorage.setItem('listing', JSON.stringify(listing))
  })
  const handleSumit = (e) => {
    e.preventDefault()
    if (name.trim().length <= 1) {
      return
    }
    const newItem = {
      id: new Date().getTime(),
      name,
      done: false
    }
    const action = {
      type: 'add',
      payload: newItem
    }
    dispatch(action)
    reset()
  }

  const handleDelete = (itemId) => {
    const action = {
      type: 'delete',
      payload: itemId
    }
    dispatch(action)
  }

  const handleToggle = (itemId) => {
    const action = {
      type: 'toggle',
      payload: itemId
    }
    dispatch(action)
  }

  return (<div className='notes_addItem'>
    <form onSubmit={handleSumit}>
      <input
        type="text"
        name='name'
        placeholder='Agregar Item'
        onChange={handleInputChange}
        value={name}
        className='auth__input note__input-addItem'
        autoComplete='off'
      />
      <button
        className='btn-primary btn-delete btn-add'
      >Done
      </button>
      <div className='notes__addItem-buttons'>
        <button
          className='btn-primary btn-delete btn-blue btn-blue-2'
        >Reciente</button>
        <button
          className='btn-primary btn-delete btn-blue btn-blue-1'
        >Popular</button>
      </div>
      <div>
        <ul className='note__listsItem'>
          {listing.map((value, id) => (
            <li key={value.id}>
              <button
                onClick={() => handleDelete(value.id)}
              >
                <i className="fa-solid fa-minus btn-addItem "></i>
              </button>
              {value.name}</li>
          ))}
        </ul>
      </div>
    </form>
  </div>)
}
