import React from "react";
import { connect } from "react-redux";
import { newTodo } from "../actions";
// import from "../reducers";
import { ADD_ITEM } from '../actions/strings'

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
    this.props.newTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  };

  //   removeTodo = (e, id) => {
  //     e.preventDefault();
  //     this.props.removeTodo(id);
  //   };

//   editTodo = (e, id) => {
//     e.preventDefault();
//     this.props.editTodo(id);
//   };
  render() {
    // console.log(this.props.todo);
    return (
      <>
    
    <div className="todo-list">
          {this.props.todos.map(todos => {
              return (<h4 key={todos.id}>
                  {todos.todo}
       
              </h4>);
          })}
        </div>
        <form onSubmit={ADD_ITEM}>
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
    console.log(state)
  return {
    todos: state.todos
  };
};
const mActionToProps = {
  newTodo
//   editTodo
};
export default connect(
  mSTP,
  mActionToProps
)(TodoList);
