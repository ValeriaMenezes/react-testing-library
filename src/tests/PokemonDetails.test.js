import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import { act } from 'react-dom/test-utils';

describe('Testa o componente PokemonDetails', () => {
  it('É exibido na tela um h2 com o texto <name> Details', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const heading = screen.getByRole('heading', { name: /pikachu details/i });
    expect(heading).toBeDefined();
  });
  it('É exibido na tela um h2 com o texto Summary', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const summary = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(summary).toBeDefined();

    const parteUm = 'This intelligent Pokémon roasts hard berries with ';
    const parteDois = 'electricity to make them tender enough to eat.';
    const paragrafo = screen.getByText(`${parteUm}${parteDois}`);
    expect(paragrafo).toBeDefined();
  });
  it('É exibido na tela um h2 com o texto Game Locations of <name>', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const gameLoc = screen.getByRole('heading', { name: /game locations of pikachu/i });
    expect(gameLoc).toBeDefined();
  });
  it('São exibidas na tela imagens de localização com o src correto', () => {
    const { history } = renderWithRouter(<App />);

    // const moreDetails = screen.getByRole('link', { name: /more details/i });
    // userEvent.click(moreDetails);

    act(() => {
      history.push('/pokemons/65');
    });

    const image = screen.getByRole('img', { name: /alakazam location/i });
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/4/44/Unova_Accumula_Town_Map.png');

    // const imageDois = screen.getByRole('img');
    // expect(imageDois).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  });
  it('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const label = screen.getByLabelText(/pokémon favoritado?/i);
    expect(label).toBeDefined();
  });
});
