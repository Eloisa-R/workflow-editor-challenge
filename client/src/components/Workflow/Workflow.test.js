import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Workflow from './Workflow';

jest.mock('axios');

// Se issue https://github.com/ZeeCoder/use-resize-observer/issues/40
class ResizeObserver {
  observe() {}

  unobserve() {}
}

describe('Workflow', () => {
  beforeAll(() => {
    axios.post = jest.fn();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('it should call axios.post if the button is clicked', async () => {
    window.ResizeObserver = ResizeObserver;
    render(<Workflow />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    await act(() => Promise.resolve());
    expect(axios.post).toHaveBeenCalled();
  });
});
