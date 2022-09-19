import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { NotFound } from '../pages';

describe('Teste o componente NotFound', () => {
  it('Teste se a página contém um heading com o texto esperado', () => {
    renderWithRouter(<NotFound />);
    const notFound = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2 });
    expect(notFound).toBeDefined();
  });
  it('Teste se a imagem esperada é exibida', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
