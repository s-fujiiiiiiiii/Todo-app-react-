import { useState, useEffect } from 'react';

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const saved = localStorage.getItem('my-todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('my-todos', JSON.stringify(todos));
  }, [todos]);
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };
  
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  };
}