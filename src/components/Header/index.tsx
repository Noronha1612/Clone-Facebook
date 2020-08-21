import React, { HTMLAttributes, useState } from 'react';
import { MdSearch, MdGames } from 'react-icons/md';
import { FiYoutube } from 'react-icons/fi';
import { 
  FaHome,
  FaStore, 
  FaUsers,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaSortDown
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import Facebook from '../../assets/facebook.png';

import './styles.css';

interface NavButtonProps extends HTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  subtitle: string;
  notification?: number;
}

const NavButton: React.FC<NavButtonProps> = ({ Icon, subtitle, notification = 0,...buttonProps }) => {
  return (
    <button {...buttonProps} title={subtitle} >
      {notification !== 0 && <span className="notification">{notification}</span>}
      <Icon />
    </button>
  );
}

const MenuButton: React.FC<NavButtonProps> = ({ Icon, subtitle, notification = 0, ...buttonProps }) => {

  return (
    <button {...buttonProps} title={subtitle}>
      {notification !== 0 && <span className="notification">{notification}</span>}
      <Icon />
    </button>
  );
}

const Header: React.FC = () => {
  const [ activePage, setActivePage ] = useState(1);
  const [ activeMenu, setActiveMenu ] = useState(0);

  const avatar = 'https://scontent.frec34-1.fna.fbcdn.net/v/t1.0-9/13434932_1043968092351122_153505368284202286_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeFeGQWxwya5exv6_bo6b_f-wYxj_6V8NDfBjGP_pXw0Nwxv5QWNP_2OehwoE13kWjLGBRlhTM7_y0ypAEtdO9jv&_nc_ohc=DDB4HrfdAPAAX9rgpn3&_nc_ht=scontent.frec34-1.fna&oh=d00fc77d2d94be738774bd1d1ae8e6e6&oe=5F650C62';

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
          <NavButton onClick={() => setActivePage(1)} className={activePage === 1 ? "nav-page active" : "nav-page" } Icon={FaHome} subtitle="Página Inicial" />
          <NavButton notification={2} onClick={() => setActivePage(2)} className={activePage === 2 ? "nav-page active" : "nav-page" } Icon={FiYoutube} subtitle="Watch" />
          <NavButton onClick={() => setActivePage(3)} className={activePage === 3 ? "nav-page active" : "nav-page" } Icon={FaStore} subtitle="Marketplace" />
          <NavButton onClick={() => setActivePage(4)} className={activePage === 4 ? "nav-page active" : "nav-page" } Icon={FaUsers} subtitle="Grupos" />
          <NavButton notification={5} onClick={() => setActivePage(5)} className={activePage === 5 ? "nav-page active" : "nav-page" } Icon={MdGames} subtitle="Jogos" />
        </section>

        <section className="menu-nav">
          <div className="profile-button">
            <img src={avatar} alt="user-avatar"/>
            <span className="user-name">Gabriel Noronha</span>
          </div>

          <MenuButton Icon={FaPlus} subtitle="Criar" onClick={() => setActiveMenu(1)} className={activeMenu === 1 ? "nav-menu active" : "nav-menu" }/>
          <MenuButton Icon={FaFacebookMessenger} notification={4} subtitle="Messenger" onClick={() => setActiveMenu(2)} className={activeMenu === 2 ? "nav-menu active" : "nav-menu" }/>
          <MenuButton Icon={FaBell} notification={1} subtitle="Notificações" onClick={() => setActiveMenu(3)} className={activeMenu === 3 ? "nav-menu active" : "nav-menu" }/>
          <MenuButton Icon={FaSortDown} subtitle="Conta" onClick={() => setActiveMenu(4)} className={activeMenu === 4 ? "nav-menu active" : "nav-menu" }/>
        </section>
    </header>
  );
}

export default Header;