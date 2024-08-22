import React from 'react';

interface TodoItemProps {
  todo: string;
  index: number;
  removeTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, removeTodo }) => {
  return (
    <li>
      {todo} <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
