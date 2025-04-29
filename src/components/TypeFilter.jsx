const types = [
    'All', 'Normal', 'Fire', 'Water', 'Grass', 'Electric',
    'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic',
    'Bug', 'Rock', 'Ghost', 'Dark', 'Dragon', 'Steel', 'Fairy'
  ];
  
  const TypeFilter = ({ setSelectedType }) => (
    <select
      onChange={(e) => setSelectedType(e.target.value)}
      className="p-2 border border-green-500 text-green-500 rounded shadow"
    >
      {types.map(type => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  );
  
  export default TypeFilter;
  