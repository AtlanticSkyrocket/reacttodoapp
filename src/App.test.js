import { render, screen } from '@testing-library/react';
import App from './App';

it('renders', () => {
  render(<App />);
});

it('snapshot matches', () => {
  const { asFragment } = render(
    <App />
  );
  expect(asFragment).toMatchSnapshot();
});

it('should render an empty todoList and NewTodoForm', () => {
    render(<App />);

    expect(screen.getByLabelText('Todo:')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });
