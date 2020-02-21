import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>© {year} Emiya Consulting</p>
    </footer>
  );
};

export default Footer;
