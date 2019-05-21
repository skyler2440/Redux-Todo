import React from 'react';
// import logo from './logo.svg';
import './style/index.less';
import Title from './components/title'
import TodoList from './components/todo'
function App() {
  return (
    <div className="App">
      <Title />
      <TodoList />
    </div>
  );
}

export default App;
