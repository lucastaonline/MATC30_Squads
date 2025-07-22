import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormInput from './index';

describe('FormInput', () => {
  it('deve renderizar todos os campos básicos', () => {
    // Arrange & Act
    render(<FormInput />);

    // Assert
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/URL/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nota Geral/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ranking/i)).toBeInTheDocument();
  });

  it('deve renderizar todos os critérios de avaliação', () => {
    // Arrange & Act
    render(<FormInput />);

    // Assert
    expect(screen.getByLabelText(/Performance/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Design/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Usabilidade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Segurança/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/SEO/i)).toBeInTheDocument();
  });
});
