import React from 'react';

const campos = [
  { name: 'name', label: 'Nome', type: 'text' },
  { name: 'url', label: 'URL', type: 'text' },
  { name: 'rating', label: 'Nota Geral', type: 'number' },
  { name: 'rank', label: 'Ranking', type: 'number' },
];

const criterios = [
  { name: 'performance', label: 'Performance' },
  { name: 'design', label: 'Design' },
  { name: 'usability', label: 'Usabilidade' },
  { name: 'security', label: 'Segurança' },
  { name: 'seo', label: 'SEO' },
];

export default function FormInput() {
  return (
    <>
      {campos.map((campo) => (
        <div className="flex gap-3 mb-4 items-center w-full" key={campo.name}>
          <label htmlFor={campo.name} className="w-28 text-gray-700 font-medium text-base">{campo.label}</label>
          <input
            id={campo.name}
            name={campo.name}
            type={campo.type}
            min={campo.type === 'number' ? 0 : undefined}
            max={campo.type === 'number' ? 10 : undefined}
            className={`pl-2 py-1 text-sm outline-none border border-gray-300 rounded-md focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200 bg-gray-50 ${campo.type === 'number' ? 'w-16' : 'w-full'}`}
            required
          />
        </div>
      ))}
      <div className="mx-auto mb-4 font-semibold text-green-700 text-base">Critérios:</div>
      {criterios.map((crit) => (
        <div className="flex gap-3 mb-3 items-center w-full" key={crit.name}>
          <label htmlFor={crit.name} className="w-28 text-gray-700 font-medium text-base">{crit.label}</label>
          <input
            id={crit.name}
            name={`criteria.${crit.name}`}
            type="number"
            min={0}
            max={10}
            className="outline-none border border-gray-300 rounded-md w-16 pl-2 py-1 text-sm bg-gray-50 focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200"
            required
          />
        </div>
      ))}
    </>
  );
}