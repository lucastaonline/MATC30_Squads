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

import links from '@/links.json';

class LinksService {

    retrieveLinks(orderBy?: keyof RankedLink['criteria'], direction: 'asc' | 'desc' = 'asc'): RankedLink[] {
        const rankedLinks = links.map((link: RankedLink) => ({
            ...link,
            criteria: {
            ...link.criteria,
            performance: this.calculatePerformance(link),
            design: this.calculateDesign(link),
            usability: this.calculateUsability(link),
            security: this.calculateSecurity(link),
            seo: this.calculateSeo(link),
            content: this.calculateContent(link),
            accessibility: this.calculateAccessibility(link),
            responsiveness: this.calculateResponsiveness(link),
            reliability: this.calculateReliability(link),
            support: this.calculateSupport(link),
            integration: this.calculateIntegration(link),
            scalability: this.calculateScalability(link),
            customization: this.calculateCustomization(link),
            analytics: this.calculateAnalytics(link),
            cost: this.calculateCost(link),
            },
        }));

        if (orderBy) {
            return rankedLinks.sort((a, b) => {
            const valA = a.criteria[orderBy];
            const valB = b.criteria[orderBy];

            if (valA < valB) return direction === 'asc' ? -1 : 1;
            if (valA > valB) return direction === 'asc' ? 1 : -1;
            return 0;
            });
        }

        return rankedLinks;
    }

    

    calculatePerformance(link: RankedLink): number {
        return 0;
    }
    calculateDesign(link: RankedLink): number {
        return 0;
    }
    calculateUsability(link: RankedLink): number {
        return 0;
    }
    calculateSecurity(link: RankedLink): number {
        return 0;
    }
    calculateSeo(link: RankedLink): number {
        return 0;
    }
    calculateContent(link: RankedLink): number {
        return 0;
    }
    calculateAccessibility(link: RankedLink): number {
        return 0;
    }
    calculateResponsiveness(link: RankedLink): number {
        return 0;
    }
    calculateReliability(link: RankedLink): number {
        return 0;
    }
    calculateSupport(link: RankedLink): number {
        return 0;
    }
    calculateIntegration(link: RankedLink): number {
        return 0;
    }
    calculateScalability(link: RankedLink): number {
        return 0;
    }
    calculateCustomization(link: RankedLink): number {
        return 0;
    }
    calculateAnalytics(link: RankedLink): number {
        return 0;
    }
    calculateCost(link: RankedLink): number {
        return 0;
    }
}

export { LinksService };
