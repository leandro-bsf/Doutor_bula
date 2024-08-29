// components/RemedioModal.js
import React from 'react';

export default function RemedioModal({ produto, onClose }) {
  if (!produto) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg max-w-md w-full">
      <h2 className="text-xl font-bold mb-4 text-black">{produto.nomeProduto}</h2>
      <p className="text-black">Razão Social: {produto.razaoSocial}</p>
      <p className="text-black">ID Produto: {produto.idProduto}</p>
      <p className="text-black">CNPJ: {produto.cnpj}</p>
      <p className="text-black">Data: {produto.data}</p>
      <p className="text-black">Número de Registro: {produto.numeroRegistro}</p>
      <button
        className="mt-4 p-2 bg-red-500 text-white rounded-lg"
        onClick={onClose}
      >
        Fechar
      </button>
    </div>
  </div>
  
  );
}
