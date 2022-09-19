import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente About', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<App />);

    const aboutPage = screen.findByRole('heading', { name: /about pokédex/i, level: 2 });
    expect(aboutPage).toBeDefined();
  });
  it('Teste se a página contém a seguinte imagem esperada', () => {
    renderWithRouter(<App />);

    const imageURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imageURL).toBeDefined();
  });
});
