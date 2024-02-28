import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../pages/ErrorBoundary/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render the child component when there are no errors', () => {
    render(
      <ErrorBoundary>
        <div>Test Child</div>
      </ErrorBoundary>
    );

    const testMessage = screen.getByText(/Test Child/i);
    expect(testMessage).toBeInTheDocument();
  });

  it('renders ErrorPage when there is an error', () => {
    const TestThrowError = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <TestThrowError />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByText(/OOPS! Something went wrong.../i);
    expect(errorMessage).toBeInTheDocument();
  });
});
