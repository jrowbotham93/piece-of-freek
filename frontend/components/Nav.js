import React from "react";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav>
      {/* TODO: once style approved we can make this more dry */}
      <NavItem href="/shops" label="shops" />
      <NavItem href="/review" label="review" />
      <NavItem href="/history" label="history" />
      <NavItem href="/contact" label="contact" />
      <NavItem href="/about" label="about" />
    </nav>
  );
};

export default Nav;
