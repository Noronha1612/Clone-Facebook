import React from 'react';
import { MdSearch } from 'react-icons/md';

import Facebook from '../../assets/facebook.png';

import './styles.css';

const Header: React.FC = () => {
  return (
    <header>
        <img src={Facebook} alt="" className="logo"/>

        <label htmlFor="search" className="input-box">
          <MdSearch size={24} className="search-icon"/>
          <input 
            type="text" 
            id="search"
            placeholder="Pesquisar no Facebook"  
          />
        </label>
    </header>
  );
}

export default Header;