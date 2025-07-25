"use client";

import { useEffect, useState } from "react";
import axios from "axios";

// Tipos dos dados
type CriteriaKey =
  | "performance"
  | "design"
  | "usability"
  | "security"
  | "seo"
  | "content"
  | "accessibility"
  | "responsiveness"
  | "reliability"
  | "support"
  | "integration"
  | "scalability"
  | "customization"
  | "analytics"
  | "cost";

type CriteriaData = {
  [key in CriteriaKey]: string | number | boolean | null;
};

export default function EvaluationTable() {
  const [criteria, setCriteria] = useState<CriteriaData | null>(null);

  useEffect(() => {
    axios
      .get("", {
        params: { url: "https://exemplo.com" },
      })
      .then((response) => {
        // Aqui você deve adaptar conforme o formato do retorno da sua API
        setCriteria({
          performance: 8,
          design: 7,
          usability: 9,
          security: 8,
          seo: 6,
          content: 7,
          accessibility: 8,
          responsiveness: 9,
          reliability: 7,
          support: 6,
          integration: 8,
          scalability: 7,
          customization: 6,
          analytics: 7,
          cost: 5,
          // Você pode mapear aqui com base no retorno real da API
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  const criterioFormatado = (criterio: string) =>
    criterio.charAt(0).toUpperCase() + criterio.slice(1);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Avaliação por Critério</h2>
      {criteria ? (
        <table className="table-auto border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Critério</th>
              <th className="border px-4 py-2 text-left">Nota</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(criteria).map(([criterio, valor]) => (
              <tr key={criterio}>
                <td className="border px-4 py-2">
                  {criterioFormatado(criterio)}
                </td>
                <td className="border px-4 py-2">{valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando avaliação...</p>
      )}
    </div>
  );
}
