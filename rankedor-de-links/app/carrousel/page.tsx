"use client";
import { useState, useEffect } from "react";
import { LinksService } from '@/services/links-service';

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

export default function CarrosselPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const linksService = new LinksService();
    const retrievedLinks = linksService.retrieveLinks();
    setLinks(retrievedLinks.slice(0, 10)); // top 10
  }, []);

  const prev = () => setCurrent(current === 0 ? links.length - 1 : current - 1);
  const next = () => setCurrent(current === links.length - 1 ? 0 : current + 1);

  if (links.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <span>Carregando...</span>
      </div>
    );
  }

  // Função para pegar o índice circularmente
  const getIndex = (idx: number) => (idx + links.length) % links.length;

  // Índices dos cards
  const leftIdx = getIndex(current - 1);
  const centerIdx = current;
  const rightIdx = getIndex(current + 1);

  // Card component
  function Card({ link, idx, active }: { link: Link; idx: number; active?: boolean }) {
    return (
      <div
        className={`relative bg-slate-950 text-white rounded-lg shadow-lg transition-all duration-300
          cursor-pointer ${active ? "scale-105 z-20" : "scale-95 opacity-60 z-10"}
          w-80 mx-2 flex-shrink-0`}
        style={{ minHeight: 370 }}
        onClick={() => setCurrent(idx)}
      >
        <div className="flex items-center justify-center w-full h-32 bg-blue-950 rounded-t-lg">
          <span className="text-6xl text-black">🌐</span>
        </div>
                <div className="p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-center">{link.name}</h2>
          <div className="flex flex-wrap gap-4 text-sm mb-2 justify-center">
            <span><b>Rating:</b> {link.rating}</span>
            <span><b>Rank:</b> #{link.rank}</span>
          </div>
          <div className="mb-2 w-full">
            <b className="block text-center">Critérios:</b>
            <ul className="ml-4 text-center">
              <li>Performance: {link.criteria.performance}</li>
              <li>Design: {link.criteria.design}</li>
              <li>Usabilidade: {link.criteria.usability}</li>
              <li>Segurança: {link.criteria.security}</li>
              <li>SEO: {link.criteria.seo}</li>
            </ul>
          </div>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 underline text-blue-600"
          >
            Visitar site
          </a>
          {active && (
            <div className="flex justify-center mt-6">
              {links.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(idx);
                  }}
                  className={`w-3 h-3 mx-1 rounded-full ${current === idx ? "bg-blue-950" : "bg-gray-300"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="flex items-center justify-center" style={{ width: 900 }}>
        <Card link={links[leftIdx]} idx={leftIdx} />
        <Card link={links[centerIdx]} idx={centerIdx} active />
        <Card link={links[rightIdx]} idx={rightIdx} />
      </div>
    </div>
  );
}