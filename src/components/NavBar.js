import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href="#Home">home</a>
    <a href="#About">about</a>
    <a href="#Projects">projects</a>
  </nav>;
}

export default NavBar;
