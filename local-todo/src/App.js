import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

import todoImg from "./assets/todos.svg";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localStorage });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Container>
      <h1 className="text-secondary text-center">Todo(Local Storage)</h1>
      <img
        src={todoImg}
        className="d-block mx-auto"
        style={{ height: "25vh" }}
        alt="todos"
      />
      <Row className="mt-3">
        <Col md={6} className="offset-md-3">
          <Todos todos={todos} markComplete={markComplete} />
          <TodoForm addTodos={addTodos} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
