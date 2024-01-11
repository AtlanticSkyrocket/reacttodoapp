import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from './Todo';


const mockRemoveTodo = jest.fn();

describe('Todo Component', () => {
  it('renders todo correctly', () => {
    render(<Todo id={1} removeTodo={mockRemoveTodo} todo="Test Todo" />);
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('snapshot matches', () => {
    const { asFragment } = render(
      <Todo id={1} removeTodo={mockRemoveTodo} todo="Test Todo" />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('calls removeTodo when the remove button is clicked', () => {
    render(<Todo id={1} removeTodo={mockRemoveTodo} todo="Test Todo" />);
    
    fireEvent.click(screen.getByText('X'));
    
    expect(mockRemoveTodo).toHaveBeenCalledWith('1');
  });
});