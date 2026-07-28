import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs doing?"
        className="flex-1 border-4 border-brutal-black rounded-lg px-4 py-2
                   font-body font-medium placeholder:text-brutal-black/40
                   focus:outline-none focus:shadow-[4px_4px_0px_#111111]
                   transition-shadow"
      />
      <button
        type="submit"
        className="bg-brutal-blue text-white font-display font-bold px-5 py-2
                   border-4 border-brutal-black rounded-lg
                   shadow-[4px_4px_0px_#111111]
                   hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#111111]
                   active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
                   transition-all"
      >
        ADD
      </button>
    </form>
  );
}

export default TodoForm;
