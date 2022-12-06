import React, { useState } from 'react'

function AddForm({dispatch}) {
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: "ADD", payload: title})
        setTitle("")
    }
  return (
    <div className='todo_form_container'>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Add a todo'
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}
            />
            <button className='submit_btn' type='submit'>Add todo</button>
        </form>
    </div>
  )
}

export default AddForm