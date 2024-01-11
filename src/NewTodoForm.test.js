import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewTodoForm from './NewTodoForm';

it('renders', () => {
  render(<NewTodoForm />);
});

it('snapshot matches', () => {
  const { asFragment } = render(
    <NewTodoForm />
  );
  expect(asFragment).toMatchSnapshot();
});

it('submit form calls createTodo', ()=> {
  const createTodoMock = jest.fn()
  render(<NewTodoForm createTodo={createTodoMock}/>);

  const input = screen.getByLabelText('Todo:');
  const button = screen.getByText('Add');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(createTodoMock).toBeCalledWith({ todo: 'New Todo' });

});