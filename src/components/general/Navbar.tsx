import { useState } from 'react';
import {
  FaSun,
  FaFlask,
  FaBookOpen,
  FaFileAlt,
  FaTrophy,
  FaUsers,
  FaHandHoldingUsd,
  FaUserPlus,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a href='/'>
        <img src='/favicon.png' alt='Logo' className='logo' />
      </a>
      <div className='navbar-container' style={{ position: 'relative' }}>
        <button
          className='hamburger'
          aria-label='Toggle menu'
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href='/' className='nav-link'>
            <FaSun className='nav-icon' />
            SOLAR Group
          </a>
          <a href='/research' className='nav-link'>
            <FaFlask className='nav-icon' />
            Research
          </a>
          <a href='/open-science' className='nav-link'>
            <FaBookOpen className='nav-icon' />
            Open Science
          </a>
          <a href='/publications' className='nav-link'>
            <FaFileAlt className='nav-icon' />
            Publications
          </a>
          <a href='/awards' className='nav-link'>
            <FaTrophy className='nav-icon' />
            Awards
          </a>
          <a href='/members' className='nav-link'>
            <FaUsers className='nav-icon' />
            People
          </a>
          <a href='/funding' className='nav-link'>
            <FaHandHoldingUsd className='nav-icon' />
            Funding
          </a>
          <a href='/join-us' className='nav-link'>
            <FaUserPlus className='nav-icon' />
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
