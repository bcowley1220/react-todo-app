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
    ],
    completedTasks: [
      {task: 'first completed task', complete: true}
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

  completeTaskHandler = (taskIndex) => {
    let tasks = [...this.state.tasks];
    let compTaskState = [...this.state.completedTasks];
    console.log(compTaskState);
    let compTask = this.state.tasks[taskIndex];
    compTaskState = [...compTaskState, compTask];
    console.log(compTaskState);
    this.setState({completedTasks: compTaskState})
    console.log(this.state.completedTasks);
    tasks.splice(taskIndex, 1);
    this.setState({tasks: tasks});
  }

  undoHandler =(taskIndex) => {
    let undoTasks = [...this.state.completedTasks];
    let tasks = [...this.state.tasks];
    let undoTask = undoTasks[taskIndex];

    tasks = [...tasks, undoTask];
    this.setState({tasks: tasks});

    undoTasks.splice(taskIndex, 1);
    this.setState({completedTasks: undoTasks})
  }

  deleteFinishedTaskHandler = (taskIndex) => {
    let finishedTasks = [...this.state.completedTasks];
    finishedTasks.splice(taskIndex, 1);
    this.setState({completedTasks: finishedTasks});
  }


  render() {

    let taskList = null;
    let completedTaskList = null;
    if (this.state.tasks){
      taskList = (
        <ul>
        {this.state.tasks.map( (tsk, index) => {
          return <Task task={tsk.task} complete={tsk.complete} key={index} delete={() => this.completeTaskHandler(index)} index={index}/>
        })}
        </ul>
        
      )

    }
    if (this.state.completedTasks){
      completedTaskList = (
        <ul>
        {this.state.completedTasks.map( (tsk, index) => {
          return <DoneList task={tsk.task} complete={tsk.complete} key={index} undo={() => this.undoHandler(index)} delete={() => this.deleteFinishedTaskHandler(index)} index={index}/>
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
        <div className="todoList">
        <h2>Finished Tasks</h2>
          {completedTaskList}
        </div>
        </section>
      </main>
    )
  }
}

export default todolist;