import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TodoPage({ todos, addTodo, toggleTodo, deleteTodo }) {
    return (
        <div>
            <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
    )
}

export default TodoPage;