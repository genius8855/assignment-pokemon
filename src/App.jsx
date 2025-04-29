import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';
import PokemonCard from './components/PokemonCard';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [error, setError] = useState(null);

  // fetching data from pokemon api
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();
        const promises = data.results.map(p =>
          fetch(p.url).then(res => res.json())
        );
        const results = await Promise.all(promises);
        setPokemonList(results);
        setFilteredList(results);
        setLoading(false);
        toast.success("Fetched data")
      } catch (err) {
        // setError('Failed to load Pokémon data.');
        toast.error("Failed to load Pokémon data.")
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);
  
  // Useeffect for searchBar
  useEffect(() => {
    let filtered = pokemonList;

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType !== 'All') {
      filtered = filtered.filter(p =>
        p.types.some(t => t.type.name === selectedType.toLowerCase())
      );
    }

    setFilteredList(filtered);
  }, [searchTerm, selectedType, pokemonList]);

  return (
    <div className="min-h-screen bg-black p-4">
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TypeFilter setSelectedType={setSelectedType} />
      </div>

      {loading && <p className="text-xl font-semibold text-green-500 justify-center items-center mx-auto">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && filteredList.length === 0 && (
        <p className="text-lg text-gray-600">No Pokémon found.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        {filteredList.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
