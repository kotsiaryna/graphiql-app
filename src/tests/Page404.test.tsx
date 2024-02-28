import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { Page404 } from '../pages/Page404/Page404';
import { Welcome } from '../pages/Welcome/Welcome';
import { Path } from '../router/types';

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

  it('should go to the Welcome page', async () => {
    render(
      <MemoryRouter initialEntries={[`/${Path.Page404}`]}>
        <Routes>
          <Route path={Path.Page404} element={<Page404 />} />
          <Route path={Path.Welcome} element={<Welcome />} />
        </Routes>
      </MemoryRouter>
    );

    const goToWelcomePageButton = screen.getByRole('button', {
      name: /go to welcome page/i,
    });

    expect(goToWelcomePageButton).toBeInTheDocument();

    fireEvent.click(goToWelcomePageButton);

    const welcomeMessage = screen.getByText(/We greet you!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
