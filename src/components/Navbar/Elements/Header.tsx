import React from 'react';
import HeaderIcons from '../Elements/HeaderIcons';
import Search from '../Elements/Search';
import Logo from '../Elements/Logo';

export default function Header() {
  return (
    <div className="grid md:grid-cols-[auto_1fr_auto] grid-cols-2 grid-rows-[4rem_4rem] md:grid-rows-1">
      <Logo />
      <Search />
      <HeaderIcons />
    </div>
  );
}
