import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      return;
    }
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={
          'w-28 rounded-full bg-yellow-100 px-4 py-3 text-sm placeholder-stone-400 ' +
          'transition-all duration-300 sm:w-64 sm:focus:w-72 ' +
          'focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50'
        }
        placeholder={'Search order #'}
        value={query}
        onChange={handleQueryChange}
      />
    </form>
  );
}

export default SearchOrder;
