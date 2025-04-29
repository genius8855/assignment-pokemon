const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 border border-green-500 text-green-500 rounded-full shadow w-64"
    />
  );
  
  export default SearchBar;
  