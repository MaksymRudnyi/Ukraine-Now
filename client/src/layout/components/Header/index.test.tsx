import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '.';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders the component', () => {
    const { container } = render(<Header />, { wrapper: BrowserRouter });

    expect(container.getElementsByClassName('header').length).toBe(1);
  });
});
