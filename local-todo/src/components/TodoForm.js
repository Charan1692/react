import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Please add your next todos...");
    }

    const todo = {
      id: v4(),
      todoString,
    };

    addTodos(todo);

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
            placeholder="Enter your next todo..."
          />
          <InputGroupAddon addonType="prepend">
            <Button color="success" className="rounded-0">
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
