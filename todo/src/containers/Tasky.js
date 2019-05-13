import React from "react";
import AddTask from "../components/addTask";
import FilterScreen from "../components/filterTask";
import ListTask from "../components/listTask";
import { connect } from 'react-redux';
import { createTask } from '../actions/taskAction'
class Tasky extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      taskPerPage: 5
    };
  }
  saveTask = (newTask) => {
    this.props.createTask(newTask);
  };
  deleteTask = id => {};
  editTask = editedTask => {};
  onPriorityFilterChange = value => {};
  onSearchTextChange = text => {};
  render() {
    const { currentPage, taskPerPage } = this.state;
    let taskys = this.props.tasks;
    const indexOfLastTodo = currentPage * taskPerPage;
    const indexOfFirstTodo = indexOfLastTodo - taskPerPage;
    const currentTodos = taskys.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(taskys.length / taskPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="row content">
        <div className="col-sm-2 sidenav">
          <FilterScreen
            onPriorityFilterChange={this.onPriorityFilterChange}
            onSearchTextChange={this.onSearchTextChange}
          />
        </div>
        <div className={"col-sm-8 text-left"}>
          <AddTask saveTask={this.saveTask} />
          <ListTask
            list={currentTodos}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
          />
          <ul className='pagination'>
          { pageNumbers.map((i,index)=>{
            return <li key={index} onClick={()=>{this.setState({currentPage:i})}}>
            <p>{i}</p>
            </li>
          })}
          </ul>
        </div>
      </div>
    );
  }
}
const mSTP = (state) => ({
  tasks:state.task.task,
})
const mATP = ({
  createTask
});
export default connect(mSTP, mATP)(Tasky);
