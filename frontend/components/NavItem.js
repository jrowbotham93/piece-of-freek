import React from 'react';
import Link from 'next/link';

const NavItem = ({ location, label }) => {
  return (
    <Link href={`/${location}`}>
      <a className="nav-link">{label}</a>
    </Link>
  );
};

export default NavItem;
