import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSun,
  FaFlask,
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
      <Link to='/' onClick={() => setMenuOpen(false)}>
        <img src='/favicon.png' alt='Logo' className='logo nav-logo' />
      </Link>
      <div className='navbar-container' style={{ position: 'relative' }}>
        <button
          className='hamburger'
          aria-label='Toggle menu'
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <Link to='/'  onClick={() => setMenuOpen(false)} className='nav-link'>
            <FaSun className='nav-icon' />
            SOLAR Group
          </Link>
          <Link to='/research' onClick={() => setMenuOpen(false)} className='nav-link'>
            <FaFlask className='nav-icon' />
            Research
          </Link>
          <Link to='/publications' onClick={() => setMenuOpen(false)} className='nav-link'>
            <FaFileAlt className='nav-icon' />
            Publications
          </Link>
          <Link to='/awards' onClick={() => setMenuOpen(false)} className='nav-link'>
            <FaTrophy className='nav-icon' />
            Awards
          </Link>
          <Link to='/members' onClick={() => setMenuOpen(false)} className='nav-link'>
            <FaUsers className='nav-icon' />
            People
          </Link>
          <Link to='/funding' onClick={() => setMenuOpen(false)} className='nav-link'>
            <FaHandHoldingUsd className='nav-icon' />
            Funding
          </Link>
          <Link to='/join-us' onClick={() => setMenuOpen(false)} className='nav-link'>
            <FaUserPlus className='nav-icon' />
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
