import { render, screen } from '@testing-library/react';
import CarrosselPage from './CarrosselPage';
import userEvent from '@testing-library/user-event';

jest.mock('../../services/links-service', () => ({
    LinksService: jest.fn().mockImplementation(() => ({
        retrieveLinks: () => [
            {
                name: 'Exemplo 1',
                url: 'https://exemplo1.com',
                criteria: {
                    performance: 8,
                    design: 9,
                    usability: 7,
                    security: 10,
                    seo: 6,
                },
                rating: 8.5,
                rank: 1,
            },
            {
                name: 'Exemplo 2',
                url: 'https://exemplo2.com',
                criteria: {
                    performance: 6,
                    design: 8,
                    usability: 6,
                    security: 9,
                    seo: 7,
                },
                rating: 7.5,
                rank: 2,
            },
            {
                name: 'Exemplo 3',
                url: 'https://exemplo3.com',
                criteria: {
                    performance: 7,
                    design: 7,
                    usability: 7,
                    security: 8,
                    seo: 9,
                },
                rating: 8.0,
                rank: 3,
            }
        ],
    })),
}));


describe('page', () => {
    it('renderiza a mensagem de carregamento inicialmente', () => {
        render(<CarrosselPage />);
        expect(screen.getByText('Carregando...')).toBeInTheDocument();
    });
    it('renderiza corretamente os cards quando links são carregados', async () => {
        render(<CarrosselPage />);
        expect(await screen.findByText('Exemplo 1')).toBeInTheDocument();
        expect(await screen.findByText('Exemplo 2')).toBeInTheDocument();
        expect(await screen.findByText('Exemplo 3')).toBeInTheDocument();
    });
    it('altera o card central ao clicar em outro card', async () => {
        render(<CarrosselPage />);

        // Aguarda os cards renderizarem
        const card1 = await screen.findByText('Exemplo 1');
        const card2 = await screen.findByText('Exemplo 2');

        // Clique no card "Exemplo 2"
        userEvent.click(card2);

        // Agora, o card "Exemplo 2" deve estar com destaque
        expect(await screen.findByText('Exemplo 2')).toBeInTheDocument();
    });
    it('exibe o link para visitar o site com a URL correta', async () => {
        render(<CarrosselPage />);

        const visitLink = await screen.findByRole('link', { name: /visitar site/i });

        expect(visitLink).toBeInTheDocument();
        expect(visitLink).toHaveAttribute('href', 'https://exemplo1.com');
        expect(visitLink).toHaveAttribute('target', 'blank');
        expect(visitLink).toHaveAttribute('rel', 'noopener noreferrer');
    });


});


