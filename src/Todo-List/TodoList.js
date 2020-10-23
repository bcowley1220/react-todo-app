import React from 'react';
import Task from './Task/Task.js';
import TodoForm from './TodoForm/TodoForm.js';
import DoneList from '../Done-List/Done-List.js';
import './TodoList.css';

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
      {task: 'This is a really really really long string just to see what this would do', complete: false},
    ]

  }

  submitHandler = (event) => {
    event.preventDefault();
    let newTask = event.target[0].value;
    this.setState({
      tasks: [...this.state.tasks, {task: newTask, complete: false}]
    })
    event.target.reset();
  }

  deleteTaskHandler = (taskIndex) => {
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    console.log(tasks);
    this.setState({tasks: tasks});
  }

  render() {

    let taskList = null;
    if (this.state.tasks){
      taskList = (
        <ul>
        {this.state.tasks.map( (tsk, index) => {
          return <Task task={tsk.task} complete={tsk.complete} key={index} delete={() => this.deleteTaskHandler(index)} index={index}/>
        })}
        </ul>
        
      )

    }
    return (
      <main className='mainWrapper'>
        <section className="todoFormWrapper">
          <h1>My Tasks</h1>
          <TodoForm submit={this.submitHandler}/>
        </section>
        <section className="todoListWrapper">
          <div className="todoList">
            <h2>Current Tasks</h2>
            {taskList}
          </div>
        </section>
        <section className='doneListWrapper'>
          <DoneList />
        </section>
      </main>
    )
  }
}

export default todolist;