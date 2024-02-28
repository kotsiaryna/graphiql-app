import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './mockStore';
import { Welcome } from '../pages/Welcome/Welcome';

const store = setupStore();

describe('Welcome', () => {
  it('renders welcome page', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Welcome />
        </Provider>
      </BrowserRouter>
    );
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBe(4);
  });
});
