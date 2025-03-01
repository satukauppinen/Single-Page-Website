import React from 'react';

const NavLink = ({ href, children }) => (
  <li>
    <a href={href}>{children}</a>
  </li>
);

export default NavLink;
