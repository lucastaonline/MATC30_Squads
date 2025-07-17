"use client";
import { useState, useEffect } from "react";

type Link = {
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
};

// Mock data para teste
const mockLinks: Link[] = [
    {
        name: "Google",
        url: "https://google.com",
        criteria: { performance: 95, design: 90, usability: 98, security: 92, seo: 100 },
        rating: 95,
        rank: 1
    },
    {
        name: "Amazon",
        url: "https://amazon.com",
        criteria: { performance: 88, design: 85, usability: 92, security: 90, seo: 95 },
        rating: 90,
        rank: 2
    },
    {
        name: "GitHub",
        url: "https://github.com",
        criteria: { performance: 92, design: 88, usability: 95, security: 95, seo: 85 },
        rating: 91,
        rank: 3
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        criteria: { performance: 85, design: 82, usability: 90, security: 88, seo: 92 },
        rating: 87,
        rank: 4
    },
    {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        criteria: { performance: 90, design: 85, usability: 95, security: 92, seo: 88 },
        rating: 90,
        rank: 5
    }
];

export default function CarrosselTestPage() {
    const [links, setLinks] = useState<Link[]>([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        // Simulando o carregamento dos dados
        setTimeout(() => {
            setLinks(mockLinks);
        }, 1000);
    }, []);

    if (links.length === 0) {
        return (
            <div className="flex justify-center items-center w-full h-full min-h-96">
                <span className="text-lg">Carregando...</span>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col items-center py-8">
            <h1 className="text-3xl font-bold mb-8">Teste do Carrossel</h1>
            <div className="bg-gray-100 p-4 rounded-lg">
                <p>Dados carregados: {links.length} links</p>
                <p>Link atual: {current + 1}</p>
                <p>Nome do link atual: {links[current]?.name}</p>
            </div>
        </div>
    );
}