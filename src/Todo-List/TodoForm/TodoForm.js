import React from 'react';
import './TodoForm.css';

const todoForm = (props) => {
  return(
    <div className='formWrapper'>
      <form onSubmit={props.submit} className='todoForm'>
        <div className='inputWrapper'>
          <label htmlFor="newTodo"></label>
          <input type="text" name='newTodo' placeholder='Ex. Buy Milk'/>
        </div>
        <button type='button'>Add!</button>
      </form>
    </div>

  )
}

export default todoForm;