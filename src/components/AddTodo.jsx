import { Button, Input} from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";

 export function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));

    setInput('');
  };

  return (
    <>
      <style>
        {`
          .todo-container {
            width: 800px;
            margin: 50px auto;
            padding: 25px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          }

          .todo-form {
            display: flex;
            gap: 10px;
          }

          .todo-input {
            flex: 1;
          }

          .todo-button {
            height: 32px;
          }
        `}
      </style>

      <div className="todo-container">
        <form onSubmit={addTodoHandler} className="todo-form">
          <Input
            className="todo-input"
            placeholder="Enter Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Button
            className="todo-button"
            type="primary"
            htmlType="submit"
          >
            Add Todo
          </Button>
        </form>
      </div>
    </>
  );
}

export default AddTodo;