import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

export default function AuthProvider({ children }: any) {
  const { loading } = useAuth();
  
  if (loading) return <div></div>;
  console.log('user')
  return <div>{children}</div>;
}
