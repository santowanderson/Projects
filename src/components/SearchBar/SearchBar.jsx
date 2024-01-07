import React, { useContext, useState } from 'react';
import './SearchBar.css';
import { BsSearch } from "react-icons/bs";

import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const { setProducts, setLoading } = useContext(AppContext);
  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  }

  return ( 
    <form className='seach_bar' onSubmit={ handleSearch }>
      { name }
      <input 
        type="search"
        value={ searchValue }
        placeholder="Buscar produtos" 
        className="search_input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className='search_button'>
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;