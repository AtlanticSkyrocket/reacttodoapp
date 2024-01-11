import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

it('renders', () => {
  render(<TodoList />);
});

it('snapshot matches', () => {
  const { asFragment } = render(
    <TodoList />
  );
  expect(asFragment).toMatchSnapshot();
});

it('adds a new todo when the form is submitted', () => {
  render(<TodoList />);

  const input = screen.getByLabelText('Todo:');
  const button = screen.getByText('Add');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

it('remove a todo when the remove button is click', () => {
  render(<TodoList />);

  const input = screen.getByLabelText('Todo:');
  const button = screen.getByText('Add');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  const todoRemoveBtn = screen.getByText('X');
  fireEvent.click(todoRemoveBtn);


  expect(screen.queryByText('New Todo')).toBeNull();
});