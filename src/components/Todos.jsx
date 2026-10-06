import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeTodo, toggleTodo, updateTodo } from "../features/Todo/todoSlice";
import rootReducers from "../app/rootReducers";
import "../App.css";

function Todos() {
  const [editId, setEditId] = useState();
  const [editText, setEditText] = useState("");

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handlerUpdateText = () => {
    dispatch(
      updateTodo({
        id: editId,
        newTodo: editText,
      }),
    );
    setEditId();
    setEditText("");
  };
  return (
    <>
      <div className="todos-container">
        <div className="todos-title">Todos</div>

        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />

                <button className="complete-button" onClick={handlerUpdateText}>
                  Save
                </button>
              </>
            ) : (
              <span
                className={`todo-text ${todo.completed ?
                 "completed" : ""}`}
              >
                {todo.text}
              </span>
            )}

            <div>
              <button
                className="delete-button"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>

              <button
                className="complete-button"
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                completed
              </button>

              <button
                className="update-todo"
                onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todos;
