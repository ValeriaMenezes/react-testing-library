import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente About', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutPage = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(aboutPage).toBeDefined();

    const parteUm = 'This application simulates a Pokédex, ';
    const parteDois = 'a digital encyclopedia containing all Pokémons';
    const paragrafoUm = screen.findByText(`${parteUm} ${parteDois}`);
    expect(paragrafoUm).toBeDefined();

    const paragrafoDois = screen
      .findByText(
        'One can filter Pokémons by type, and see more details for each one of them',
      );
    expect(paragrafoDois).toBeDefined();
  });

  it('Teste se a página contém a seguinte imagem esperada', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    // const imageURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    // expect(imageURL).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
