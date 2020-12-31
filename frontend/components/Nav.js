import React from "react";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav>
      {/* TODO: once style approved we can make this more dry */}
      <NavItem location="shops" label="shops" />
      <NavItem location="review" label="review" />
      <NavItem location="history" label="history" />
      <NavItem location="contact" label="contact" />
      <NavItem location="about" label="about" />
    </nav>
  );
};

export default Nav;
