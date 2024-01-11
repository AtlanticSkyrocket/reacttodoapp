import React from 'react';


function Todo({id, removeTodo, todo}) {
  const handleRemove = evt => {
    const { id } = evt.target.parentElement;
    removeTodo(id);
  }
  return (
  <div className="Todo-container" id={id}>
    <p>{todo}</p>
    <button className="Remove-btn" onClick={handleRemove}>X</button>
  </div>
  )
}

export default Todo;