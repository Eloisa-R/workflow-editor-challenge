import { render, screen } from '@testing-library/react';
import App from './App';

// Se issue https://github.com/ZeeCoder/use-resize-observer/issues/40
class ResizeObserver {
  observe() {}

  unobserve() {}
}

test('renders the text "Workflow Editor"', () => {
  window.ResizeObserver = ResizeObserver;
  render(<App />);
  const h1Element = screen.getByText('Workflow Editor');
  expect(h1Element).toBeInTheDocument();
});
