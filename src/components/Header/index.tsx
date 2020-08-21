import React, { HTMLAttributes, ButtonHTMLAttributes, useState } from 'react';
import { MdSearch, MdGames } from 'react-icons/md';
import { FiYoutube } from 'react-icons/fi';
import { FaHome, FaStore, FaUsers } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import Facebook from '../../assets/facebook.png';

import './styles.css';

interface NavButtonProps extends HTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  subtitle: string;
}

const NavButton: React.FC<NavButtonProps> = ({ Icon, subtitle, ...buttonProps }) => {
  return (
    <button {...buttonProps} title={subtitle} >
      <Icon />
    </button>
  );
}

const Header: React.FC = () => {
  const [ active, setActive ] = useState(1);

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
          <NavButton onClick={() => setActive(1)} className={active === 1 ? "nav-page active" : "nav-page" } Icon={FaHome} subtitle="Página Inicial" />
          <NavButton onClick={() => setActive(2)} className={active === 2 ? "nav-page active" : "nav-page" } Icon={FiYoutube} subtitle="Watch" />
          <NavButton onClick={() => setActive(3)} className={active === 3 ? "nav-page active" : "nav-page" } Icon={FaStore} subtitle="Marketplace" />
          <NavButton onClick={() => setActive(4)} className={active === 4 ? "nav-page active" : "nav-page" } Icon={FaUsers} subtitle="Grupos" />
          <NavButton onClick={() => setActive(5)} className={active === 5 ? "nav-page active" : "nav-page" } Icon={MdGames} subtitle="Jogos" />
        </section>

        <section className="menu-nav">

        </section>
    </header>
  );
}

export default Header;