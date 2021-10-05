import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import todoImg from "./assets/todos.svg";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <h1 className="text-center text-secondary my-2">Todo(Redux)</h1>
        <img
          src={todoImg}
          className="img-fluid d-block mx-auto rounded"
          style={{ height: "25vh" }}
          alt="todos"
        />
        <Row className="mt-3">
          <Col md={6} className="offset-md-3">
            <Todo />
            <TodoForm />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
};

export default App;
