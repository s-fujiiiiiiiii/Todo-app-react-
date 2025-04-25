import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    setTodos([...todos, { id: Date.now(), text }]);
    setText('');
  };

  return (
    <div>
      <h1>TODO</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;