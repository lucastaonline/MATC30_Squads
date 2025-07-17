import { render, screen } from '@testing-library/react';
import CarrosselPage from './CarrosselPage';

describe('CarrosselPage', () => {
    it('renderiza a mensagem de carregamento inicialmente', () => {
        render(<CarrosselPage />);
        expect(screen.getByText('Carregando...')).toBeInTheDocument();
    });
});
