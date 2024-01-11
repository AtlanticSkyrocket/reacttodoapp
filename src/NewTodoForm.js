import React, { useState } from 'react';

function NewTodoForm({createTodo}) {
  const INITIAL_STATE = "";
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    createTodo(formData);
    setFormData(INITIAL_STATE);
  }

  const handleChange = evt => {
    const { name, value} = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }
  return (
    <form className="Todo-form" onSubmit={handleSubmit}> 
      <label htmlFor='todo'>Todo:</label>
      <input type="todo" id="todo" name="todo" onChange={handleChange}></input>
      <button>Add</button>
    </form>
  )
}

export default NewTodoForm;