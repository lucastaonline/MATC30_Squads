export interface RankedLink {
    name: string;
    url: string;
    criteria: {
        performance: number;
        design: number;
        usability: number;
        security: number;
        seo: number;
        content: number;
        accessibility: number;
        responsiveness: number;
        reliability: number;
        support: number;
        integration: number;
        scalability: number;
        customization: number;
        analytics: number;
        cost: number;
    };
    rating: number;
    rank: number;
}


const API_URL = import.meta.env; // alterar endereço do env

type SortOrder = 'ASC' | 'DESC';

class LinksService {
    // Consulta rota padrão com todos os links (sem ordenação)
    async getTopLinks(): Promise<RankedLink[]> {
        const response = await fetch(`${API_URL}/top-api`);
        if (!response.ok) throw new Error('Erro ao buscar top links');
        return await response.json();
    }

    // Consulta a rota que ordena os links, passando ASC/DESC como query
    async getOrderedLinks(order: SortOrder = 'DESC'): Promise<RankedLink[]> {
        const response = await fetch(`${API_URL}/api-orders?order=${order}`);
        if (!response.ok) throw new Error('Erro ao buscar links ordenados');
        return await response.json();
    }
}

export const linksService = new LinksService();
