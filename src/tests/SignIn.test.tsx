import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SignIn } from '../pages/SignIn/SignIn';

describe('SignIn', () => {
  it('renders SignIn page', () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    const passInput = screen.getByLabelText(/password/i);
    expect(passInput).toBeInTheDocument();
  });
});
