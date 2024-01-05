import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';

describe('ErrorPage', () => {
  const originalLocation = window.location;

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: originalLocation,
    });
  });

  it('should render the ErrorPage component', () => {
    render(<ErrorPage />);

    const errorPageMessage = screen.getByText(/OOPS! Something went wrong.../i);
    expect(errorPageMessage).toBeInTheDocument();
  });

  it('should call the reloadPage function when the reload button is clicked', () => {
    render(<ErrorPage />);

    const reloadButton = screen.getByRole('button', { name: /reload page/i });
    expect(reloadButton).toBeInTheDocument();

    fireEvent.click(reloadButton);

    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
