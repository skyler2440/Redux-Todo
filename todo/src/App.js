import React from 'react';
import './assets/App.css';
import TodoList from "./containers/TodoList";
import AddTodo from "./containers/AddTodo";
function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
