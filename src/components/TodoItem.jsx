import { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ marginLeft: '8px', flex: 1 }}
          />
          <button onClick={handleSave} style={{ marginLeft: '5px' }}>保存</button>
          <button onClick={() => setIsEditing(false)}>キャンセル</button>
        </>
      ) : (
        <>
          <span
            style={{
              marginLeft: '8px',
              flex: 1,
              textDecoration: todo.done ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)} style={{ marginLeft: '5px' }}>編集</button>
          <button onClick={() => onDelete(todo.id)}>削除</button>

        </>
      )}
    </li>
  );
}

export default TodoItem;