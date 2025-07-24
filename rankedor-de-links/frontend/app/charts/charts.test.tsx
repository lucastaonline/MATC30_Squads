import {render, screen} from '@testing-library/react';
import Charts from './page';
import { LinksService } from '@/services/links-service';

jest.mock('@/services/links-service', () => ({
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



