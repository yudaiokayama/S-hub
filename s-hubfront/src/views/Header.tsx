import React from 'react';
import './css/Header.css';
import sublogo from '../img/sublogo.svg';

const Header: React.FC<{ title: string }> = ({title}) => {
  return (
    <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      <h1>{title}</h1>
      <img src = {sublogo}></img>
    </header>
  );
};

export default Header;
