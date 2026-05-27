import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o hero do portfólio', () => {
  render(<App />);
  expect(screen.getByText(/bem-vindo ao meu espaço digital/i)).toBeInTheDocument();
});
