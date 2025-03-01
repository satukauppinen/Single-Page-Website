import React from 'react';
import NavLink from './NavLink';

const Header = () => (
  <header>
    <nav>
      <ul>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#hotairballoon">Hot Air Balloon</NavLink>
        <NavLink href="#venus">Venus</NavLink>
        <NavLink href="#crocodile">Crocodile</NavLink>
        <NavLink href="#lemon">Lemon</NavLink>
        <NavLink href="#note">Note!</NavLink>
      </ul>
    </nav>
  </header>
);

export default Header;
