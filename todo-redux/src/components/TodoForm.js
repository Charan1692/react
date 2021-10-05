import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { v4 } from "uuid";

import { connect } from "react-redux";
import { addTodo } from "../action/todo";

const TodoForm = ({ addTodo }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Please add your next todo...");
    }

    const todo = {
      id: v4(),
      todoString,
    };

    addTodo(todo);

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
            placeholder="Add your next todo..."
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
