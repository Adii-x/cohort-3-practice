import TodoForm from "./features/todos/TodoForm";
import TodoList from "./features/todos/TodoList";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-lg">
        {/* Signature sticky-note title */}
        <div className="inline-block bg-brutal-yellow border-4 border-brutal-black rounded-xl px-6 py-3 -rotate-2 shadow-[6px_6px_0px_#111111] mb-8">
          <h1 className="font-display text-3xl font-bold text-brutal-black">
            TASK LIST
          </h1>
        </div>

        <div className="bg-white border-4 border-brutal-black rounded-2xl p-6 shadow-[8px_8px_0px_#111111]">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;