import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './index';

describe('Form', () => {
  it('deve renderizar todos os campos do formulário', () => {
    render(<Form />);
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/URL/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nota Geral/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ranking/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Performance/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Design/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Usabilidade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Segurança/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/SEO/i)).toBeInTheDocument();
  });

  it('deve permitir preencher e enviar o formulário', () => {
    render(<Form />);
    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Empresa Teste' } });
    fireEvent.change(screen.getByLabelText(/URL/i), { target: { value: 'https://empresa.com' } });
    fireEvent.change(screen.getByLabelText(/Nota Geral/i), { target: { value: '8' } });
    fireEvent.change(screen.getByLabelText(/Ranking/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Performance/i), { target: { value: '9' } });
    fireEvent.change(screen.getByLabelText(/Design/i), { target: { value: '8' } });
    fireEvent.change(screen.getByLabelText(/Usabilidade/i), { target: { value: '7' } });
    fireEvent.change(screen.getByLabelText(/Segurança/i), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText(/SEO/i), { target: { value: '6' } });
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));
  });
});
