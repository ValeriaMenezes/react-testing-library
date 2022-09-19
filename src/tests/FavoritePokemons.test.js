import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Teste o componente FavoritePokemons ', () => {
  it('Teste se é exibida na tela a mensagem esperada', () => {
    renderWithRouter(<FavoritePokemons />);

    const message = screen.getByText(/no favorite pokemon found/i);
    expect(message).toBeDefined();
  });
});
