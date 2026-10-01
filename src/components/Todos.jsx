import { Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {removeTodo,toggleTodo,updateTodo,} from "../features/Todo/todoSlice";

function Todos() {
  const [editId, setEditId] = useState();
  const [editText, setEditText] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handlerUpdateText = () => {
    
    dispatch(
      updateTodo({
        id: editId,
        newTodo: editText,
      })
    );
    console.log("todo", editText);
    setEditId();
    setEditText("");
    
  };

  return (
    <>
      <style>
        {`
          .todos-container {
            width: 800px;
            margin: 20px auto;
            padding: 25px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          }

          .todos-title {
            text-align: center;
            margin-bottom: 20px;
            font-size: 34px;
            font-weight: bold;
          }

          .todo-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 15px;
            margin-bottom: 10px;
            background-color: #f5f5f5;
            border-radius: 6px;
            list-style: none;
            font-size: 25px;
            font-weight: bold;
            font-family:math;
            text-transform:upperCase;
          }

          .todo-text {
            font-size: 16px;
            
          }

          .delete-button {
            margin-left: 15px;
          }

          .complete-button {
            margin-left: 15px;
            color: green;
            border: 1px solid;
            font-size: 15px;
          }

          .update-todo {
            margin-left: 15px;
            color: blue;
            border: 1px solid;
            font-size: 15px;
          }
        `}
      </style>

      <div className="todos-container">
        <div className="todos-title">Todos</div>

        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>

            {editId === todo.id ? (
              <>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />

                <Button className="complete-button" onClick={handlerUpdateText}>
                  Save
                </Button>
              </>
            ) : (
              <span
                style={{
                  textDecoration: todo.completed
                    ? "line-through"
                    : "none",
                }}
              >
                {todo.text}
              </span>
            )}

            <div style={{ display: "flex" }}>
              <Button
                className="delete-button"
                danger
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </Button>

              <Button
                className="complete-button"
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                completed
              </Button>

              <Button
                className="update-todo"
                onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
              >
                Update
              </Button>
            </div>

          </li>
        ))}
      </div>
    </>
  );
}

export default Todos;