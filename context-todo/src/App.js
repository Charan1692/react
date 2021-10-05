import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "reactstrap";
import TodoReducer from "./context/reducer";
import { TodoContext } from "./context/todoContext";
import todoImg from "./assets/todos.svg";
import TodoFrom from "./components/TodoForm";
import Todos from "./components/Todos";

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container>
        <h1 className="text-center text-secondary my-2">Todo(Context)</h1>
        <img
          src={todoImg}
          className="img-fluid d-block mx-auto rounded"
          style={{ height: "25vh" }}
          alt="todos"
        />
        <Row className="mt-3">
          <Col md={6} className="offset-md-3">
            <Todos />
            <TodoFrom />
          </Col>
        </Row>
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
