import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';

describe('ErrorPage', () => {
  it('should render the ErrorPage component', () => {
    render(<ErrorPage />);

    const errorPageMessage = screen.getByText(/OOPS! Something went wrong.../i);
    expect(errorPageMessage).toBeInTheDocument();
  });
});
