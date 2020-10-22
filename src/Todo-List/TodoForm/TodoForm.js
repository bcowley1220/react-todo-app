import React from 'react';

const todoForm = (props) => {


  return(
    <div>
      <form onSubmit={props.submit}>
        <div>
          <label htmlFor="newTodo">New Task:</label>
          <input type="text" name='newTodo' placeholder='Ex. Buy Milk'/>
        </div>
        <button type='submit'>Add!</button>
      </form>
    </div>

  )
}

export default todoForm;