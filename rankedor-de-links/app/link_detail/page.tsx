'use client';

import { useParams } from 'next/navigation';
import { LinksService } from '@/services/links-service';
import { Box, Typography, Divider } from '@mui/material';
import { RadarChart, Gauge } from '@mui/x-charts';

export default function LinkDetail() {
    const { id } = useParams(); // espera que o nome do link esteja na URL
    const linksService = new LinksService();
    const links = linksService.retrieveLinks();

    // Encontra o link específico
    const link = links.find((l) => l.name.toLowerCase() === decodeURIComponent(id as string).toLowerCase());

    if (!link) {
        return (
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" color="error">
                    Link não encontrado!
                </Typography>
            </Box>
        );
    }

    const { name, rating, rank, criteria } = link;

    const criteriosLabels = ['Performance', 'Design', 'Usability', 'Security', 'SEO'];
    const criteriosValores = [
        criteria.performance,
        criteria.design,
        criteria.usability,
        criteria.security,
        criteria.seo,
    ];

    return (
        <Box sx={{ maxWidth: 900, margin: '0 auto', p: 4 }}>
            <Typography variant="h3" gutterBottom>
                {name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Rank #{rank}
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="h6">Rating Geral</Typography>
            <Gauge
                value={rating * 20} // convertendo para escala de 100
                valueMax={100}
                startAngle={-110}
                endAngle={110}
                text={({ value }) => ${(value / 20).toFixed(1)} / 5.0}
                width={300}
                height={150}
                sx={{ my: 3 }}
            />

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6">Critérios Avaliados</Typography>
            <RadarChart
                series={[{ data: criteriosValores, label: name }]}
                height={400}
                width={400}
                axisAngleLabels={{ formatter: (i) => criteriosLabels[i] }}
            />

            <Divider sx={{ my: 4 }} />

            <Box>
                {criteriosLabels.map((label, idx) => (
                    <Typography key={label} variant="body1">
                        {label}: {criteriosValores[idx].toFixed(1)}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
}