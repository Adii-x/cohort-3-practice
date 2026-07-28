import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      className="flex items-center gap-3 bg-brutal-bg border-4 border-brutal-black
                    rounded-lg px-4 py-3 mb-3 shadow-[4px_4px_0px_#111111]"
    >
      {/* Custom neobrutalist checkbox */}
      <button
        onClick={() => dispatch(toggleTodo(todo.id))}
        className={`w-6 h-6 shrink-0 border-4 border-brutal-black rounded-md
                    flex items-center justify-center font-bold
                    ${todo.completed ? "bg-brutal-green" : "bg-white"}`}
      >
        {todo.completed && "✓"}
      </button>

      <span
        className={`flex-1 font-body font-medium ${
          todo.completed
            ? "line-through text-brutal-black/40"
            : "text-brutal-black"
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="bg-brutal-pink text-white font-display font-bold text-sm px-3 py-1.5
                   border-4 border-brutal-black rounded-lg
                   shadow-[3px_3px_0px_#111111]
                   hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111111]
                   active:translate-x-[3px] active:translate-y-[3px] active:shadow-none
                   transition-all"
      >
        DELETE
      </button>
    </li>
  );
}

export default TodoItem;
