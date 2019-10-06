import React from 'react';
import ToDoBoard from "./components/TodoBoard/ToDoBoard";
import "./assets/styles/base.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ToDoBoard />
    </div>
  );
}

export default App;
