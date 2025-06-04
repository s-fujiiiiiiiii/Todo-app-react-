import TodoItem from './TodoItem';

function TodoList({ todos }) {
    if (todos.length === 0) return <p>やることがありません</p>;

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;