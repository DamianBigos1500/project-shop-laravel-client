import React from 'react';
import HeaderIcons from '../Elements/HeaderIcons';
import Search from '../Elements/Search';
import Logo from '../Elements/Logo';

export default function Header() {
  return (
    <div className="app-container">
      <div className="flex justify-between items-center sm:h-[4rem] flex-row sm:flex-nowrap flex-wrap h-[8rem]">
        <Logo />
        <Search />
        <HeaderIcons />
      </div>
    </div>
  );
}
