import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import App from './App';

vi.mock('./FilterOptions', () => ({
  default: () => null,
}));

test('renders a loading state while funds are loading', () => {
  render(<App />);
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
