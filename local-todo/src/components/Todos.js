import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mb-3">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
            className="text-danger float-end"
            onClick={() => markComplete(todo.id)}
            style={{ cursor: "pointer" }}
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
