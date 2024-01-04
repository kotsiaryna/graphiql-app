import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { InputApi } from '../pages/main/components/InputEndpoint/InputEndpoint';
import { setupStore } from '../redux/store';

const store = setupStore();

describe('Input endpoint', () => {
  it('renders input field', () => {
    render(
      <Provider store={store}>
        <InputApi />
      </Provider>
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('handles input changing', () => {
    render(
      <Provider store={store}>
        <InputApi />
      </Provider>
    );
    const input: HTMLInputElement = screen.getByRole('textbox');
    const text = 'test';
    fireEvent.change(input, { target: { value: text } });
    expect(input.value).toBe(text);
  });

  it('renders clickable button', () => {
    render(
      <Provider store={store}>
        <InputApi />
      </Provider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
