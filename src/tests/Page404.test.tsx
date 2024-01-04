import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Page404 } from '../pages/Page404/Page404';

describe('Page404', () => {
  it('should render the Page404 component', () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );

    const page404Message = screen.getByText(/page not found/i);
    expect(page404Message).toBeInTheDocument();
  });
});
