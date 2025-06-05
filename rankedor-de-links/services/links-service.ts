export interface RankedLink {
    name: string;
    url: string;
    criteria: {
        performance: number;
        design: number;
        usability: number;
        security: number;
        seo: number;
    };
    rating: number;
    rank: number;
}

class LinksService {
    retrieveLinks(): RankedLink[] {
        return [
            {
                name: 'Site 1',
                url: 'https://site1.com',
                criteria: {
                    performance: 4.7,
                    design: 4.8,
                    usability: 4.6,
                    security: 4.9,
                    seo: 4.5,
                },
                rating: 4.7,
                rank: 1,
            },
            {
                name: 'Site 2',
                url: 'https://site2.com',
                criteria: {
                    performance: 4.5,
                    design: 4.6,
                    usability: 4.4,
                    security: 4.8,
                    seo: 4.6,
                },
                rating: 4.58,
                rank: 2,
            },
            {
                name: 'Site 3',
                url: 'https://site3.com',
                criteria: {
                    performance: 4.2,
                    design: 4.5,
                    usability: 4.6,
                    security: 4.3,
                    seo: 4.6,
                },
                rating: 4.44,
                rank: 3,
            },
            {
                name: 'Site 4',
                url: 'https://site4.com',
                criteria: {
                    performance: 4.3,
                    design: 4.2,
                    usability: 4.1,
                    security: 4.4,
                    seo: 4.3,
                },
                rating: 4.26,
                rank: 4,
            },
            {
                name: 'Site 5',
                url: 'https://site5.com',
                criteria: {
                    performance: 4.1,
                    design: 4.0,
                    usability: 4.3,
                    security: 4.1,
                    seo: 4.2,
                },
                rating: 4.14,
                rank: 5,
            },
            {
                name: 'Site 6',
                url: 'https://site6.com',
                criteria: {
                    performance: 3.9,
                    design: 4.0,
                    usability: 4.0,
                    security: 4.1,
                    seo: 4.0,
                },
                rating: 4.0,
                rank: 6,
            },
            {
                name: 'Site 7',
                url: 'https://site7.com',
                criteria: {
                    performance: 4.1,
                    design: 3.8,
                    usability: 4.0,
                    security: 4.0,
                    seo: 3.9,
                },
                rating: 3.96,
                rank: 7,
            },
            {
                name: 'Site 8',
                url: 'https://site8.com',
                criteria: {
                    performance: 3.7,
                    design: 4.2,
                    usability: 3.8,
                    security: 3.9,
                    seo: 3.9,
                },
                rating: 3.9,
                rank: 8,
            },
            {
                name: 'Site 9',
                url: 'https://site9.com',
                criteria: {
                    performance: 3.8,
                    design: 3.9,
                    usability: 3.7,
                    security: 4.0,
                    seo: 3.9,
                },
                rating: 3.86,
                rank: 9,
            },
            {
                name: 'Site 10',
                url: 'https://site10.com',
                criteria: {
                    performance: 3.6,
                    design: 3.9,
                    usability: 3.7,
                    security: 3.9,
                    seo: 3.8,
                },
                rating: 3.78,
                rank: 10,
            },
            {
                name: 'Site 11',
                url: 'https://site11.com',
                criteria: {
                    performance: 3.5,
                    design: 3.8,
                    usability: 3.6,
                    security: 3.7,
                    seo: 3.6,
                },
                rating: 3.64,
                rank: 11,
            },
            {
                name: 'Site 12',
                url: 'https://site12.com',
                criteria: {
                    performance: 3.4,
                    design: 3.5,
                    usability: 3.6,
                    security: 3.5,
                    seo: 3.7,
                },
                rating: 3.54,
                rank: 12,
            },
            {
                name: 'Site 13',
                url: 'https://site13.com',
                criteria: {
                    performance: 3.3,
                    design: 3.4,
                    usability: 3.5,
                    security: 3.6,
                    seo: 3.5,
                },
                rating: 3.46,
                rank: 13,
            },
            {
                name: 'Site 14',
                url: 'https://site14.com',
                criteria: {
                    performance: 3.5,
                    design: 3.2,
                    usability: 3.2,
                    security: 3.3,
                    seo: 3.4,
                },
                rating: 3.32,
                rank: 14,
            },
            {
                name: 'Site 15',
                url: 'https://site15.com',
                criteria: {
                    performance: 3.2,
                    design: 3.3,
                    usability: 3.2,
                    security: 3.3,
                    seo: 3.3,
                },
                rating: 3.26,
                rank: 15,
            },
            {
                name: 'Site 16',
                url: 'https://site16.com',
                criteria: {
                    performance: 3.1,
                    design: 3.0,
                    usability: 3.2,
                    security: 3.3,
                    seo: 3.2,
                },
                rating: 3.16,
                rank: 16,
            },
            {
                name: 'Site 17',
                url: 'https://site17.com',
                criteria: {
                    performance: 3.0,
                    design: 3.0,
                    usability: 3.1,
                    security: 3.2,
                    seo: 3.0,
                },
                rating: 3.06,
                rank: 17,
            },
            {
                name: 'Site 18',
                url: 'https://site18.com',
                criteria: {
                    performance: 3.0,
                    design: 2.9,
                    usability: 3.0,
                    security: 3.0,
                    seo: 3.1,
                },
                rating: 3.0,
                rank: 18,
            },
            {
                name: 'Site 19',
                url: 'https://site19.com',
                criteria: {
                    performance: 2.9,
                    design: 2.9,
                    usability: 3.0,
                    security: 2.8,
                    seo: 3.0,
                },
                rating: 2.92,
                rank: 19,
            },
            {
                name: 'Site 20',
                url: 'https://site20.com',
                criteria: {
                    performance: 2.7,
                    design: 2.9,
                    usability: 2.9,
                    security: 2.8,
                    seo: 2.9,
                },
                rating: 2.84,
                rank: 20,
            },
            {
                name: 'Site 21',
                url: 'https://site21.com',
                criteria: {
                    performance: 2.6,
                    design: 2.7,
                    usability: 2.8,
                    security: 2.7,
                    seo: 2.6,
                },
                rating: 2.68,
                rank: 21,
            },
            {
                name: 'Site 22',
                url: 'https://site22.com',
                criteria: {
                    performance: 2.5,
                    design: 2.6,
                    usability: 2.7,
                    security: 2.6,
                    seo: 2.6,
                },
                rating: 2.6,
                rank: 22,
            },
            {
                name: 'Site 23',
                url: 'https://site23.com',
                criteria: {
                    performance: 2.4,
                    design: 2.4,
                    usability: 2.5,
                    security: 2.4,
                    seo: 2.5,
                },
                rating: 2.44,
                rank: 23,
            },
            {
                name: 'Site 24',
                url: 'https://site24.com',
                criteria: {
                    performance: 2.3,
                    design: 2.3,
                    usability: 2.3,
                    security: 2.3,
                    seo: 2.4,
                },
                rating: 2.32,
                rank: 24,
            },
            {
                name: 'Site 25',
                url: 'https://site25.com',
                criteria: {
                    performance: 2.1,
                    design: 2.2,
                    usability: 2.2,
                    security: 2.3,
                    seo: 2.3,
                },
                rating: 2.22,
                rank: 25,
            },
            {
                name: 'Site 26',
                url: 'https://site26.com',
                criteria: {
                    performance: 2.0,
                    design: 2.1,
                    usability: 2.2,
                    security: 2.2,
                    seo: 2.2,
                },
                rating: 2.14,
                rank: 26,
            },
            {
                name: 'Site 27',
                url: 'https://site27.com',
                criteria: {
                    performance: 2.0,
                    design: 2.0,
                    usability: 2.1,
                    security: 2.0,
                    seo: 2.1,
                },
                rating: 2.04,
                rank: 27,
            },
            {
                name: 'Site 28',
                url: 'https://site28.com',
                criteria: {
                    performance: 1.9,
                    design: 2.0,
                    usability: 2.0,
                    security: 2.0,
                    seo: 2.0,
                },
                rating: 1.98,
                rank: 28,
            },
            {
                name: 'Site 29',
                url: 'https://site29.com',
                criteria: {
                    performance: 1.8,
                    design: 1.9,
                    usability: 1.9,
                    security: 1.9,
                    seo: 1.8,
                },
                rating: 1.86,
                rank: 29,
            },
            {
                name: 'Site 30',
                url: 'https://site30.com',
                criteria: {
                    performance: 1.5,
                    design: 1.6,
                    usability: 1.7,
                    security: 1.6,
                    seo: 1.5,
                },
                rating: 1.58,
                rank: 30,
            },
        ];
    }
}

export { LinksService };
