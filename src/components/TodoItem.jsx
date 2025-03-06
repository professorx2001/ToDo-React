import useTodo from "../context/todoContext";
import { useState } from "react";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.title);
  const { deleteTodo, toggleTodo, updateTodo } = useTodo();

  const editTodo = () => {
    if (!todoMsg) return;

    updateTodo(todo.id, {
      ...todo,
      title: todoMsg,
    });
    setIsTodoEditable(false);
  };
  const toggle = () => {
    // if (todo.completed) return;
    toggleTodo(todo.id);
  };

  return (
    <div
      className={`flex border border-gray-300 rounded-lg px-4 py-2 gap-x-3 shadow-md duration-300 text-black w-full ${
        todo.completed ? "bg-green-200" : "bg-purple-200"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggle}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-gray-300 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-300 justify-center items-center bg-gray-100 hover:bg-gray-200 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-300 justify-center items-center bg-gray-100 hover:bg-gray-200 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
