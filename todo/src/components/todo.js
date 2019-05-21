import React from "react";
import { connect } from "react-redux";
import { newTodo, editTodo } from "../actions";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  hc = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addNewTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  };

  //   removeTodo = (e, id) => {
  //     e.preventDefault();
  //     this.props.removeTodo(id);
  //   };

  editTodo = (e, id) => {
    e.preventDefault();
    this.props.editTodo(id);
  };
  render() {
    console.log(this.props);
    return (
      <>
        <div className="todo-edit">
          {this.props.todo.map(todo => (
            <h4 onClick={e => this.editTodo(e, todo.id)} key={todo.id}>
              {todo.name}
              {todo.toggle && <i className="far fa-edit" />}
            </h4>
            //   }
            //           ,</div>
            //                 <div className='todo-remove'>
            //                 {this.props.todo.map(todo =>(
            //                  <h4 onClick={e => this.removeTodo(e, todo.id)} key={todo.id}>
            //                      {todo.name}
            //               {todo.delete && <i className='far fa-trash-alt' />}
            //               </h4>
          ))}
        </div>
        <form onSubmit={this.addNewTodo}>
          <input
            type="text"
            placeholder="Add Todo"
            onChange={this.hc}
            value={this.state.addNewTodo}
              />
          <input type="submit" onClick={this.addNewTodo} value="Submit New Todo" />
        </form>
      </>
    );
  }
}
const mSTP = state => {
  return {
    todos: state.todos
  };
};
const mActionToProps = {
  newTodo,
  editTodo
};
export default connect(
  mSTP,
  mActionToProps
)(TodoList);
