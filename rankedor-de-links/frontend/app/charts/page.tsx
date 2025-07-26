'use client';
import React from 'react';
import { LinksService } from '../../services/links-service';
import { Box, Typography } from '@mui/material';
import { BarChart, LineChart, ScatterChart } from '@mui/x-charts';

export default function Charts() {
    const linksService = new LinksService();
    const links = linksService.retrieveLinks();

    const top10 = links.slice(0, 10); // ja retorna ordenado
    const names = top10.map((link) => link.name);
    const ratings = top10.map((link) => link.rating);
    const ranks = links.map((link) => `#${link.rank}`);
    const seoRatings = top10.map((link) => link.criteria.seo);

    type CriteriaKey =
        | 'performance'
        | 'design'
        | 'usability'
        | 'security'
        | 'seo';

    return (
        <>
            <Box
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                sx={{
                    maxWidth: '1440px',
                    margin: '0 auto',
                    justifyItems: 'center',
                }}
            >
                {/* Gráfico 1 */}
                <Box>
                    <Typography variant="h6">Top 10 - Ratings</Typography>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: names }]}
                        series={[{ data: ratings, label: 'Rating' }]}
                        height={300}
                        width={350}
                    />
                </Box>

                {/* Gráfico 2 */}
                <Box>
                    <Typography variant="h6">Critérios Empilhados</Typography>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: names }]}
                        series={[
                            {
                                label: 'Performance',
                                data: top10.map(
                                    (link) => link.criteria.performance,
                                ),
                                stack: 'criteria',
                            },
                            {
                                label: 'Design',
                                data: top10.map((link) => link.criteria.design),
                                stack: 'criteria',
                            },
                            {
                                label: 'Usability',
                                data: top10.map(
                                    (link) => link.criteria.usability,
                                ),
                                stack: 'criteria',
                            },
                            {
                                label: 'Security',
                                data: top10.map(
                                    (link) => link.criteria.security,
                                ),
                                stack: 'criteria',
                            },
                            {
                                label: 'SEO',
                                data: top10.map((link) => link.criteria.seo),
                                stack: 'criteria',
                            },
                        ]}
                        height={300}
                        width={350}
                    />
                </Box>

                {/* Gráfico 3 */}
                <Box>
                    <Typography variant="h6">Rating por Rank</Typography>
                    <LineChart
                        xAxis={[
                            { data: ranks, scaleType: 'point', label: 'Rank' },
                        ]}
                        series={[
                            {
                                data: links.map((link) => link.rating),
                                label: 'Rating',
                            },
                        ]}
                        height={300}
                        width={350}
                    />
                </Box>

                {/* Gráfico 4 */}
                <Box>
                    <Typography variant="h6">Usabilidade x Rating</Typography>
                    <ScatterChart
                        xAxis={[{ label: 'Usabilidade', min: 0, max: 5 }]}
                        yAxis={[{ label: 'Rating', min: 0, max: 5 }]}
                        series={[
                            {
                                label: 'Sites',
                                data: links.map((link) => ({
                                    x: link.criteria.usability,
                                    y: link.rating,
                                })),
                            },
                        ]}
                        height={300}
                        width={350}
                    />
                </Box>

                {/* Gráfico 5 */}
                <Box>
                    <Typography variant="h6">
                        Ranking Geral - Horizontal
                    </Typography>
                    <BarChart
                        yAxis={[
                            {
                                scaleType: 'band',
                                data: links.map((link) => link.name),
                            },
                        ]}
                        series={[
                            {
                                data: links.map((link) => link.rating),
                                label: 'Rating',
                            },
                        ]}
                        layout="horizontal"
                        height={300}
                        width={350}
                    />
                </Box>

                {/* Gráfico 6 */}
                <Box>
                    <Typography variant="h6">SEO - por Rank</Typography>
                    <LineChart
                        xAxis={[
                            { data: ranks, scaleType: 'point', label: 'Rank' },
                        ]}
                        series={[{ data: seoRatings, label: 'SEO' }]}
                        height={300}
                        width={350}
                    />
                </Box>

                {/* Gráfico 7 */}
                <Box>
                    <Typography variant="h6">
                        Segurança x Usabilidade
                    </Typography>
                    <ScatterChart
                        xAxis={[{ label: 'Segurança', min: 0, max: 5 }]}
                        yAxis={[{ label: 'Usabilidade', min: 0, max: 5 }]}
                        series={[
                            {
                                label: 'Sites',
                                data: links.map((link) => ({
                                    x: link.criteria.security,
                                    y: link.criteria.usability,
                                })),
                            },
                        ]}
                        height={300}
                        width={350}
                    />
                </Box>

                {/* Gráfico 8 */}
                <Box>
                    <Typography variant="h6">Design x Performance</Typography>
                    <ScatterChart
                        xAxis={[{ label: 'Design', min: 0, max: 5 }]}
                        yAxis={[{ label: 'Performance', min: 0, max: 5 }]}
                        series={[
                            {
                                label: 'Sites',
                                data: links.map((link) => ({
                                    x: link.criteria.design,
                                    y: link.criteria.performance,
                                })),
                            },
                        ]}
                        height={300}
                        width={350}
                    />
                </Box>
            </Box>
        </>
    );
}
