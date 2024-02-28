import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Viewer } from '../pages/main/components/Viewer/Viewer';
import { setupStore } from './mockStore';

const store = setupStore();

describe('Viewer', () => {
  it('renders viewer', () => {
    render(
      <Provider store={store}>
        <Viewer />
      </Provider>
    );
    const viewer = screen.getByTestId('viewer');
    expect(viewer).toBeInTheDocument();
  });
});
