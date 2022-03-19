import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>MADE BY : HRITIKESH BOYAPATI ..... IIT INDORE {year}</p>
    </footer>
  );
}

export default Footer;
