import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 border-4 border-dashed border-brutal-black/30 rounded-lg">
        <p className="font-display font-bold text-brutal-black/50">
          NOTHING HERE YET...
        </p>
        <p className="font-body text-sm text-brutal-black/40 mt-1">
          Add your first task above
        </p>
      </div>
    );
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;