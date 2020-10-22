import React from 'react';
import Task from './Task/Task.js';
import TodoForm from './TodoForm/TodoForm.js';

class todolist extends React.Component {
  constructor(props){
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }
  state = {
    tasks: [
      {task: 'Scoop litter box', complete: false},
      {task: 'Do the dishes', complete: false},
      {task: 'Feed the chickens', complete: false},
      {task: 'Walk the garden', complete: false},
    ]

  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    let newTask = event.target[0].value;
    console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks, {task: newTask, complete: false}]
    })
    event.target.reset();
  }

  render() {

    let taskList = null;
    if (this.state.tasks){
      taskList = (
        <div>
        {this.state.tasks.map( (tsk, index) => {
          return <Task task={tsk.task} complete={tsk.complete} key={index}/>
        })}
        </div>
        
      )

    }
    return (
      <div>
        <section className="todoForm">
          <TodoForm submit={this.submitHandler}/>
        </section>
        <section className="todoListWrapper">
          <ul className="todoList">
            {taskList}
          </ul>
        </section>
      </div>
    )
  }
}

export default todolist;