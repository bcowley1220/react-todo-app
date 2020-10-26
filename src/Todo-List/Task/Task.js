import React from 'react';
import './Task.css';

const task = (props) => {
  return(
      <div className="task">
        <p>{props.task}</p>
        <span onClick={props.delete}>
          {/* <img src="../../../checkmark.svg" alt="checkmark"/> */}
          <svg className='checkMarkSVG' height="1em" viewBox="0 -32 512.016 512" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m389.332031 448.007812h-330.664062c-32.363281 0-58.667969-26.304687-58.667969-58.667968v-330.664063c0-32.363281 26.304688-58.6679685 58.667969-58.6679685h266.664062c8.832031 0 16 7.1679685 16 15.9999995 0 8.832032-7.167969 16-16 16h-266.664062c-14.699219 0-26.667969 11.96875-26.667969 26.667969v330.664063c0 14.699218 11.96875 26.667968 26.667969 26.667968h330.664062c14.699219 0 26.667969-11.96875 26.667969-26.667968v-181.332032c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v181.332032c0 32.363281-26.304688 58.667968-58.667969 58.667968zm0 0"/><path d="m261.332031 266.675781c-4.09375 0-8.191406-1.558593-11.304687-4.695312l-96-96c-6.25-6.25-6.25-16.382813 0-22.632813s16.382812-6.25 22.632812 0l84.695313 84.691406 223.335937-223.335937c6.253906-6.253906 16.386719-6.253906 22.636719 0 6.25 6.25 6.25 16.382813 0 22.632813l-234.667969 234.667968c-3.136718 3.113282-7.230468 4.671875-11.328125 4.671875zm0 0"/></svg>
        </span>
      </div>
  )
}

export default task;