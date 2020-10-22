import React from 'react';

const task = (props) => {
  let complete = props.complete;
  let completeText = null;
  if(!complete) {
    completeText = 'false';
  }
  return(
    <div>
      <li className="task">
        <p>{props.task}</p>
        <span><img src="#" alt=""/>{completeText}</span>
      </li>
    </div>
  )
}

export default task;