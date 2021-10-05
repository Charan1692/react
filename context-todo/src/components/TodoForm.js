import React, { useContext, useState } from "react";
import { ADD_TODO } from "../context/action.types";
import { TodoContext } from "../context/todoContext";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { v4 } from "uuid";

const TodoFrom = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Please enter your todos...");
    }

    const todo = {
      id: v4(),
      todoString,
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
            placeholder="Your Next Todos..."
          />
          <InputGroupAddon addonType="prepend">
            <Button color="success rounded-0">Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoFrom;
