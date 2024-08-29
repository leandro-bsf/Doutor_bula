// components/RemedioGrid.js
import React from 'react';

export default function RemedioGrid({ produtos, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {produtos.map((produto) => (
        <div
          key={produto.idProduto}
          className="border p-4 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelect(produto)}
        >
          <h3 className="text-lg font-bold">{produto.nomeProduto}</h3>
          <p>{produto.razaoSocial}</p>
          <span>ID: {produto.idProduto}</span>
        </div>
      ))}
    </div>
  );
}
