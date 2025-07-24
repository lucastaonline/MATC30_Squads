"use client";

import React, { useEffect, useState } from "react";
import { LinksService, RankedLink } from "@/services/links-service";

export default function Table() {
  const [data, setData] = useState<RankedLink[]>([]);

  useEffect(() => {
    const service = new LinksService();
    const links = service.retrieveLinks();
    setData(links);
  }, []);

  return (
    <div className="p-6 bg-[#0a0a0a] min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Ranking de Sites
      </h2>
      <div className="overflow-auto rounded-xl shadow-lg border border-gray-700">
        <table className="w-full table-auto border-collapse text-sm bg-[#0d0f2b] text-white">
          <thead>
            <tr className="bg-[#1a1f4a] text-blue-300 uppercase text-xs tracking-wider">
              <th className="p-3 border border-gray-700">#</th>
              <th className="p-3 border border-gray-700">Nome</th>
              <th className="p-3 border border-gray-700">URL</th>
              <th className="p-3 border border-gray-700">Performance</th>
              <th className="p-3 border border-gray-700">Design</th>
              <th className="p-3 border border-gray-700">Usabilidade</th>
              <th className="p-3 border border-gray-700">Segurança</th>
              <th className="p-3 border border-gray-700">SEO</th>
              <th className="p-3 border border-gray-700">Conteúdo</th>
              <th className="p-3 border border-gray-700">Acessibilidade</th>
              <th className="p-3 border border-gray-700">Responsividade</th>
              <th className="p-3 border border-gray-700">Confiabilidade</th>
              <th className="p-3 border border-gray-700">Suporte</th>
              <th className="p-3 border border-gray-700">Integração</th>
              <th className="p-3 border border-gray-700">Escalabilidade</th>
              <th className="p-3 border border-gray-700">Personalização</th>
              <th className="p-3 border border-gray-700">Análises</th>
              <th className="p-3 border border-gray-700">Custo</th>
              <th className="p-3 border border-gray-700">Nota</th>
            </tr>
          </thead>
          <tbody>
            {data.map((site) => (
              <tr
                key={site.rank}
                className="hover:bg-[#131740] transition duration-200 border-t border-gray-700"
              >
                <td className="p-3 border border-gray-700 text-blue-400 font-semibold">{site.rank}</td>
                <td className="p-3 border border-gray-700">{site.name}</td>
                <td className="p-3 border border-gray-700">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline hover:text-blue-200"
                  >
                    Visitar
                  </a>
                </td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.performance}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.design}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.usability}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.security}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.seo}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.content}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.accessibility}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.responsiveness}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.reliability}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.support}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.integration}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.scalability}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.customization}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.analytics}</td>
                <td className="p-3 border border-gray-700 text-center">{site.criteria.cost}</td>
                <td className="p-3 border border-gray-700 text-center text-blue-300 font-semibold">
                  {site.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}