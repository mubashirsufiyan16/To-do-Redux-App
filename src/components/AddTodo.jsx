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
      <div className="todo-container">
        <form onSubmit={addTodoHandler} className="todo-form">
          <input
            className="todo-input"
            placeholder="Enter Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            className="todo-button"
          >
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTodo;