// pages/index.js
"use client";
import { useState , useEffect } from 'react';


import SearchInput from './components/SearchInput';
import RemedioModal from './components/RemedioModal';
import RemedioGrid from './components/RemedioGrid';
import React from 'react';


export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [selectedProduto, setSelectedProduto] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      const res = await fetch(`https://bula.vercel.app/categorias`);
      const data = await res.json();
      setCategorias(data.categorias || []);
      
      // Encontrar a categoria "Biológico" e definir como padrão
      const categoriaBiologico = data.categorias.find(categoria => categoria.descricao === "Biológico");
      if (categoriaBiologico && !selectedCategoria) {
        handleCategoriaSelect(categoriaBiologico.id);
      }
    };

    fetchCategorias();
  }, [selectedCategoria]);

  const handleSearch = async (query) => {
    const res = await fetch(`https://bula.vercel.app/pesquisar?nome=${query}`);
    const data = await res.json();
    setProdutos(data.content || []);
  };

  const handleCategoriaSelect = async (categoriaId) => {
    console.log("Categoria selecionada:", categoriaId);
  
    setSelectedCategoria(categoriaId);
  
    try {
      const res = await fetch(`https://bula.vercel.app/medicamentos?categoria=${categoriaId}`);
      if (!res.ok) {
        throw new Error(`Erro na consulta: ${res.status}`);
      }
      const data = await res.json();
      console.log("Dados recebidos:", data);
  
      setProdutos(data.content || []);
  
      console.log("Produtos atualizados:", data.content || []);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">

    <div className="bg-gray-100 p-4 pt-20 w-full md:w-64">
      <h2 className="text-xl font-bold mb-4 text-black">Categorias</h2>
      <ul className='font-bold text-black'>
        {categorias.map((categoria) => (
          <li
            key={categoria.id}
            className={`cursor-pointer p-2 rounded-lg mb-1 ${
              selectedCategoria === categoria.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 text-black'
            }`}
            onClick={() => handleCategoriaSelect(categoria.id)}
          >
            {categoria.descricao}
          </li>
        ))}
      </ul>
    </div>
  
  
    <div className="p-4 md:p-8 flex-grow bg-white">
      <div className="flex items-center space-x-4 md:space-x-9 mb-4">
        <span className="font-bold text-lg text-black">Doutor Bula</span>
        <SearchInput onSearch={handleSearch} />
      </div>
  
      <RemedioGrid produtos={produtos} onSelect={setSelectedProduto} />
      <RemedioModal produto={selectedProduto} onClose={() => setSelectedProduto(null)} />
    </div>
  </div>
  );
}