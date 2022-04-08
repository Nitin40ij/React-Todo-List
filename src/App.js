import React from "react";
import "./App.css";
import TodoList from "./components/todoList";
import "bootswatch/dist/materia/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/nav";
function App() {
  return (
    <Router>
      <>
        <Nav />
        <div className="container">
          <TodoList />
        </div>
      </>
    </Router>
  );
}

export default App;
