import React, { useContext } from "react";
import { REMOVE_TODO } from "../context/action.types";
import { TodoContext } from "../context/todoContext";
import { FaCheckDouble } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "reactstrap";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="mb-3">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
            onClick={() =>
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id,
              })
            }
            className="text-danger float-end"
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
