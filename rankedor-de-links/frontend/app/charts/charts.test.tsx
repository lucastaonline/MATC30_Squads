import React from 'react';
import { render, screen } from '@testing-library/react';
import Charts from './page';
import { LinksService } from '../../services/links-service';

jest.mock('../../services/links-service', () => ({
    LinksService: jest.fn().mockImplementation(() => ({
        retrieveLinks: () => [
            {
        rank: 1,
        name: 'Site A',
        url: 'https://sitea.com',
        rating: 4.5,
        criteria: {
            performance: 4,
            design: 5,
            usability: 3,
            security: 4,
            seo: 5
        }
    },
    {
        rank: 3,
        name: 'Site B',
        url: 'https://siteb.com',
        rating: 3.8,
        criteria: {
            performance: 5,
            design: 3,
            usability: 4,
            security: 5,
            seo: 2
        }  
    }
        ],
    })),
}));

describe('Chart Tests', () => {
    beforeEach(() => {
        (LinksService as jest.Mock).mockClear();
    });

    it('renderiza os títulos dos gráficos corretamente', () => {
        render(<Charts />);

        const titles = [
            'Top 10 - Ratings',
            'Critérios Empilhados',
            'Rating por Rank',
            'Usabilidade x Rating',
            'Ranking Geral - Horizontal',
            'SEO - por Rank',
            'Segurança x Usabilidade',
            'Design x Performance'
        ];

        titles.forEach(title => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });
    });

    it('renderiza os dados corretamente', () => {
        render(<Charts />);

        //nomes e ranks por múltiplas ocorrências
        expect(screen.getAllByText('Site A').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Site B').length).toBeGreaterThan(0);
        expect(screen.getAllByText('#1').length).toBeGreaterThan(0);
        expect(screen.getAllByText('#2').length).toBeGreaterThan(0);

        //critérios
        const criteria = [
            'Performance',
            'Design',
            'Usability',
            'Security',
            'SEO'
        ];
        criteria.forEach(criterion => {
            expect(screen.getByText(criterion)).toBeInTheDocument();
        });
    });
});



