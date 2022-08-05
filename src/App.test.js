import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Blogs/i);
  expect(linkElement).toBeInTheDocument();
});
