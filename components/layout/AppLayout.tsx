import React from 'react';
import Navbar from '../Navbar/Navbar';
import useAuthContext from '../../context/authContext';

export default function Layout({ children }: any) {
  const { user } = useAuthContext();
  
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
