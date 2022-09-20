import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa componente Pokedex', () => {
  it('Teste se a página contém um heading com o texto esperado', () => {
    renderWithRouter(<App />);

    const heading = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(heading).toBeDefined();
  });
  it('Testa comportamento do botão próximo Pokémon', () => {
    renderWithRouter(<App />);

    const btnProximoPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(btnProximoPokemon);
    expect(btnProximoPokemon);
  });
  it('Testa comportamento dos botões de filtragem', () => {
    renderWithRouter(<App />);

    const btnFiltros = screen.getAllByTestId('pokemon-type-button');
    expect(btnFiltros).toBeDefined();
    const array = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    btnFiltros.forEach((item, index) => {
      expect(item.innerHTML).toBe(array[index]);
    });
  });
  it('Testa o comportamento botão All', () => {
    renderWithRouter(<App />);

    const btnAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(btnAll);
    expect(btnAll).toBeDefined();
  });
});
