import { userState } from 'react';

function TodoForm({ onAdd }) {
    const [text, setText] = userState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={e => setText(e.target.value)}
            placeholder='やることを入力'
            />
            <button type='submit'></button>
        </form>
    );
}

export default TodoForm;