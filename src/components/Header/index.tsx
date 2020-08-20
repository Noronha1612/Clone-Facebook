import React from 'react';
import { MdSearch, MdGames } from 'react-icons/md';
import { FiYoutube } from 'react-icons/fi';
import { FaHome, FaStore, FaUsers } from 'react-icons/fa';

import Facebook from '../../assets/facebook.png';

import './styles.css';

const Header: React.FC = () => {
  return (
    <header>
        <section className="search-section">
          <img src={Facebook} alt="" className="logo"/>

          <label htmlFor="search" className="input-box">
            <MdSearch size={24} className="search-icon"/>
            <input 
              type="text" 
              id="search"
              placeholder="Pesquisar no Facebook"  
            />
          </label>
        </section>
        
        <section className="page-nav">
          
        </section>

        <section className="menu-nav">

        </section>
    </header>
  );
}

export default Header;