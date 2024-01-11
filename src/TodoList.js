import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const createTodo = todo => {
    const newTodo = {...todo, id: uuid()}
    setTodoList([...todoList, newTodo]);
  }

  const removeTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <>
      <NewTodoForm createTodo={createTodo}/>
      {todoList.map(({todo, id}) => <Todo key={id} id={id} todo={todo} removeTodo={removeTodo} />)}
    </>
  )
}

export default TodoList;