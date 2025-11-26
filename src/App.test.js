import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page by default', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Welcome Back!/i);
  expect(linkElement).toBeInTheDocument();
});
