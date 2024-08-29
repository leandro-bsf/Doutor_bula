// components/SearchInput.js
import { useState } from 'react';

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) onSearch(query);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
        placeholder="Digite o nome do remédio..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
        onClick={handleSearch}
      >
        Pesquisar
      </button>
    </div>
  );
}
