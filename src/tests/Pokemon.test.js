import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o componente Pokemon', () => {
  it('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);
    const imageSrc = screen.getByRole('img');
    expect(imageSrc).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  it('A imagem do pokemon possui o alt correto', () => {
    renderWithRouter(<App />);

    const image = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(image).toHaveAttribute('alt', 'Pikachu sprite');
  });
  it('A imagem do favoritado possui src correto', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    // act(() => {
    //   history.push('/pokemons/25');
    // });

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);

    const starSrc = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(starSrc).toHaveAttribute('src', '/star-icon.svg');
    const starAlt = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(starAlt).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
  it('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);

    const typeId = screen.getByTestId('pokemon-type');
    console.log(typeId.innerHTML);
    expect(typeId.innerHTML).toBe('Electric');
  });
  it('É exibido o link more details', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toHaveAttribute('href', '/pokemons/25');
  });
});
