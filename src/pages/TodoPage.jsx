import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function TodoPage({ todos, addTodo, toggleTodo, deleteTodo }) {
	const [filter, setFilter] = useState('all');
	
	const filteredTodos = todos.filter(todo => {
	  if (filter === 'done') return todo.done;
	  if (filter === 'notYet') return !todo.done;
	  return true;
	});

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      
      {/* フィルターボタン */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setFilter('all')}>すべて</button>
        <button onClick={() => setFilter('notYet')}>未完了</button>
        <button onClick={() => setFilter('done')}>完了</button>
      </div>
            
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default TodoPage;