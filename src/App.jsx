import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  return (
    <div>
      <h1>TODO</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;