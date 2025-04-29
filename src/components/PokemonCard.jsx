const PokemonCard = ({ pokemon }) => (
  <div className="group relative bg-black p-6 rounded-2xl shadow-lg hover:shadow-green-400/50 hover:scale-105 transition-all duration-300 cursor-pointer border border-green-500 m">
    <div className="flex justify-center">
      <img
        src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-28 h-28 object-contain rounded-full bg-black p-2"
      />
    </div>

    <h2 className="capitalize text-2xl font-bold text-center mt-4 text-green-400 group-hover:text-green-300">
      {pokemon.name}
    </h2>

    <p className="text-center text-gray-400 text-sm mt-1">ID: #{pokemon.id}</p>

    <div className="flex justify-center flex-wrap gap-2 mt-4">
      {pokemon.types.map((t) => (
        <span
          key={t.type.name}
          className="px-3 py-1 bg-black border border-green-400 text-green-300 text-xs font-semibold rounded-full"
        >
          {t.type.name}
        </span>
      ))}
    </div>

    
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

export default PokemonCard;
