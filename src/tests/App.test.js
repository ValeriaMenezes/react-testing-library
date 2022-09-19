import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa componente App', () => {
  it('Testa se possui um conjunto de links', () => {
    renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();

    const linkFavoritePokemons = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkFavoritePokemons).toBeInTheDocument();
  });
  it('Teste se a página é redirecionada ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);

    const { pathname } = history.location;
    expect(pathname).toBe('/');

    const homePage = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(homePage).toBeInTheDocument();
  });
  it('Teste se a página é redirecionada ao clicar no link About', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutPage = screen.findByRole('heading', { name: /encountered pokémons/i });
    expect(aboutPage).toBeDefined();
  });
  it('Teste se a página é redirecionada ao clicar no link Favorite Pokémons', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavoritePokemons = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkFavoritePokemons).toBeInTheDocument();
    userEvent.click(linkFavoritePokemons);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');

    const favoritePage = screen.findByRole('heading', { name: /encountered pokémons/i });
    expect(favoritePage).toBeDefined();
  });
  it('Teste é renderizado Not Found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/invalid-url');
    });

    const notFound = screen.getByRole('heading', { name: /page requested not found/i });
    expect(notFound).toBeInTheDocument();
  });
});
