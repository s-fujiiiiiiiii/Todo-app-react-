import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoPage from './pages/TodoPage';
import AboutPage from './pages/AboutPage';
import useTodos from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  
  return (
    <Router>
      <div style={{ paddingBottom: '60px' }}>
        <Header />
        <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <Routes>
            <Route
              path="/"
              element={
                <TodoPage
                  todos={todos}
                  addTodo={addTodo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;