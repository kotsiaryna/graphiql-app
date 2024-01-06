import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ErrorPopUp } from '../pages/main/components/ErrorPopUp/ErrorPopUp';
import { init, setupStore } from './mockStore';

describe('ErrorPopup', () => {
  const state: typeof init = {
    ...init,
    queryResponse: {
      response: {},
      errorMessage: 'TestError',
    },
  };
  const store = setupStore(state);

  it('renders error popup', () => {
    render(
      <Provider store={store}>
        <ErrorPopUp />
      </Provider>
    );
    const errorMessage = screen.getByText(/TestError/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
