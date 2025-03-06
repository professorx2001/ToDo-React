import useTodo from "../context/todoContext";
import { useState } from "react"; 



function TodoForm() {
  const [individualTodo, setIndividualTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!individualTodo) return;
    addTodo({
      title: individualTodo,
      completed: false,
    });
    setIndividualTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Whats on your mind today..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={individualTodo}
        onChange={(e) => setIndividualTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
