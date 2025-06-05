'use client';

import { useParams } from 'next/navigation';
import { retrieveLinks } from '@/services/LinksService';
import { useEffect, useState } from 'react';

export default function LinkDetailPage() {
  const { id } = useParams();
  const [site, setSite] = useState<any>(null);

  useEffect(() => {
    const allLinks = retrieveLinks();
    const found = allLinks.find((link) => link.name === id);
    setSite(found);
  }, [id]);

  if (!site) {
    return <div className="p-4 text-red-500">Link não encontrado: {id}</div>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">{site.name}</h1>
      <p className="text-gray-600"><strong>URL:</strong> <a href={site.url} className="text-blue-500 underline">{site.url}</a></p>
      <p><strong>Rating:</strong> {site.rating}</p>
      <p><strong>Rank:</strong> {site.rank}</p>
      <h2 className="text-xl font-semibold">Critérios:</h2>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Performance:</strong> {site.criteria.performance}</li>
        <li><strong>Design:</strong> {site.criteria.design}</li>
        <li><strong>Usability:</strong> {site.criteria.usability}</li>
        <li><strong>Security:</strong> {site.criteria.security}</li>
        <li><strong>SEO:</strong> {site.criteria.seo}</li>
      </ul>
    </div>
  );
}
