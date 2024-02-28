import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SignUp } from '../pages/SignUp/SignUp';

describe('SignUp', () => {
  it('renders SignUp page', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    const passInput = screen.getByLabelText(/password/i);
    expect(passInput).toBeInTheDocument();
  });
});
