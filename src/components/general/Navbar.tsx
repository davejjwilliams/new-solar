import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to='/'>
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
          <Link to='/' className='nav-link'>
            <FaSun className='nav-icon' />
            SOLAR Group
          </Link>
          <Link to='/research' className='nav-link'>
            <FaFlask className='nav-icon' />
            Research
          </Link>
          <Link to='/open-science' className='nav-link'>
            <FaBookOpen className='nav-icon' />
            Open Science
          </Link>
          <Link to='/publications' className='nav-link'>
            <FaFileAlt className='nav-icon' />
            Publications
          </Link>
          <Link to='/awards' className='nav-link'>
            <FaTrophy className='nav-icon' />
            Awards
          </Link>
          <Link to='/members' className='nav-link'>
            <FaUsers className='nav-icon' />
            People
          </Link>
          <Link to='/funding' className='nav-link'>
            <FaHandHoldingUsd className='nav-icon' />
            Funding
          </Link>
          <Link to='/join-us' className='nav-link'>
            <FaUserPlus className='nav-icon' />
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
